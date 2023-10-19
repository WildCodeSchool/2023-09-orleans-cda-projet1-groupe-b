import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

import Title from '../Title';
import Button from '../Button';
import LogoPc from '../logos/LogoPc';
import LogoPlaystation from '../logos/LogoPlaystation';
import LogoNintendo from '../logos/LogoNintendo';
import LogoIos from '../logos/LogoIos';

const API_KEY = import.meta.env.VITE_API_KEY;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      type: 'tween',
      ease: 'easeInOut',
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const childrenVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    zIndex: 1,
    x: 0,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 1,
      delay: 1,
    },
  },
  exit: {
    opacity: 0,
    zIndex: 0,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 1,
    },
  },
};

export default function Unavoidable() {
  // States API
  const [gamesList, setGamesList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // State affichage du jeu sélectionné
  const [gameIndex, setGameIndex] = useState(0);
  const currentGame = gamesList[gameIndex];

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    // Fonction asynchrone qui va fetcher sur l'api 3 fois pour récupérer les informations de League of Legends, God of War 2 et The Legend of Zelda et les stocker dans un state
    const fetchGames = async () => {
      try {
        const gamePk = [
          'league-of-legends',
          'god-of-war-2',
          'the-legend-of-zelda-breath-of-the-wild-sequel',
        ];
        const unavoidableGames = [];

        for (let i = 0; i < gamePk.length; i++) {
          const response = await fetch(
            `https://api.rawg.io/api/games/${gamePk[i]}?key=${API_KEY}`,
            signal,
          );

          if (response.ok) {
            const data = await response.json();
            unavoidableGames.push(data);
          } else {
            throw new Error(
              `Unable to load video game list : ${response.status}`,
            );
          }
        }

        setIsLoaded(true);
        setGamesList(unavoidableGames);
      } catch (error) {
        throw new Error(`Unable to load API : ${error}`);
      }
    };

    fetchGames();

    return () => controller.abort();
  }, []);

  // Evenement au clique qui permet de changer le state de l'index d'un jeu
  const handleGameClick = (index) => {
    setGameIndex(index);
  };

  // Configuration animation au scroll en fonction du conteneur référent
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['center end', 'end end'],
  });

  const TransformX = (val) =>
    useTransform(scrollYProgress, [0, 1], [val, 0], {
      transition: {
        type: 'spring',
      },
    });

  return (
    <>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mt-1">
          <Title title="The unavoidable" />
        </div>
        <div className="relative z-20 ml-auto flex flex-col rounded-[3px] object-left-top lg:mr-5 lg:flex-row">
          <motion.div
            style={{ x: TransformX(-300), opacity: scrollYProgress }}
            className="top-[-50px] z-20 mb-1 h-full w-full overflow-hidden rounded-[3px] shadow-xl md:absolute md:w-[45%] md:rounded-br-[50px] md:rounded-tl-[50px]"
          >
            <AnimatePresence>
              <motion.img
                key={gameIndex}
                variants={childrenVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                src={currentGame && currentGame.background_image}
                alt={`Picture of ${currentGame && currentGame.name}`}
                className="h-full w-full object-cover"
              />
            </AnimatePresence>
          </motion.div>
          <motion.div
            style={{ x: TransformX(300), opacity: scrollYProgress }}
            className="z-10 rounded-[3px] bg-gradient-to-l from-primary/20 to-primary/10 p-5 md:ml-auto md:w-[95%]"
          >
            <div className="my-10 ml-auto flex flex-col justify-between px-5 md:w-[55%]">
              {isLoaded ? (
                <div className="text-size mb-12 flex flex-col justify-between gap-4 font-text xs:flex-row md:flex-col lg:flex-row ">
                  {gamesList &&
                    gamesList.map((game, index) => (
                      <div key={index}>
                        <button
                          className={`${
                            currentGame.id === game.id
                              ? 'text-light'
                              : 'text-light/30'
                          } text-left`}
                          onClick={() => handleGameClick(index)}
                        >
                          {game.name === 'God of War (2018)'
                            ? 'God of War'
                            : '' || game.name === 'League of Legends'
                            ? 'League of Legends'
                            : '' ||
                              game.name ===
                                'The Legend of Zelda: Tears of the Kingdom'
                            ? 'The Legend of Zelda : TOTK'
                            : ''}
                          <div className="mt-1">
                            <div
                              className={`h-[3px] w-full skew-x-[-35deg] ${
                                currentGame.id === game.id
                                  ? 'bg-primary'
                                  : 'none'
                              }`}
                            ></div>
                          </div>
                        </button>
                      </div>
                    ))}
                </div>
              ) : (
                <p>Loading...</p>
              )}

              <div className="font-text text-light">
                <h2 className="title-clamp mb-1 h-16 font-title text-2xl font-black uppercase tracking-wide">
                  {isLoaded ? (
                    currentGame && currentGame.name
                  ) : (
                    <p>Loading...</p>
                  )}
                </h2>
                <div className="flex items-center gap-2">
                  {isLoaded ? (
                    currentGame.platforms.map((platform, index) => (
                      <div key={index}>
                        {platform.platform.name === 'macOS' ? (
                          <div className="w-[1.5rem]">
                            <LogoIos />
                          </div>
                        ) : platform.platform.name === 'PC' ? (
                          <div className="w-[1.4rem]">
                            <LogoPc />
                          </div>
                        ) : platform.platform.name === 'PlayStation 4' ? (
                          <div className="w-[1.5rem]">
                            <LogoPlaystation />
                          </div>
                        ) : platform.platform.name === 'Nintendo Switch' ? (
                          <div className="w-[1.8rem]">
                            <LogoNintendo />
                          </div>
                        ) : (
                          ''
                        )}
                      </div>
                    ))
                  ) : (
                    <p>Loading...</p>
                  )}
                </div>
                <div className="mt-5 h-36 overflow-hidden overflow-y-auto pr-2">
                  <p className="text-light/60">
                    {currentGame && currentGame.description_raw}
                  </p>
                </div>
              </div>

              <div className="mt-10 flex justify-center md:ml-5 md:mr-5 md:justify-end">
                <Button str="Show more" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
