import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchGames } from '../../api/api-fetch';
import { gamesURL } from '../../api/api-url';

import { motion } from 'framer-motion';

// Importation pour Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';

// Importation des composants
import Title from '../Title';
import NextButton from '../gameshow/NextButton';
import PreviousButton from '../gameshow/PreviousButton';
import IconPlus from '../icons/IconPlus';
import PlatformsList from './PlatformsList';

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

export default function CarrouselHome() {
  const [newGames, setNewGames] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // State de l'index actif du conteneur référent Swiper
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

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

      <div className="relative">
        {/* Composant Swiper pour instancier un carrousel via la dépendance */}
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            // console.log('swiper: ', swiper);
          }}
          onSlideChange={() => {
            setActiveIndex(swiperRef.current.activeIndex);
          }}
          slidesPerView={1}
          grabCursor={true}
          cssMode={true}
          spaceBetween={10}
          pagination={{
            clickable: true,
            bulletActiveClass: '!bg-primary',
            bulletClass: 'bg-secondary/20',
            el: '.custom-pagination',
            renderBullet: (index, className) => {
              return `
                <div class="${className} inline-block skew-x-[-35deg] h-1 w-full mx-1"></div>
              `;
            },
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          modules={[Pagination, Navigation]}
          className="h-[30rem] w-[90%] !overflow-x-visible"
        >
          {/* Boutons Précédent et Suivant */}
          <div className="absolute top-[50%] z-20 flex w-full -translate-y-1/2 justify-between">
            <div className="translate-x-[-50%]">
              {activeIndex !== 0 && (
                <PreviousButton
                  handleClickPrev={() => swiperRef.current.slidePrev()}
                />
              )}
            </div>
            <div className="translate-x-[50%]">
              {swiperRef.current &&
                (activeIndex !==
                  swiperRef.current.pagination.el.childElementCount - 1 ||
                  activeIndex === 0) && (
                  <NextButton
                    handleClickNext={() => swiperRef.current.slideNext()}
                  />
                )}
            </div>
          </div>

          {/* Slides qui affichent les jeux vidéos */}
          {isLoaded ? (
            newGames.results.map((game, index) => (
              <SwiperSlide
                key={index}
                className="overflow-hidden rounded-[3px]"
              >
                <Link
                  to={`/games/${game.slug}`}
                  className="block h-full w-full"
                >
                  <motion.div
                    variants={sliderVariants}
                    initial="hidden"
                    whileInView="visible"
                    className="relative h-full w-full bg-light/20"
                  >
                    <div className="card-mask absolute bottom-0 flex h-1/2 w-full flex-col justify-end gap-2 bg-dark/50 p-2">
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

          {/* Dernière slide pour rediriger les utilisateurs */}
          <SwiperSlide className="overflow-hidden rounded-[3px]">
            <Link to="/new-games">
              <motion.div
                initial={{ opacity: 0.5, y: 100 }}
                whileHover={{ opacity: 1 }}
                transition={{
                  type: 'tween',
                  duration: 0.3,
                  ease: 'easeOut',
                }}
                whileInView={{
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
                }}
                className="text-black flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-l from-primary/30 to-primary/20 font-text text-2xl text-light"
              >
                <IconPlus />
                Show more
              </motion.div>
            </Link>
          </SwiperSlide>
        </Swiper>

        {/* Pagination qui reprend les paramètres "pagination" de la balise <Swiper> */}
        <div className="flex w-full items-center justify-center">
          <div className="custom-pagination my-4 flex w-[90%]"></div>
        </div>
      </div>
    </>
  );
}
