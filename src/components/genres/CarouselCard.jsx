import { useState, useEffect } from 'react';
import { fetchGameDetails } from '../../api/api-fetch.js';
import { gamesURL } from '../../api/api-url.js';

export default function CarouselCard({ game }) {
  const [description, setDescription] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchGameDetails({
      parameter: gamesURL,
      gameId: game.id,
      setter: setDescription,
      property: 'description_raw',
      signal,
    });
  }, [game.id]);
  return (
    <>
      <div className="flex h-full w-full flex-row rounded border border-primary">
        <div className="h-[35rem] w-96">
          <img
            className="h-full w-full rounded object-cover"
            src={game.background_image}
            alt={game.name}
          />
        </div>
        <div className="m-4 flex w-[45rem] flex-col ">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h5 className="mb-2 mt-3 text-2xl font-bold tracking-tight text-light">
                {game.name}
              </h5>
              <div className="flex flex-row">
                {game.platforms.map((platform, index) => (
                  <p key={index} className=" text-white">
                    {platform.platform.name}
                  </p>
                ))}
              </div>
            </div>
            <div className="mt-3 flex h-20 w-20 flex-col rounded border border-primary font-bold text-primary">
              <p className="text-center">score</p>
              <p className="mt-1 text-center text-4xl">{game.metacritic}</p>
            </div>
          </div>
          <div className="border-b-slate-600 mt-5 border "></div>
          <div className="flex flex-col">
            <p className="text-gray-500 dark:text-gray-400 mt-3 text-3xl">
              Date de sortie : {game.released}
            </p>
            <p className="mt-3 text-xl">
              {game.genres.map((genre) => (
                <button
                  key={genre.id}
                  className="bg-gray-500 text-white m-3  rounded px-4 py-2"
                >
                  {genre.name}
                </button>
              ))}
            </p>
            <p className="line-clamp-5">{description}</p>
            <div className="mt-5 flex justify-end">
              <button className="h-10 w-44 -skew-x-[30deg] rounded bg-primary">
                Showmore
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
