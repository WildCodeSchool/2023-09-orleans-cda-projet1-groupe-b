import { useState, useEffect } from 'react';
import CarouselCard from './CarouselCard';
export default function Carousel({ slides }) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <>
      <h1 className="space-x-40 text-dark text-4xl font-title text-center my-20">
        JEUX DE ROLE RPG
      </h1>
      <div className="relative">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 -translate-x-20">
          <button
            onClick={previousSlide}
            className="h-40 w-18 bg-black rounded"
          >
            <svg
              className="w-5 h-10 text-gray-800 dark:text-white m-5"
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
        <div className="overflow-hidden relative">
          <div
            className={`flex transition-transform duration-[600ms] ease-in-out`}
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {slides.map((s) => (
              <CarouselCard s={s} />
              //<img src={s}/>
            ))}
          </div>
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 translate-x-20">
          <button onClick={nextSlide} className="h-36 w-18 bg-black rounded">
            <svg
              className="w-5 h-10 text-gray-800 dark:text-white m-5"
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
      <div className="py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={'circle' + i}
              className={`rounded w-44 h-1 cursor-pointer  ${
                i === current ? 'bg-primary' : 'bg-secondary'
              }`}
            ></div>
          );
        })}
      </div>
    </>
  );
}
