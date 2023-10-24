import { useState, useRef, useEffect } from 'react';
import { useAnimate, stagger, motion } from 'framer-motion';

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (scope.current) {
      animate('.arrow', { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

      animate(
        'ul',
        {
          clipPath: isOpen
            ? 'inset(0% 0% 0% 0% round 5px)'
            : 'inset(10% 50% 90% 50% round 5px)',
        },
        {
          type: 'spring',
          bounce: 0,
          duration: 0.5,
        },
      );

      animate(
        'li',
        isOpen
          ? { opacity: 1, scale: 1, filter: 'blur(0px)' }
          : { opacity: 0, scale: 0.3, filter: 'blur(20px)' },
        {
          duration: 0.2,
          delay: isOpen ? staggerMenuItems : 0,
        },
      );
    }
  }, [isOpen]);

  return scope;
}

export default function Dropdown({ children, title }) {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative my-1 flex items-start opacity-80 hover:opacity-100"
      ref={scope}
      style={{ height: isOpen ? 'bg-blue' : '' }}
    >
      <motion.button
        className="flex items-center justify-center gap-3"
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <div
          ref={dropdownRef}
          className="arrow fill-current text-white"
          style={{ transformOrigin: '50% 60%' }}
        >
          <svg width="10" height="10" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" style={{ fill: 'white' }} />
          </svg>
        </div>
      </motion.button>
      <ul className="absolute z-[100] ms-[7rem] mt-1 w-max rounded border border-solid border-primary bg-gradient-to-l from-primary/30 to-primary/20 p-4 py-2 text-start opacity-90 hover:opacity-100">
        {children}
      </ul>
    </div>
  );
}
