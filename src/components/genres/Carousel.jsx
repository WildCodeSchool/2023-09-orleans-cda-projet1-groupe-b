import { useEffect, useCallback } from 'react';
import CarouselCard from './CarouselCard';
import NextButton from '../gameshow/NextButton';
import PreviousButton from '../gameshow/PreviousButton';

export default function Carousel({ games, gameIndex, setGameIndex }) {
  const gamesCarousel = games?.results
    ?.slice(0, 10)
    .sort((a, b) => b.metacritic - a.metacritic);

  const previousSlide = useCallback(() => {
    if (gameIndex === 0) setGameIndex(gamesCarousel?.length - 1);
    else setGameIndex(gameIndex - 1);
  }, [gameIndex, gamesCarousel?.length]);

  const nextSlide = useCallback(() => {
    if (gameIndex === gamesCarousel?.length - 1) setGameIndex(0);
    else setGameIndex(gameIndex + 1);
  }, [gameIndex, gamesCarousel?.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [gameIndex, nextSlide]);

  return (
    <>
      <div className="relative">
        <div className="absolute left-20 top-1/2 z-10 -translate-y-1/2 translate-x-[-135px] transform">
          <PreviousButton handleClickPrev={previousSlide} />
        </div>
        <div className="absolute right-20 top-1/2 z-10 -translate-y-1/2 translate-x-[135px] transform">
          <NextButton handleClickNext={nextSlide} />
        </div>
        <div className="mx-auto h-full w-full overflow-hidden xl:w-[52vw]">
          <div
            className="h-full w-full transition-transform duration-500 ease-out lg:h-[45vw] xl:h-full xl:max-w-[52vw] "
            style={{ transform: `translateX(-${gameIndex * 100}%)` }}
          >
            <div className="flex h-full">
              {gamesCarousel?.map((game, index) => (
                <CarouselCard game={game} key={index} />
              ))}
            </div>
          </div>
        </div>
        <div className="mx-6 mt-2 flex justify-center gap-2 px-1">
          {gamesCarousel?.map((game, i) => {
            return (
              <div
                onClick={() => {
                  setGameIndex(i);
                }}
                key={'circle' + i}
                className={`h-1 w-full -skew-x-[50deg] cursor-pointer rounded ${
                  i === gameIndex ? 'bg-primary' : 'bg-secondary'
                }`}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
