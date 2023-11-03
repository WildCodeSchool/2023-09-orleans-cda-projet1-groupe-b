import Carousel from './Carousel';
import GridCard from './GridCard';
import { useState, useEffect } from 'react';
import { fetchGames } from '../../api/api-fetch.js';
import { gamesURL } from '../../api/api-url.js';
import { useParams } from 'react-router-dom';
import HeaderGenre from './HeaderGenre';
import Title from '../Title';

export default function Categories() {
  const { slug } = useParams();
  const [games, setGames] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [gameIndex, setGameIndex] = useState(0);

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
      queryString: `genres=${slug} `,
      signal,
    });
    return () => {
      controller.abort();
    };
  }, [slug]);

  return (
    <>
      <HeaderGenre currentGame={currentGame} />
      <section className="z-30 mt-[8rem] w-full px-2 xs:px-5 md:px-16 lg:px-2">
        {isLoaded ? (
          <div className="mb-40 mt-40">
            {isLoaded && slug ? (
              <h1 className="font-title text-8xl uppercase text-light">
                {slug}
              </h1>
            ) : (
              <p>Loading...</p>
            )}
            <div className="flex justify-center md:justify-start">
              <div className="ml-1 mt-6 h-5 w-28 -skew-x-35 bg-primary"></div>
            </div>
          </div>
        ) : (
          'Loading...'
        )}
        <div className="mx-auto mb-20 w-[80%] lg:max-w-[55vw]">
          {isLoaded ? (
            <Carousel
              games={games}
              isLoaded={isLoaded}
              gameIndex={gameIndex}
              setGameIndex={setGameIndex}
              currentGame={currentGame}
              slug={slug}
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
