import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

import Title from '../Title';
import CardGame from './CardGame';
import useGameSearch from './useGameSearch';

export default function Search() {
  const cardsRef = useRef(null);
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get('search');

  // Fetche API pour récupérer les jeux vidéos en fonction de la valeur de la recherche
  const { games, hasMore, count, isLoaded, page } = useGameSearch({
    searchValue,
  });

  console.log('page :', page);

  const ratio = 1;
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio,
  };

  const handleIntersect = (entries, observer) => {
    const firstEntry = entries[0];

    if (firstEntry.isIntersecting && hasMore) {
      // fetchMoreGames();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, options);

    if (observer && cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [games]);

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
            games.map((game, index) => {
              return <CardGame key={index} game={game} isLoaded={isLoaded} />;
            })
          ) : (
            <p>Loading...</p>
          )}
          {hasMore && <div ref={cardsRef}></div>}
        </div>
        <div className="flex justify-center text-light">
          <p>{!isLoaded && 'Loading...'}</p>
        </div>
      </section>
    </>
  );
}
