import { useRef, useEffect } from 'react';
import { usePresence } from 'framer-motion';
import { gsap } from 'gsap';

export default function Box({ trophy, index }) {
  const ref = useRef(trophy.id);
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if (!isPresent) {
      gsap.to(ref.current, {
        opacity: 0,
        onComplete: () => safeToRemove?.(),
      });
    }
  }, [isPresent, safeToRemove]);

  return trophy ? (
    <div
      key={index}
      className="absolute z-10 rounded-md bg-tertiary/90 p-1"
      ref={ref}
    >
      <div className="">
        <h1>{trophy.name}</h1>
        <p>{trophy.description}</p>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
}
