import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RightBar from './RightBar';
import HeaderGameShow from './HeaderGameShow';

// Importation des composants
import CarouselGameShow from './CarouselGameShow';
import GameDesc from './Description';

// Importation des méthodes fetch
import { fetchGameDetails, fetchGameElements } from '../../api/api-fetch';

// Importation des paramètres URL
import { screenshotsURL } from '../../api/api-url';

export default function GameShow() {
  const { gameId } = useParams();
  const [screenshots, setScreenshots] = useState([]);
  const [game, setGame] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const screenshotsResults = screenshots.results;

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchGameDetails({
      gameId,
      setter: setGame,
      setLoaded: setIsLoaded,
      signal,
    });

    fetchGameElements({
      parameter: screenshotsURL,
      gameId,
      setter: setScreenshots,
      setLoaded: setIsLoaded,
      signal,
    });

    return () => controller.abort();
  }, [gameId]);

  return (
    <>
      <HeaderGameShow isLoaded={isLoaded} imageHeader={game} />
      <section className=" z-50 w-full px-2 xs:px-5 md:px-16 lg:px-2">
        {isLoaded ? (
          <div className="mb-80 mt-40">
            <h1 className="font-title text-8xl uppercase text-light">
              {game.name && game.name}
            </h1>
            <div className="flex justify-center md:justify-start">
              <div className="ml-1 mt-6 h-5 w-28 -skew-x-35 bg-primary"></div>
            </div>
          </div>
        ) : (
          'Loading...'
        )}

        <div className="flex flex-col gap-3 md:flex-row">
          <div className="flex-1">
            {isLoaded && (
              <div>
                <CarouselGameShow
                  screenshotsResults={screenshotsResults}
                  isLoaded={isLoaded}
                />
                <GameDesc gameId={gameId} />
              </div>
            )}
          </div>
          <div className="w-full md:w-52 xl:w-64">
            <RightBar gameId={gameId} />
          </div>
        </div>
      </section>
    </>
  );
}
