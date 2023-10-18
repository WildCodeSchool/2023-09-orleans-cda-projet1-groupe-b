import { useState, useEffect, useCallback } from 'react';
import CarouselCard from './CarouselCard';
import NextButton from '../gameshow/NextButton';
import PreviousButton from '../gameshow/PreviousButton';

export default function Carousel({ games }) {
  games = games.slice(0, 10);

  let [current, setCurrent] = useState(0);

  const previousSlide = useCallback(() => {
    if (current === 0) setCurrent(games.length - 1);
    else setCurrent(current - 1);
  }, [current, games.length]);

  const nextSlide = useCallback(() => {
    if (current === games.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  }, [current, games.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [current, nextSlide]);

  return (
    <>
      <h1 className="my-10 text-center font-title text-4xl text-light"></h1>
      <div className="relative">
        <div className="absolute left-20 top-1/2 z-10 -translate-y-1/2 translate-x-[-135px] transform">
          <PreviousButton handleClickPrev={previousSlide} />
        </div>
        <div className="absolute right-20 top-1/2 z-10 -translate-y-1/2 translate-x-[135px] transform">
          <NextButton handleClickNext={nextSlide} />
        </div>
        <div className=" h-full w-full overflow-hidden">
          <div
            className="h-full w-full transition-transform duration-500 ease-out lg:h-[45vw] xl:h-full xl:max-w-[52vw] "
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            <div className="flex h-full">
              {games.map((game, index) => (
                <CarouselCard game={game} key={index} />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-2 flex justify-center gap-2 px-1">
          {games.map((game, i) => {
            return (
              <div
                onClick={() => {
                  setCurrent(i);
                }}
                key={'circle' + i}
                className={`h-1 w-full -skew-x-[50deg] cursor-pointer rounded ${
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
