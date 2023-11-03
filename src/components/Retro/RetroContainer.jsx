import { useState, useEffect } from 'react';
import { fetchGames, fetchGameElements } from '../../api/api-fetch';
import { gamesURL, screenshotsURL } from '../../api/api-url';
import Top10List from './Top10List';
import Cube3D from './Cube3D';
import Title from '../Title';

export default function RetroContainer({ genres }) {
  const [games, setGames] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [screenshots, setScreenshots] = useState();
  const [hoveringGameId, setHoveringGameId] = useState(null);
  const [shouldShowRange, setShouldShowRange] = useState(false);
  const [selectedGameId, setSelectedGameId] = useState(null);
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
    setShouldShowRange((prev) => !prev);
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    let queryString;
    if (!shouldShowRange) {
      if (date < 1970 || date > 1999) {
        return;
      }
      queryString = `page_size=10&ordering=rating-released.desc&dates=${date}-01-01,${date}-12-31`;
    } else {
      if (
        dateRange.start < 1970 ||
        dateRange.start > 1999 ||
        dateRange.end < 1970 ||
        dateRange.end > 1999 ||
        dateRange.start > dateRange.end
      ) {
        return;
      }
      queryString = `page_size=10&ordering=rating-released.desc&dates=${dateRange.start}-01-01,${dateRange.end}-12-31`;
    }

    fetchGames({
      parameter: gamesURL,
      setter: setGames,
      setLoaded: setIsLoaded,
      signal,
      queryString,
    });

    return () => controller.abort();
  }, [date, dateRange, shouldShowRange, dateRange.start, dateRange.end]);

  // useEffect qui permet d'activer par défaut l'envoi d'images
  // du premier jeu par défaut, au chargement de la page.
  useEffect(() => {
    if (games?.results?.length > 0) {
      const firstGameId = games.results[0].id;
      setHoveringGameId(firstGameId);
      setSelectedGameId(firstGameId);
    }
  }, [games]);

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
        <div className="relative flex h-auto w-full flex-col items-center bg-dark xl:flex-row">
          <div className="xl:perspective-900 xl-pl-5 order-2 mt-10 flex w-11/12 flex-col justify-between pt-10 text-justify text-light sm:ml-5 md:ml-10 xl:order-1 xl:pl-10">
            <h1 className="xl:perspective-900 py-7 font-pixel text-3xl font-bold uppercase text-yellow-200">
              High scores
            </h1>
            <Top10List
              games={games}
              isLoaded={isLoaded}
              genres={genres}
              setHoveringGameId={setHoveringGameId}
              selectedGameId={selectedGameId}
              setSelectedGameId={setSelectedGameId}
            />
            <div className="xl:perspective-640 mr-10 flex items-center self-end pb-20 pt-4 font-pixel xl:mr-0">
              <button
                className="me-7 p-1.5 hover:bg-light hover:text-dark"
                onClick={handleSelectClick}
              >{`Select >`}</button>
              {!shouldShowRange ? (
                <div>
                  <label>
                    Year
                    <input
                      className="ml-3 w-24 border border-light bg-dark"
                      type="number"
                      min="1975"
                      max="1999"
                      step="1"
                      value={date}
                      onChange={handleDateChange}
                    />
                  </label>
                </div>
              ) : (
                <div className="flex flex-col items-end">
                  <label className="text-xs">
                    Start
                    <input
                      className="ml-3 w-24 border border-light bg-dark text-xs text-light"
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
                      className="ml-3 w-24 border border-light bg-dark text-light"
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
              )}
            </div>
          </div>
          <div className="order-1 h-full w-2/3">
            <Cube3D screenshots={screenshots} gameId={hoveringGameId} />
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
