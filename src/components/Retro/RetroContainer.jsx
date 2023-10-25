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
  const gamesId = [3498];

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetchGames({
      parameter: gamesURL,
      setter: setGames,
      setLoaded: setIsLoaded,
      signal,
      queryString:
        'page_size=10&ordering=rating-released.desc&dates=1990-01-01,1991-01-01.1990-01-01,1991-01-31',
    });

    fetchGameElements({
      parameter: screenshotsURL,
      gameId: gamesId[0],
      setter: setScreenshots,
      setLoaded: setIsLoaded,
      signal,
    });

    fetchGameElements({
      parameter: moviesURL,
      gameId: gamesId[0],
      setter: setMovies,
      setLoaded: setIsLoaded,
      signal,
    });

    return () => controller.abort();
  }, []);

  return (
    <div className="overflow-hidden pt-20">
      <div>
        <Title title="Oldies & Goodies - " subTitle="Retro Store" />
      </div>
      <div className="relative flex h-auto w-full flex-col items-center bg-dark lg:flex-row">
        <div className="perspective-700 sm-pl-5 order-2 mt-10 flex w-11/12 flex-col justify-between pt-10 text-justify text-light sm:ml-5 md:ml-10 md:pl-10 lg:order-1">
          <h1 className="perspective-700 text-yellow-200 py-5 font-pixel text-3xl font-bold uppercase">
            High scores
          </h1>
          <Top10List games={games} isLoaded={isLoaded} genres={genres} />
          <div className="perspective-640 self-end pb-16 font-pixel">
            <a className="rotate-360 p-2 hover:bg-light hover:text-dark">{`Enter >`}</a>
          </div>
        </div>
        <div className="order-1 h-full w-2/3">
          <Cube3D
            screenshots={screenshots}
            movies={movies}
            isLoaded={isLoaded}
          />
        </div>
      </div>
    </div>
  );
}
