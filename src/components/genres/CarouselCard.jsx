import { useState, useEffect } from 'react';
import { fetchGameDetails } from '../../api/api-fetch.js';

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
  }, [game.id]);
  return (
    <>
      <div className="mt-40 flex h-full w-full shrink-0 flex-col overflow-hidden rounded-[3px] border border-primary bg-gradient-to-l from-primary/10 to-primary/5 backdrop-blur-md lg:flex-row">
        <div className="h-full min-h-[25vw] w-full min-w-[17vw]">
          {isLoaded ? (
            <img
              className="h-full w-full rounded object-cover md:w-full lg:h-full xl:h-[30vw]"
              src={game.background_image}
              alt={game.name}
            />
          ) : (
            <p>loading...</p>
          )}
        </div>
        <div className="flex-col px-4 xl:w-full ">
          <div className=" ">
            <div className="flex flex-col">
              <div className="flex flex-nowrap justify-between gap-4">
                <div className="">
                  {isLoaded ? (
                    <h5 className="clamp-title-card mt-3 font-title uppercase tracking-wide text-light">
                      {game.name}
                    </h5>
                  ) : (
                    <p>loading...</p>
                  )}
                  <div className="flex">
                    <p className="text-light">Platforms: </p>
                    {/* {game.platforms.map((platform, index) => (
                      <p key={index} className=" text-light">{platform.platform.name}</p>
                    ))} */}
                  </div>
                </div>
                <div className="mt-4 flex shrink-0 flex-col items-center justify-center rounded-[10px] border border-primary font-bold text-primary xl:h-[5vw] xl:w-[5vw]">
                  <p className="score-size font-text">score</p>
                  {isLoaded ? (
                    <p className="metascore-size font-black">
                      {game.metacritic}
                    </p>
                  ) : (
                    <p>loading...</p>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-6 border-b border-primary/50"></div>
          </div>{' '}
          <div className="flex flex-col gap-4">
            <div>
              <div className="ml-2 mt-5 flex flex-wrap gap-2 ">
                {isLoaded ? (
                  game.genres.map((genre) => (
                    <div
                      key={genre.id}
                      className="text-white skew-x-[-35deg] rounded-[2px] bg-primary/50 px-4 py-1 text-xs"
                    >
                      {' '}
                      <div className="skew-x-[35deg]">{genre.name}</div>{' '}
                    </div>
                  ))
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>
          </div>
          {isLoaded ? (
            <p className="mt-5 font-text text-base text-light/80">
              Release : {game.released}
            </p>
          ) : (
            <p>Loading...</p>
          )}
          <div className="h-[9rem] overflow-auto">
            {isLoaded ? (
              <p className="mt-5 line-clamp-4 text-light/80">
                {description.description_raw}
              </p>
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <div className="mr-3 mt-5 flex justify-end">
            <button className="mb-4 h-10 w-44 -skew-x-[30deg] rounded bg-primary">
              Showmore
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
