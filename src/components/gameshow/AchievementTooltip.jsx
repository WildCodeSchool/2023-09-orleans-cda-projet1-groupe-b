import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Box({ trophy, index }) {
  const ref = useRef();

  return trophy ? (
    <AnimatePresence>
      <motion.div
        key={index}
        className="absolute z-10 rounded-md bg-tertiary/90 p-1"
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div className="">
          <h1>{trophy.name}</h1>
          <p>{trophy.description}</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  ) : (
    <p>Loading...</p>
  );
}
