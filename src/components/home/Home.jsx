import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { fetchCategoryDetails } from '../../api/api-fetch';

import Logo from '../Logo';
import Button from '../Button';
import HeaderHome from './HeaderHome';

const GENRES_ID = [4, 51, 3, 5, 10, 2, 40, 14, 7, 11, 83, 1, 14, 19];

// Génére un index aléatoire par rapport à la longueur du tableau GENRE_ID
const RANDOM_INDEX = Math.floor(Math.random() * GENRES_ID.length);

// Extrait la valeur de l'ID d'une catégorie par rapport à un index aléatoire
const RANDOM_GENRES = GENRES_ID[RANDOM_INDEX];

export default function Home() {
  const [imageHeader, setImageHeader] = useState();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchCategoryDetails({
      categoryId: RANDOM_GENRES,
      setter: setImageHeader,
      property: 'image_background',
      signal,
    });

    return () => controller.abort();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        type: 'tween',
        ease: 'easeInOut',
        staggerChildren: 0.1,
        duration: i,
      },
    }),
  };

  const childVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'tween',
        ease: 'easeInOut',
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <HeaderHome imageHeader={imageHeader} />
      <section className="z-50 mt-[10rem] w-full px-2 xs:px-5 md:px-16 lg:px-2">
        <div className="flex flex-col items-center md:items-start">
          <div className="w-clamp-title lg:w-[40vw]">
            <Logo />
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            custom=".8"
          >
            <motion.div variants={childVariants}>
              <div className="flex justify-center md:justify-start">
                <div className="ml-1 mt-10 h-5 w-28 -skew-x-35 bg-primary"></div>
              </div>
            </motion.div>
            <motion.p
              className="my-10 px-5 text-center text-2xl text-light md:w-[50vw] md:px-0 md:text-start"
              variants={childVariants}
            >
              Discover a wide selection of the best video games available on all
              platforms, your go-to source for exploring a world rich in virtual
              entertainment.
            </motion.p>
            <motion.div
              className="mt-20 flex justify-center md:ml-5 md:justify-start"
              variants={childVariants}
            >
              <Button str="Show all games" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
