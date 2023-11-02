import { useState, useEffect } from 'react';
import { fetchGames, fetchGameElements } from '../../api/api-fetch';
import { gamesURL, screenshotsURL, moviesURL } from '../../api/api-url';
import Top10List from './Top10List';
import Cube3D from './Cube3D';
import Title from '../Title';

export default function RetroContainer({ genres }) {
  const [games, setGames] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [screenshots, setScreenshots] = useState();
  const [movies, setMovies] = useState();
  const [hoveringGameId, setHoveringGameId] = useState(null);
  const [dateInputType, setDateInputType] = useState('none');
  const [date, setDate] = useState(1988);
  const [dateRange, setDateRange] = useState({ start: 1990, end: 1993 });

  // Sélection du tri par dates
  const handleDateRangeChange = (e) => {
    const { name, value } = e.target;
    setDateRange((prevRange) => ({ ...prevRange, [name]: value }));
  };

  // Sélection du top 10 des jeux par année, sélectionnable.
  const handleDateChange = (e) => {
    const year = e.target.value;
    setDate(year);
  };

  const handleSelectClick = () => {
    if (dateInputType === 'none') {
      setDateInputType('year');
    } else if (dateInputType === 'year') {
      setDateInputType('period');
    } else if (dateInputType === 'period') {
      setDateInputType('none');
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    let queryString;
    if (dateInputType === 'year') {
      queryString = `page_size=10&ordering=rating-released.desc&dates=${date}-01-01,${date}-12-31`;
    } else if (dateInputType === 'period') {
      queryString = `page_size=10&ordering=rating-released.desc&dates=${dateRange.start}-01-01,${dateRange.end}-12-31`;
    }

    fetchGames({
      parameter: gamesURL,
      setter: (games) => {
        setGames(games);
        if (games.length > 0) {
          setHoveringGameId(games[0].id);
        }
      },
      setLoaded: setIsLoaded,
      signal,
      queryString,
    });

    return () => controller.abort();
  }, [date, dateRange, dateInputType, dateRange.start, dateRange.end]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchGameElements({
      parameter: screenshotsURL,
      gameId: hoveringGameId,
      setter: setScreenshots,
      setLoaded: setIsLoaded,
      signal,
    });

    fetchGameElements({
      parameter: moviesURL,
      gameId: hoveringGameId,
      setter: setMovies,
      setLoaded: setIsLoaded,
      signal,
    });

    return () => controller.abort();
  }, [hoveringGameId]);

  return (
    <div className="mt-40">
      <div className="overflow-hidden pt-20">
        <div>
          <Title title="Oldies & Goodies - " subTitle="Retro Store" />
        </div>
        <div className="space-y-1.5">
          <div className="h-0.5 w-screen bg-dark"></div>
          <div className="h-1 w-screen bg-dark"></div>
          <div className="h-1.5 w-screen bg-dark"></div>
          <div className="h-2 w-screen bg-dark"></div>
          <div className="h-3 w-screen bg-dark"></div>
          <div className="h-4 w-screen bg-dark"></div>
        </div>
        <div className="relative flex h-auto w-full flex-col items-center bg-dark lg:flex-row">
          <div className="lg:perspective-700 sm-pl-5 order-2 mt-10 flex w-11/12 flex-col justify-between pt-10 text-justify text-light sm:ml-5 md:ml-10 md:pl-10 lg:order-1">
            <h1 className="lg:perspective-700 text-yellow-200 py-7 font-pixel text-3xl font-bold uppercase">
              High scores
            </h1>
            <Top10List
              games={games}
              isLoaded={isLoaded}
              genres={genres}
              setHoveringGameId={setHoveringGameId}
            />
            <div className="lg:perspective-640 flex self-end pb-20 pt-4 font-pixel">
              <button
                className="me-7 p-1.5 hover:bg-light hover:text-dark"
                onClick={handleSelectClick}
              >{`Select >`}</button>
              {dateInputType === 'year' ? (
                <div>
                  <label>
                    Year
                    <input
                      className="ml-3 w-32 border border-light bg-dark"
                      type="number"
                      min="1975"
                      max="1999"
                      step="1"
                      value={date}
                      onChange={handleDateChange}
                    />
                  </label>
                </div>
              ) : dateInputType === 'period' ? (
                <div className="flex flex-col items-end">
                  <label className="text-xs">
                    Start
                    <input
                      className="ml-3 w-32 border border-light bg-dark text-xs text-light"
                      type="number"
                      min="1975"
                      max="1998"
                      step="1"
                      name="start"
                      value={dateRange.start}
                      onChange={handleDateRangeChange}
                    />
                  </label>
                  <label className="ml-3 text-xs">
                    End
                    <input
                      className="ml-3 w-32 border border-light bg-dark text-light"
                      type="number"
                      min={dateRange.start}
                      max="1999"
                      step="1"
                      name="end"
                      value={dateRange.end}
                      onChange={handleDateRangeChange}
                    />
                  </label>
                </div>
              ) : null}
            </div>
          </div>
          <div className="order-1 h-full w-2/3">
            <Cube3D screenshots={screenshots} movies={movies} />
          </div>
        </div>
        <div className="space-y-1.5">
          <div className="h-4 w-screen bg-dark"></div>
          <div className="h-3 w-screen bg-dark"></div>
          <div className="h-2 w-screen bg-dark"></div>
          <div className="h-1.5 w-screen bg-dark"></div>
          <div className="h-1 w-screen bg-dark"></div>
          <div className="h-0.5 w-screen bg-dark"></div>
        </div>
      </div>
    </div>
  );
}
