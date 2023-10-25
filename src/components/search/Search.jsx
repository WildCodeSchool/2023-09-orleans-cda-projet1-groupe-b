import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

// Importation de la clé API
const API_KEY = import.meta.env.VITE_API_KEY;

import Title from '../Title';
import CardGame from './CardGame';

export default function Search() {
  const [games, setGames] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get('search');

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchAllGames = async () => {
      try {
        const allGames = [];

        // Boucle qui itére sur les pages
        const response = await fetch(
          `https://api.rawg.io/api/games?key=${API_KEY}&search=${searchValue}&search_precise=true&page=${page}&page_size=20`,
          signal,
        );

        if (response.ok) {
          const data = await response.json();

          if (data.results && data.results.length > 0) {
            setCount(data.count);
            const filteredGames = data.results.filter((dataGame) =>
              dataGame.name.toLowerCase().includes(searchValue.toLowerCase()),
            );

            allGames.push(...filteredGames);
          } else {
            throw new Error(
              `Unable to load video game list : ${response.status}`,
            );
          }
        }

        setIsLoaded(true);
        setGames(allGames);
      } catch (error) {
        throw new Error(`Unable to load API : ${error}`);
      }
    };

    fetchAllGames();

    return () => controller.abort();
  }, [searchValue]);

  console.log(games);

  return (
    <>
      <section className="z-20 w-full px-2 xs:px-5 md:px-16 lg:px-2">
        <div className="mt-32">
          <Title
            title={`${count} result${count > 1 ? 's' : ''} of "${searchValue}"`}
          />
        </div>
        <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4">
          {isLoaded ? (
            games.map((game) => <CardGame game={game} isLoaded={isLoaded} />)
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </section>
    </>
  );
}
