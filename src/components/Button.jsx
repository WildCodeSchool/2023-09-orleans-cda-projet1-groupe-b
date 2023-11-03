import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const btnVariants = {
  visible: {
    opacity: 0.8,
  },
  hover: {
    opacity: 1,
    scale: 1.05,
    transition: {
      type: 'spring',
      stiffness: 300,
    },
  },
};

export default function Button({ str, path, handleClick = null }) {
  return (
    <motion.div
      variants={btnVariants}
      initial="visible"
      whileHover="hover"
      onClick={handleClick}
    >
      <Link
        to={path}
        className="flex -skew-x-35 items-center justify-center bg-primary/80 py-1 pl-4 pr-2 outline outline-2 outline-offset-[2px] outline-primary hover:bg-primary"
      >
        <span className="skew-x-35 font-title text-base font-medium uppercase tracking-wider">
          {str}
        </span>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-right mb-1 inline-block skew-x-35"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </Link>
    </motion.div>
  );
}
