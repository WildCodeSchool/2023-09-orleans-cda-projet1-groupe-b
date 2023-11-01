import { motion } from 'framer-motion';

export default function ProgressBar({
  percents,
  duration = 2,
  delay = 0.5,
  easing = [0.42, 0, 0.58, 2],
}) {
  const transition = {
    duration: duration,
    delay: delay,
    ease: easing,
  };

  const variants = {
    enter: {
      opacity: 0,
      width: 0,
    },
    animate: {
      opacity: 1,
      width: `${percents}%`,
      transition,
    },
  };

  return (
    <motion.div
      initial="enter"
      animate="animate"
      exit="enter"
      variants={variants}
      className="pl-3"
    >
      <motion.div className="z-50 h-4 w-[350px] -skew-x-35 rounded bg-tertiary/50">
        <motion.div className="h-full rounded bg-primary" variants={variants} />
      </motion.div>
    </motion.div>
  );
}
