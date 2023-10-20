import { useState } from 'react';

export const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 500) + '...' : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? (
          <>
            <br />
            <button className="mt-2 rounded-md text-primary transition hover:text-secondary">
              Read more
            </button>
          </>
        ) : (
          <>
            <br />
            <button className="mt-2 rounded-md text-primary transition hover:text-secondary">
              Show less
            </button>
          </>
        )}
      </span>
    </p>
  );
};
