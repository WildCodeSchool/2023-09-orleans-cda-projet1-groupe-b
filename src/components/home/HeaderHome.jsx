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
          className="image-mask grid h-full w-full grid-cols-1  md:grid-cols-4"
        >
          <div className="absolute z-50 h-full w-full bg-gradient-to-r from-dark to-dark/0"></div>
          <motion.div
            className="hidden md:block"
            variants={imageVariants}
            custom={-200}
          >
            {/* Affichage des images si au dessus de 768px */}
            <img
              src="/images/mario.webp"
              alt="Picture of Mario"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div
            className="hidden md:block"
            variants={imageVariants}
            custom={200}
          >
            <img
              src="/images/masterchief.webp"
              alt="Picture of Master Chief"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div
            className="hidden md:block"
            variants={imageVariants}
            custom={-200}
          >
            <img
              src="/images/kratos.webp"
              alt="Picture of Kratos"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div
            className="hidden md:block"
            variants={imageVariants}
            custom={200}
          >
            <img
              src="/images/jinx.webp"
              alt="Picture of Jinx"
              className="h-full w-full object-cover"
            />
          </motion.div>
          {/* Affichage de l'image si en dessous de 768px */}
          {isLoaded ? (
            <div className="block md:hidden">
              <img
                src={imageHeader.image_background}
                alt={`Picture of ${imageHeader?.name}`}
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
