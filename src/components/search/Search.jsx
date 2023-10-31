import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import Title from '../Title';
import CardGame from './CardGame';
import useGameSearch from './useGameSearch';
import Spinner from '../Spinner';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      duration: 0.5,
    },
  },
};

const childrenVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

export default function Search() {
  const [isLoaded, setLoaded] = useState(true);
  const [showSpinner, setShowSpinner] = useState(false);

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

  // Fetch la suite des jeux vidéos lorsqu'on arrive en bas de la page
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    // Configuration du conteneur pour Intersection observer
    const ratio = 0.5;
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: ratio,
    };

    let timer = 0;

    // Fetch les jeux vidéos avec un timer et un spiner lors du chargement des données
    const handleIntersect = (entries) => {
      const firstEntry = entries[0];

      if (firstEntry.isIntersecting) {
        if (isLoading) {
          return;
        } else if (hasMore) {
          clearTimeout(timer);
          setShowSpinner(true);

          timer = setTimeout(() => {
            fetchAllGames({ searchValue, signal, pageNumber: page + 1 });
            setPage((prevPage) => prevPage + 1);
            setShowSpinner(false);
          }, 1500);
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
      <section
        className={`z-20 h-full w-full px-2 xs:px-5 md:px-16 ${
          location.pathname !== '/' ? 'lg:w-[64%]' : 'lg:w-[75%] xl:w-[82%]'
        } lg:px-2`}
      >
        <div className="mt-32">
          <Title
            title={`${count} result${count > 1 ? 's' : ''} of "${searchValue}"`}
          />
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4"
        >
          {games.map((game, index) => {
            return (
              <motion.div
                key={index}
                variants={childrenVariants}
                custom={index % 20}
              >
                <CardGame key={index} game={game} isLoaded={isLoaded} />
              </motion.div>
            );
          })}
        </motion.div>
        <div className="my-4 flex justify-center">
          <Spinner showSpinner={showSpinner} />
        </div>
        {!isLoading && hasMore && (
          <motion.div
            variants={childrenVariants}
            ref={cardsRef}
            className="text-light"
          ></motion.div>
        )}
      </section>
    </>
  );
}
