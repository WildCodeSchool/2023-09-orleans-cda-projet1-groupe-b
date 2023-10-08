import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../App.css';

// Importation des composants
import CarrouselGameShow from '../../components/gameshow/CarouselGameShow';

// Importation des méthodes fetch
import { fetchGameElements } from '../../api/api-fetch';

// Importation des paramètres URL
import { screenshotsURL } from '../../api/api-url';

export default function GameShow() {
  const { gameId } = useParams();
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchGameElements(screenshotsURL, gameId, setImages, 'results');
  }, []);

  return (
    <>
      <div className="px-10">
        <h1 className="space-x-40 text-light text-4xl font-text">
          GameShow : {gameId}
        </h1>
        <CarrouselGameShow images={images} />
      </div>
    </>
  );
}
