import React from 'react';
import Top10List from './Top10List';
import Cube3D from './Cube3D';
import { useState, useEffect } from 'react';
import { fetchGames, fetchGameElements } from '../../api/api-fetch';
import { gamesURL, screenshotsURL } from '../../api/api-url';

export default function RetroContainer({ genres }) {
  const [games, setGames] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [screenshots, setScreenshots] = useState(null);
  const gamesId = [];

  // const handleHover = (game) => {
  //   setImageSrc(`images/${game.name}.webp`);
  //   setVideoSrc(`images/${game.name}.mp4`);
  // }

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetchGames({
      parameter: gamesURL,
      setter: setGames,
      setLoaded: setIsLoaded,
      signal,
      queryString:
        'page_size=10&ordering=rating-released.desc&dates=1990-01-01,1991-01-01.1990-01-01,1991-01-31',
    });

    // for (let i = 0; i < games.results.length;)

    fetchGameElements({
      parameter: screenshotsURL,
      gameId: gamesId[0],
      setter: setScreenshots,
      setLoaded: setIsLoaded,
      signal,
    });

    return () => controller.abort();
  }, []);

  // if (games.results.length > 0) {
  //   games.results.map(game => (gamesId.push(game.id)))
  // }

  console.log(gamesId);

  return (
    <>
      <div className="relative flex h-auto w-full items-center bg-dark">
        <div className="perspective ml-10 mt-10 flex w-11/12 flex-col justify-between pl-10 pt-10 text-justify text-light">
          <h1 className="perspective pb-3 font-pixel text-3xl font-bold uppercase text-yellow-200">
            High scores
          </h1>
          <Top10List games={games} isLoaded={isLoaded} genres={genres} />
          <div className="perspective1 self-end pb-16 font-pixel">
            <a className=" rotate-360 p-2 hover:bg-light hover:text-dark">{`Enter >`}</a>
          </div>
        </div>
        <div className="h-full w-2/3">
          <Cube3D screenshots={screenshots} />
        </div>
      </div>
    </>
  );
}
