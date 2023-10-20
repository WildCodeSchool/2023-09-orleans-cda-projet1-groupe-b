import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

// Importation des composants
import Title from '../Title';
import Button from '../Button';
import LogoPc from '../logos/LogoPc';
import LogoPlaystation from '../logos/LogoPlaystation';
import LogoNintendo from '../logos/LogoNintendo';
import LogoIos from '../logos/LogoIos';

// Importation de la clé API
const API_KEY = import.meta.env.VITE_API_KEY;

// Variantes animations Framer Motion
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
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 0.3,
      delay: 0.3,
    },
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 0.3,
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

  // Fetch sur l'api 3 fois pour récupérer les informations de League of Legends, God of War 2 et The Legend of Zelda et les stocker dans un state
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

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
    offset: ['start center', 'end end'],
  });

  // Fonction pour ajouter des valeurs personnalisées pour l'animation au scroll avec le useScroll et useTranform
  const TransformX = (val) =>
    useTransform(scrollYProgress, [0, 1], [val, 0], {
      transition: {
        type: 'spring',
      },
    });

  return (
    <>
      {/* Conteneur référent pour l'animation au scroll */}
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
          {/* Conteneur image qui utilise la fonction TransformX pour déclencher une animation au scroll venant de la gauche */}
          <motion.div
            style={{ x: TransformX(-300), opacity: scrollYProgress }}
            className="top-[-50px] z-20 mb-1 h-[70vw] sm:h-[60vw] md:absolute md:h-full md:w-[45%]"
          >
            <div className="relative min-h-full min-w-full overflow-hidden rounded-[3px] shadow-xl md:rounded-br-[50px] md:rounded-tl-[50px]">
              {/* Utilisation d'AnimatePresence pour déclencher des animations lorsqu'un composant est monté et démonté */}
              <AnimatePresence>
                {/* Ajout d'une clé unique permettant de préciser à AnimatePresence que l'image peut être animée lors du montage et du démontage */}
                {isLoaded && currentGame ? (
                  <motion.img
                    key={currentGame.background_image}
                    variants={childrenVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    src={currentGame.background_image}
                    alt={`Picture of ${currentGame.name}`}
                    className="absolute h-full w-full object-cover"
                  />
                ) : (
                  <p>Loading...</p>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Conteneur image qui utilise la fonction TransformX pour déclencher une animation au scroll venant de la droite */}
          <motion.div
            style={{ x: TransformX(300), opacity: scrollYProgress }}
            className="z-10 rounded-[3px] bg-gradient-to-l from-primary/20 to-primary/10 p-5 md:ml-auto md:w-[95%]"
          >
            <div className="my-10 ml-auto flex flex-col justify-between px-5 md:w-[55%]">
              {isLoaded ? (
                <div className="text-size mb-12 flex flex-col justify-between gap-4 font-text xs:flex-row md:flex-col lg:flex-row ">
                  {/* Barre de navigation affichant les 3 jeux incontournables et modification des titres */}
                  {gamesList &&
                    gamesList.map((game, index) => (
                      <div key={index}>
                        <button
                          className={`${
                            currentGame.id === game.id
                              ? 'text-light'
                              : 'text-light/30'
                          } text-left hover:text-light`}
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
                              className={`h-[3px] skew-x-[-35deg] ${
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

              {/* Utilisation d'AnimatePresence pour déclencher des animations lorsqu'un composant est monté et démonté */}
              <AnimatePresence>
                <div className="font-text text-light">
                  {/* Ajout d'une clé unique permettant de préciser à AnimatePresence que le titre peut être animé lors du montage et du démontage */}
                  <motion.h2
                    key={currentGame && currentGame.name}
                    variants={childrenVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="title-clamp mb-1 h-16 font-title text-2xl font-black uppercase tracking-wide"
                  >
                    {/* Affichage du nom complet du jeu actuellement affiché */}
                    {isLoaded ? (
                      currentGame && currentGame.name
                    ) : (
                      <p>Loading...</p>
                    )}
                  </motion.h2>
                  {/* Ajout d'une clé unique permettant de préciser à AnimatePresence que les plateformes peuvent être animées lors du montage et du démontage */}
                  <motion.div
                    key={
                      currentGame &&
                      currentGame.platforms.map((p) => p.platform.id)
                    }
                    variants={childrenVariants}
                    className="flex items-center gap-2"
                  >
                    {/* Affichage des platformes sous formes de logos */}
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
                  </motion.div>
                  {/* Ajout d'une clé unique permettant de préciser à AnimatePresence que la description peuvent être animée lors du montage et du démontage */}
                  <motion.div
                    variants={childrenVariants}
                    key={currentGame && currentGame.description_raw}
                    className="mt-5 h-36 overflow-hidden overflow-y-auto pr-2"
                  >
                    <p className="text-light/60">
                      {currentGame && currentGame.description_raw}
                    </p>
                  </motion.div>
                </div>
              </AnimatePresence>

              <div className="mt-10 flex justify-center md:ml-5 md:mr-5 md:justify-end">
                <Button
                  str="Show more"
                  path={`/games/${currentGame && currentGame.slug}`}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
