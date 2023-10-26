import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Importation des composants
import PlatformList from '../home/PlatformList';

const cardsVariants = {
  hidden: {
    scale: 1,
  },
  visible: {
    scale: 1.05,
    transition: {
      type: 'tween',
      ease: 'easeOut',
      duration: 0.3,
    },
  },
};

export default function CardGame({ game, isLoaded }) {
  const slug = game.slug;
  return (
    <>
      <motion.div
        variants={cardsVariants}
        initial="hidden"
        whileHover="visible"
        className="h-[25rem] w-full overflow-hidden rounded-[3px] border border-primary/30 bg-gradient-to-l from-primary/20 to-primary/10"
      >
        <Link to={`/games/${slug}`}>
          <div className="h-2/3 w-full bg-primary">
            {game.background_image === null ? (
              <img
                src="/public/images/placeholder.webp"
                className="h-full w-full object-cover"
              />
            ) : (
              <img
                src={game.background_image}
                alt={`Picture of ${game.name}`}
                className="h-full w-full object-cover"
              />
            )}
          </div>
          <div className="flex h-1/3 flex-col justify-between  p-2">
            <div className="flex gap-2">
              <div className="w-[90%]">
                <div className="mb-2">
                  <PlatformList game={game} isLoaded={isLoaded} />
                </div>

                <div className="h-[4.5rem] overflow-y-auto">
                  <h2 className="text-md font-title text-light">{game.name}</h2>
                </div>
              </div>

              <div className="grow">
                <p className="w-8 rounded border border-primary text-center text-sm text-primary">
                  {game.rating.toFixed(1)}
                </p>
              </div>
            </div>
            <ul className="flex gap-2 font-text text-light/80">
              {game.genres.slice(0, 2).map((genre, index) => (
                <li key={index}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </Link>
      </motion.div>
    </>
  );
}
