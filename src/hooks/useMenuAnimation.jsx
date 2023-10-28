import { useEffect } from 'react';
import { stagger, useAnimate } from 'framer-motion';

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

export default function useMenuAnimation(isOpen) {
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
          opacity: isOpen ? 0.9 : 0,
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
  }, [isOpen, animate, scope]);

  return scope;
}
