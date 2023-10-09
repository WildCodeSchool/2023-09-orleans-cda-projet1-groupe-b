import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../App.css';

// Importation des composants
import CarrouselGameShow from '../../components/gameshow/CarouselGameShow';

// Importation des méthodes fetch
import { fetchGameDetails, fetchGameElements } from '../../api/api-fetch';

// Importation des paramètres URL
import { screenshotsURL } from '../../api/api-url';

export default function GameShow() {
  const { gameId } = useParams();
  const [images, setImages] = useState([]);
  const [gameName, setGameName] = useState('');

  useEffect(() => {
    fetchGameDetails(gameId, setGameName, 'name');
    fetchGameElements(screenshotsURL, gameId, setImages, 'results');
  }, []);

  return (
    <>
      <div className="">
        <h1 className="space-x-40 text-light text-4xl font-text">{gameName}</h1>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1">
            <CarrouselGameShow images={images} />
          </div>
          <div className="w-full md:w-52 xl:w-64">
            {/* TODO importer le composant gameInformation */}
          </div>
        </div>
      </div>
    </>
  );
}
