import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Title({ title, subTitle = null }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-20">
      <h1
        style={{
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'ease-in-out .7s .5s',
        }}
        className="flex gap-4 text-center font-title text-5xl uppercase tracking-wide text-light xxs:flex-col md:text-left lg:flex-row"
      >
        {title}
        <motion.div
          className="text-font pt-0.5 font-pixel text-[40px]/10 text-secondary"
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, scale: -15 }}
          transition={{
            duration: 1.8,
            delay: 0.5,
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
      </h1>
      <div className="flex justify-center md:justify-start">
        <div className="ml-1 mt-6 h-5 w-28 -skew-x-35 bg-primary"></div>
      </div>
    </div>
  );
}
