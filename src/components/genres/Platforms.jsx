import Carousel from './Carousel';
import GridCard from './GridCard';
import { useState, useEffect } from 'react';
import { fetchGames, fetchPlatformDetails } from '../../api/api-fetch.js';
import { gamesURL } from '../../api/api-url.js';
import { useParams } from 'react-router-dom';
import HeaderGenre from './HeaderGenre';

export default function Platforms() {
  const { id } = useParams();
  const [games, setGames] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [gameIndex, setGameIndex] = useState(0);
  const [platforms, setPlatforms] = useState([]);

  const currentGame =
    games?.results?.slice(0, 10).sort((a, b) => b.metacritic - a.metacritic)[
      gameIndex
    ] || {};

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchGames({
      parameter: gamesURL,
      pageId: 1,
      setter: setGames,
      setLoaded: setIsLoaded,
      queryString: `platforms=${id}`,
      signal,
    });

    fetchPlatformDetails({
      platformId: id,
      setter: setPlatforms,
      setLoaded: setIsLoaded,
      signal,
    });

    return () => {
      controller.abort();
    };
  }, [id]);

  return (
    <>
      <HeaderGenre currentGame={currentGame} />
      <section className="z-50 mt-[8rem] w-full px-2 xs:px-5 md:px-16 lg:px-2">
        <div className="flex flex-col ">
          <h1 className="text-start font-title text-7xl text-light">
            {platforms.name}
          </h1>

          <div className="mt-4 h-5 w-28 -skew-x-35 bg-primary"></div>
        </div>
        <div className="mx-auto w-[80%] lg:max-w-[55vw]">
          {isLoaded ? (
            <Carousel
              games={games}
              isLoaded={isLoaded}
              gameIndex={gameIndex}
              setGameIndex={setGameIndex}
              currentGame={currentGame}
              slug={id}
            />
          ) : (
            <p>loading...</p>
          )}
        </div>
        <GridCard games={games} isLoaded={isLoaded} />
      </section>
    </>
  );
}
