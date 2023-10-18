import { motion } from 'framer-motion';

export default function HeaderHome({ imageHeader }) {
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
              alt=""
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
              alt=""
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
              alt=""
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
              alt=""
              className="h-full w-full object-cover"
            />
          </motion.div>
          {/* Affichage de l'image si en dessous de 768px */}
          <div className="block md:hidden">
            <img
              src={imageHeader}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </>
  );
}
