import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Title from '../Title';
import RightBar from './RightBar';

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
      <section
        className={`z-50 w-full px-2 xs:px-5 md:px-16 lg:px-2 ${
          location.pathname !== '/'
            ? 'lg:w-[50%] xl:w-[64%]'
            : 'lg:w-[75%] xl:w-[82%]'
        }`}
      >
        <h1 className="space-x-40 font-title text-4xl text-light">
          {isLoaded ? game.name : 'Loading...'}
        </h1>
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
