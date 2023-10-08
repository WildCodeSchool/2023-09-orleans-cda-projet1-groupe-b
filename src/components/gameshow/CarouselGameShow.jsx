import React, { useState } from 'react';

// Importation des composants
import ChevronRight from './ChevronRight';
import ChevronLeft from './ChevronLeft';
import Thumbnail from './Thumbnail';

export default function CarrouselGameShow({ images }) {
  const [curr, setCurr] = useState(0);

  // Fonction qui décrémente l'index
  const handleClickPrev = () =>
    setCurr((curr) => (curr === 0 ? curr : curr - 1));

  // Fonction qui incrémente l'index
  const handleClickNext = () =>
    setCurr((curr) => (curr === images.length - 1 ? curr : curr + 1));

  // Fonction qui gére le clic sur le composant Thumbnail
  const handleThumbnailClick = (index) => {
    setCurr(index);
  };

  return (
    <>
      <div className="overflow-hidden relative">
        <div
          className="flex bg-dark w-full transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {/* Boucle qui affiche les images du jeu vidéo */}
          {images.map((image, index) => (
            <img
              key={index}
              src={image.image}
              alt=""
              className="object-cover"
            />
          ))}
        </div>

        <div
          className={`absolute inset-0 p-2 flex items-center ${
            curr === 0 ? 'justify-end' : 'justify-between'
          }`}
        >
          {curr !== 0 ? <ChevronLeft handleClickPrev={handleClickPrev} /> : ''}

          {curr !== images.length - 1 ? (
            <ChevronRight handleClickNext={handleClickNext} />
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="mt-2">
        <Thumbnail
          images={images}
          curr={curr}
          handleThumbnailClick={handleThumbnailClick}
        />
      </div>
    </>
  );
}
