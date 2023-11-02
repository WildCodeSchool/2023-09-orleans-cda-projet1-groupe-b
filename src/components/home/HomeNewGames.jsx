import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { fetchGames } from '../../api/api-fetch';
import { gamesURL } from '../../api/api-url';

import Title from '../Title';
import CarouselHome from './CarouselHome';
import PlatformsList from './PlatformsList';

import { SwiperSlide } from 'swiper/react';
import 'swiper/css';

// Variante
const sliderVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 0.8,
      delay: 0.1,
      bounce: 0.5,
      damping: 30,
      mass: 3,
      stiffness: 300,
    },
  },
};

export default function HomeNewGames() {
  const [newGames, setNewGames] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Fetcher API
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    // Dates
    const today = new Date();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const lastMonth = today.getMonth().toString().padStart(2, '0');
    const year = today.getFullYear().toString();
    const day = today.getDate().toString().padStart(2, '0');

    // Date d'aujoud'hui
    const currentDate = `${year}-${month}-${day}`;

    // Date d'aujourd'hui -1 mois
    const lastDate = `${year}-${lastMonth}-${day}`;

    // Récupération de 10 jeux les plus récents
    fetchGames({
      parameter: gamesURL,
      setter: setNewGames,
      setLoaded: setIsLoaded,
      signal,
      queryString: `dates=${lastDate},${currentDate}&page_size=10`,
    });

    return () => controller.abort();
  }, []);

  return (
    <>
      <div className="mt-40">
        <Title title="New games" />
      </div>

      <CarouselHome path="/new-games">
        {/* Slides qui affichent les jeux vidéos */}
        {isLoaded ? (
          newGames.results.map((game, index) => (
            <SwiperSlide
              key={index}
              className="block scale-[0.93] overflow-hidden rounded-[3px] transition-all duration-300 ease-in-out hover:scale-100"
            >
              <Link
                to={`/games/${game.slug}`}
                className="block h-full w-full transition-all duration-300 hover:p-1"
              >
                <motion.div
                  variants={sliderVariants}
                  initial="hidden"
                  whileInView="visible"
                  className="relative h-full w-full bg-light/20"
                >
                  <div className="card-mask absolute bottom-0 flex h-1/2 w-full flex-col justify-end gap-2 bg-dark/70 p-2">
                    <div>
                      {/* Importation du composant qui convertit les noms des platformes en logos */}
                      <PlatformsList game={game} isLoaded={isLoaded} />
                    </div>

                    <div className="overflow-auto">
                      <h2 className="font-title text-xl text-light">
                        {game.name}
                      </h2>
                    </div>

                    <div>
                      {/* Affiche que trois catégories */}
                      <ul className="flex flex-wrap gap-2 font-text text-light/80">
                        {game.genres.slice(0, 3).map((genre, index) => (
                          <li key={index}>{genre.name}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="h-full w-full">
                    <img
                      src={game.background_image}
                      alt={`Picture of ${game.name}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </motion.div>
              </Link>
            </SwiperSlide>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </CarouselHome>
    </>
  );
}
