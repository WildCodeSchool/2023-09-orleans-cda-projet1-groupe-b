import { useState, useEffect } from 'react';
import CarouselCard from './CarouselCard';

export default function Carousel({ games }) {
  games = games.slice(0, 10);

  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(games.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === games.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1 className="my-10 text-center font-title text-4xl text-dark">JEUX</h1>
      <div className="mx-auto w-[75%]">
        <div className="relative">
          <div className="absolute left-40 top-1/2 z-10 -translate-x-20 -translate-y-1/2 transform">
            <button
              onClick={previousSlide}
              className="w-18 bg-black h-40 rounded"
            >
              <svg
                className="text-gray-800 dark:text-white m-5 h-10 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 8 14"
              >
                <path
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
                />
              </svg>
            </button>
          </div>
          <div className=" mx-auto w-[75%] overflow-hidden">
            <div
              className={`flex transition-transform duration-[600ms] ease-in-out`}
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}
            >
              {games.map((game, index) => (
                <CarouselCard game={game} key={index} />
              ))}
            </div>
          </div>
          <div className="absolute right-40 top-1/2 z-10 -translate-y-1/2 translate-x-20 transform">
            <button onClick={nextSlide} className="w-18 bg-black h-36 rounded">
              <svg
                className="text-gray-800 dark:text-white m-5 h-10 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 8 14"
              >
                <path
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="mx-auto flex w-[85%] justify-center gap-3 py-4">
          {games.map((game, i) => {
            return (
              <div
                onClick={() => {
                  setCurrent(i);
                }}
                key={'circle' + i}
                className={`h-1 w-44 -skew-x-[50deg] cursor-pointer rounded ${
                  i === current ? 'bg-primary' : 'bg-secondary'
                }`}
              ></div>
            );
          })}
        </div>
      </div>
    </>
  );
}
