import Carousel from './Carousel';
import GridCard from './GridCard';
import { useState, useEffect } from 'react';
import { fetchGames } from '../../api/api-fetch.js';
import { gamesURL } from '../../api/api-url.js';
import { useParams } from 'react-router-dom';
import HeaderGenre from './HeaderGenre';

export default function Categories() {
  const { slug } = useParams();
  const [games, setGames] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [gameIndex, setGameIndex] = useState(0);

  const currentGame = games?.results?.[gameIndex] || [];

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
  }, [slug]);
  //if(currentGame){

  //}

  return (
    <>
      <HeaderGenre currentGame={currentGame} />
      <section className="z-50 mt-[10rem] w-full px-2 xs:px-5 md:px-16 lg:px-2">
        <div className="mx-auto w-[80%] lg:max-w-[55vw]">
          <Carousel
            games={games}
            isLoaded={isLoaded}
            gameIndex={gameIndex}
            setGameIndex={setGameIndex}
            currentGame={currentGame}
          />
        </div>
        <GridCard games={games} isLoaded={isLoaded} />
      </section>
    </>
  );
}
