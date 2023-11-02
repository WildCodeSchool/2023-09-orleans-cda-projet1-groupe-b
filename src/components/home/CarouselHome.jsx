import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Importation pour Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';

// Importation des composants
import NextButton from '../gameshow/NextButton';
import PreviousButton from '../gameshow/PreviousButton';
import IconPlus from '../icons/IconPlus';

export default function CarrouselHome({ children, path }) {
  // State de l'index actif du conteneur référent Swiper
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <>
      <div className="relative">
        {/* Composant Swiper pour instancier un carrousel via la dépendance */}
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={() => {
            setActiveIndex(swiperRef.current.activeIndex);
          }}
          slidesPerView={1}
          grabCursor={true}
          cssMode={true}
          wrapperClass="!h-[95%] !mx-3"
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
          className="!flex h-[35rem] w-[95%] items-center !overflow-x-visible"
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

          {/* Affichages des cards */}
          {children}

          {/* Dernière slide pour rediriger les utilisateurs */}
          <SwiperSlide className="overflow-hidden rounded-[3px]">
            <Link to={path}>
              <motion.div
                initial={{ opacity: 0.5, y: 100, scale: 0.93 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{
                  type: 'tween',
                  duration: 0.3,
                  ease: 'easeInOut',
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
                className="flex h-full w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-[3px] bg-gradient-to-l from-primary/30 to-primary/20 font-text text-2xl text-black text-light"
              >
                <IconPlus />
                Show more
              </motion.div>
            </Link>
          </SwiperSlide>
        </Swiper>

        {/* Pagination qui reprend les paramètres "pagination" de la balise <Swiper> */}
        <div className="mb-5 flex w-full items-center justify-center">
          <div className="custom-pagination flex w-[95%] px-2"></div>
        </div>
      </div>
    </>
  );
}
