import { motion } from 'framer-motion';
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
export default function Title({ title, prefix = null, subTitle = null }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mb-20"
    >
      <div className="flex gap-4">
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
          className="text-font pt-0.5 font-pixel text-[40px]/10 text-secondary"
          viewport={{ once: true }}
          initial={{ opacity: 0, scale: -100 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.8,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: 'spring',
              damping: 6,
              stiffness: 15,
              restDelta: 0.001,
            },
          }}
        >
          {subTitle}
        </motion.div>
      </div>
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
