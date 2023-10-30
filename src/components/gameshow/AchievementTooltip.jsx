import { useRef } from 'react';
import { usePresence, motion } from 'framer-motion';

export default function Box({ trophy, index }) {
  const ref = useRef();
  const [isPresent, safeToRemove] = usePresence();

  return trophy ? (
    <motion.div
      key={index}
      className="absolute z-10 rounded-md bg-tertiary/90 p-1"
      ref={ref}
      initial={{ opacity: 0 }} // Set the initial state
      animate={{ opacity: 1 }} // Animate when the component first appears
      exit={isPresent ? { opacity: 1 } : safeToRemove} // Animate when the component is removed
    >
      <motion.div className="">
        <h1>{trophy.name}</h1>
        <p>{trophy.description}</p>
      </motion.div>
    </motion.div>
  ) : (
    <p>Loading...</p>
  );
}
