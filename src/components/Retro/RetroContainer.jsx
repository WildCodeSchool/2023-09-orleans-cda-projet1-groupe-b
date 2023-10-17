import React from 'react';
import Top10List from './Top10List';
import Cube3D from './Cube3D';
import { useState, useEffect } from 'react';
import { fetchGames } from '../../api/api-fetch';
import { gamesURL } from '../../api/api-url';

export default function RetroContainer({ genres }) {
  const [games, setGames] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetchGames({
      parameter: gamesURL,
      setter: setGames,
      loading: setIsLoaded,
      signal,
      queryString:
        'page_size=10&ordering=rating-released.desc&dates=1990-01-01,1991-01-01.1990-01-01,1991-01-31',
    });

    return () => controller.abort();
  }, []);

  console.log(games);

  return (
    <>
      <div className="relative flex h-auto w-full items-center bg-dark pl-3">
        <div className="perspective mt-12 flex w-10/12 flex-col justify-between pl-8 pt-12 text-justify text-light">
          <h1 className="perspective pb-6 font-pixel text-2xl font-bold uppercase text-yellow-200">
            High scores
          </h1>
          <Top10List games={games} isLoaded={isLoaded} genres={genres} />
          <div className="perspective self-end pb-16 font-pixel">
            <a className=" rotate-360 p-2 hover:bg-light hover:text-dark">{`Enter >`}</a>
          </div>
        </div>
        <div className="h-full w-2/3">
          <Cube3D />
        </div>
      </div>
    </>
  );
}
