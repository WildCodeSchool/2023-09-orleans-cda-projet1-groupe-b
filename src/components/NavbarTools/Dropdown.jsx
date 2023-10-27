import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import useMenuAnimation from '../../hooks/useMenuAnimation';

export default function Dropdown({ children, title }) {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
        console.log(e.target);
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
    >
      <motion.button
        className="flex items-center justify-center gap-3"
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        ref={dropdownRef}
      >
        {title}
        <div
          className="arrow fill-current text-white"
          style={{ transformOrigin: '50% 60%' }}
        >
          <svg width="10" height="10" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" style={{ fill: 'white' }} />
          </svg>
        </div>
      </motion.button>
      <ul className="absolute ms-[7rem] mt-1 w-max rounded border border-solid border-primary bg-gradient-to-l from-primary/30 to-primary/20 p-4 py-2 text-start opacity-0 backdrop-blur-lg">
        {children}
      </ul>
    </div>
  );
}
