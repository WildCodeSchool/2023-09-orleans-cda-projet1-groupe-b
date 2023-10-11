import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Importation des composants
import CarouselGameShow from './CarouselGameShow';

// Importation des méthodes fetch
import { fetchGameDetails, fetchGameElements } from '../../api/api-fetch';

// Importation des paramètres URL
import { screenshotsURL } from '../../api/api-url';

export default function GameShow() {
  const { gameId } = useParams();
  const [images, setImages] = useState([]);
  const [gameName, setGameName] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchGameDetails({
      gameId,
      setter: setGameName,
      property: 'name',
      signal,
    });

    fetchGameElements({
      parameter: screenshotsURL,
      gameId,
      setter: setImages,
      property: 'results',
      signal,
    });

    return () => controller.abort();
  }, [gameId]);

  return (
    <>
      <div className="">
        <h1 className="space-x-40 text-light text-4xl font-title">
          {gameName}
        </h1>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1">
            <CarouselGameShow images={images} />
          </div>
          <div className="w-full md:w-52 xl:w-64">
            {/* TODO importer le composant gameInformation */}
          </div>
        </div>
      </div>
    </>
  );
}
