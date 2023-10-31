import { useState } from 'react';

export default function ReadMore({ descText }) {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? descText.slice(0, 500) + '...' : descText}
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
}
