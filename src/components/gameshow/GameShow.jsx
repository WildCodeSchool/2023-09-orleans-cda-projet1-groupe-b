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
      <section className="w-full px-2 xs:px-5 md:px-16 lg:px-2">
        <h1 className="space-x-40 font-title text-4xl text-light">
          {gameName}
        </h1>
        <div className="flex flex-col gap-3 md:flex-row">
          <div className="flex-1">
            <CarouselGameShow images={images} />
          </div>
          <div className="w-full md:w-52 xl:w-64">
            {/* TODO importer le composant gameInformation */}
          </div>
        </div>
      </section>
    </>
  );
}