import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Title from '../Title';
import CardGame from './CardGame';
import useGameSearch from './useGameSearch';

export default function Search() {
  const [isLoaded, setLoaded] = useState(true);

  const cardsRef = useRef(null);
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get('search');

  // Use custom pour fetcher l'API afin de récupérer les jeux vidéos en fonction de la valeur de la recherche
  const { games, hasMore, count, isLoading, fetchAllGames, page, setPage } =
    useGameSearch({
      searchValue,
    });

  useEffect(() => {
    if (!isLoading) {
      setLoaded(false);
    }
  }, [isLoading]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const ratio = 0.5;
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: ratio,
    };

    const handleIntersect = (entries) => {
      const firstEntry = entries[0];

      if (firstEntry.isIntersecting) {
        if (isLoading) {
          return;
        } else if (hasMore) {
          fetchAllGames({ searchValue, signal, pageNumber: page + 1 });
          setPage((prevPage) => prevPage + 1);
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    if (observer && cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => {
      controller.abort();
      if (observer) {
        observer.disconnect();
      }
    };
  }, [fetchAllGames, hasMore, page, searchValue, setPage, isLoading]);

  return (
    <>
      <section className="z-20 w-full px-2 xs:px-5 md:px-16 lg:px-2">
        <div className="mt-32">
          <Title
            title={`${count} result${count > 1 ? 's' : ''} of "${searchValue}"`}
          />
        </div>
        <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4">
          {!isLoaded ? (
            games.map((game, index) => {
              return <CardGame key={index} game={game} isLoaded={isLoaded} />;
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
        {!isLoading && hasMore && (
          <div ref={cardsRef} className="text-light">
            Load More Items...
          </div>
        )}
      </section>
    </>
  );
}
