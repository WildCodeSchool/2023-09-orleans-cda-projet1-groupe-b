import { motion } from 'framer-motion';

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

const imageVariants = {
  hidden: (i) => ({ opacity: 0, y: i }),
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 0.5,
    },
  },
};

export default function HeaderHome({ imageHeader, isLoaded }) {
  if (!isLoaded) {
    return null;
  }

  return (
    <>
      <div className="absolute h-screen w-screen overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          custom="0"
          className="image-mask h-full w-full"
        >
          <div className="absolute z-50 h-full w-full bg-gradient-to-r from-dark to-dark/0"></div>
          {/* Affichage de l'image si en dessous de 768px */}
          {isLoaded ? (
            <div className="h-full w-full">
              <img
                src={imageHeader.background_image}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          ) : (
            'Loading...'
          )}
        </motion.div>
      </div>
    </>
  );
}
