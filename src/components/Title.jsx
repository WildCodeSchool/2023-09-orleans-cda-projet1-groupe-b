import { useInView } from 'framer-motion';
import { useRef } from 'react';
export default function Title({ title }) {
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
        className="text-center font-title text-5xl uppercase tracking-wide text-light md:text-left"
      >
        {title}
      </h1>
      <div
        style={{
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'ease-in-out .7s .6s',
        }}
        className="flex justify-center md:justify-start"
      >
        <div className="ml-1 mt-6 h-5 w-28 -skew-x-35 bg-primary"></div>
      </div>
    </div>
  );
}
