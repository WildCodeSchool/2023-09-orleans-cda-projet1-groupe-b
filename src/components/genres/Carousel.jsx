import { useEffect, useCallback } from 'react';
import CarouselCard from './CarouselCard';
import NextButton from '../gameshow/NextButton';
import PreviousButton from '../gameshow/PreviousButton';

export default function Carousel({ games, isLoaded, gameIndex, setGameIndex }) {
  const previousSlide = useCallback(
    (setGameIndex) => {
      if (gameIndex === 0) setGameIndex(games.length - 1);
      else setGameIndex(gameIndex - 1);
    },
    [gameIndex, games.length],
  );

  const nextSlide = useCallback(
    (setGameIndex) => {
      if (gameIndex === games.length - 1) setGameIndex(0);
      else setGameIndex(gameIndex + 1);
    },
    [gameIndex, games.length],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [gameIndex, nextSlide]);

  if (!isLoaded) {
    return null;
  }
  games = games.results.slice(0, 10);

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

        <div className=" mx-auto h-full w-full overflow-hidden xl:w-[52vw]">
          <div
            className="h-full w-full transition-transform duration-500 ease-out lg:h-[45vw] xl:h-full xl:max-w-[52vw] "
            style={{ transform: `translateX(-${gameIndex * 100}%)` }}
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
                  setGameIndex(i);
                }}
                key={'circle' + i}
                className={`h-1 w-full -skew-x-[50deg] cursor-pointer rounded ${
                  i === gameIndex ? 'bg-primary' : 'bg-secondary'
                }`}
              ></div>
            );
          })}
        </div>
      </div>
    </>
  );
}
