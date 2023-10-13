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
  }, []);
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
              <h5 className="mb-2 mt-3 text-2xl font-bold tracking-tight text-white">
                {game.name}
              </h5>
              {game.platforms.map((platform) => (
                <p className=" text-white">{platform.platform.name}</p>
              ))}
            </div>
            <div className="mt-3 flex h-20 w-20 flex-col rounded border border-primary font-bold text-primary">
              <p className="text-center">score</p>
              <p className="mt-1 text-center text-4xl">{game.metacritic}</p>
            </div>
          </div>
          <div className="border-b-slate-600 mt-5 border "></div>
          <div className="flex flex-col">
            <p className="mt-3 text-3xl text-gray-500 dark:text-gray-400">
              Date de sortie : {game.released}
            </p>
            <p className="mt-3 text-xl">
              {game.genres.map((genre) => (
                <button
                  key={genre.id}
                  className="m-3 rounded bg-gray-500  px-4 py-2 text-white"
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
