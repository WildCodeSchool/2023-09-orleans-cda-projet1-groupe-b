import { useRef, useEffect } from 'react';
import { usePresence } from 'framer-motion';
import { gsap } from 'gsap';

export default function Box() {
  const ref = useRef(null);
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if (!isPresent) {
      gsap.to(ref.current, {
        opacity: 0,
        onComplete: () => safeToRemove?.(),
      });
    }
  }, [isPresent, safeToRemove]);

  return <div className="box" ref={ref} />;
}
