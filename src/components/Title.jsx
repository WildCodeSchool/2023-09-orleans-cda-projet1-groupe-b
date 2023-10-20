import { motion } from 'framer-motion';
import { useRef } from 'react';

const containerVariants = {
  hidden: { opacity: 0, x: -200 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      type: 'tween',
      ease: 'easeInOut',
      staggerChildren: 0.5,
      duration: 0.7,
    },
  },
};

const childrenVariants = {
  hidden: { opacity: 0, x: -200 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { type: 'tween', ease: 'easeInOut', duration: 0.7, delay: i },
  }),
};

export default function Title({ title, prefix = null }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mb-20"
    >
      <motion.h1
        variants={childrenVariants}
        className="text-center font-title text-5xl uppercase tracking-wide text-light md:text-left"
        whileInView="visible"
        initial="hidden"
        custom={0}
      >
        {prefix ? (
          <span className="mb-4 mt-10 text-5xl font-bold text-light">
            {prefix}
          </span>
        ) : (
          ''
        )}
        {title}
      </motion.h1>
      <motion.div
        className="flex justify-center md:justify-start"
        variants={childrenVariants}
        whileInView="visible"
        initial="hidden"
        custom={0.2}
      >
        <div className="ml-1 mt-6 h-5 w-28 -skew-x-35 bg-primary"></div>
      </motion.div>
    </motion.div>
  );
}
