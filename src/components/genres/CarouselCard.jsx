import { useState, useEffect } from 'react';
import { fetchGameDetails } from '../../api/api-fetch.js';
import PlatformsList from '../home/PlatformsList';
import Button from '../Button';

export default function CarouselCard({ game }) {
  const [description, setDescription] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchGameDetails({
      gameId: game.id,
      setter: setDescription,
      setLoaded: setIsLoaded,
      signal,
    });
    return () => {
      controller.abort();
    };
  }, [game.id]);
  return (
    <>
      <div className="mt-10 flex h-full w-full shrink-0 flex-col overflow-hidden rounded-[3px] border border-primary bg-gradient-to-l from-primary/10 to-primary/5 backdrop-blur-md lg:flex-row">
        <div className="h-full min-h-[25vw] w-full min-w-[17vw]">
          {isLoaded ? (
            <img
              className="h-full w-full rounded object-cover md:w-full lg:h-full xl:h-[25vw]"
              src={game.background_image}
              alt={game.name}
            />
          ) : (
            <p>loading...</p>
          )}
        </div>
        <div className="flex flex-col justify-between xl:w-full ">
          <div className="h-15 flex flex-row justify-between">
            <div>
              {isLoaded ? (
                <h5 className="clamp-title-card ml-5 mt-5 font-title text-2xl font-bold uppercase tracking-tight text-light">
                  {game.name}
                </h5>
              ) : (
                <p>loading...</p>
              )}
              <div className="ms-5 mt-5">
                <PlatformsList game={game} isLoaded={isLoaded} />
              </div>
            </div>
            <div className="my-5 me-5 flex shrink-0 flex-col items-center justify-center rounded-[10px] border border-primary font-bold text-primary xl:h-[5vw] xl:w-[5vw]">
              <p className="score-size px-3 font-text">score</p>
              {isLoaded ? (
                <p className="metascore-size font-black">{game.metacritic}</p>
              ) : (
                <p>loading...</p>
              )}
            </div>
          </div>
          <div className="border-b border-primary/50"></div>
          <div className="m-5">
            <div className="flex flex-col gap-4">
              <div>
                <div className="ml-3 mt-3 flex flex-wrap gap-2 ">
                  {isLoaded ? (
                    game.genres.map((genre) => (
                      <div
                        key={genre.id}
                        className="skew-x-[-35deg] rounded-[2px] bg-primary/50 px-4 py-1 text-xs text-white"
                      >
                        <div className="skew-x-[35deg]">{genre.name}</div>
                      </div>
                    ))
                  ) : (
                    <p>Loading...</p>
                  )}
                </div>
              </div>
            </div>
            {isLoaded ? (
              <p className="ml-3 mt-5 font-text text-base text-light/80">
                Release : {game.released}
              </p>
            ) : (
              <p>Loading...</p>
            )}
            <div className="ml-3 h-[9rem] overflow-auto">
              {isLoaded ? (
                <p className="mt-5 line-clamp-4 text-light/80">
                  {description.description_raw}
                </p>
              ) : (
                <p>Loading...</p>
              )}
            </div>
            <div className="my-5 mr-10 flex justify-end">
              <Button str="Showmore" path={`/games/${game.slug}`} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
