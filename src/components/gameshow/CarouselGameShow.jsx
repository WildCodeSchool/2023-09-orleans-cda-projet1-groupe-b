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
      <div className="bg-dark overflow-hidden relative w-full rounded-[3px]">
        <div
          className="flex transition-transform ease-out duration-500 h-[60vw] md:h-[35vw] lg:h-[25vw] xl:h-[30vw]"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {/* Boucle qui affiche les images du jeu vidéo */}
          {images.map((image, index) => (
            <div key={index} className="w-full h-full flex flex-shrink-0">
              <img
                src={image.image}
                alt={`Screenshot : ${image.id}`}
                className={`h-full w-full m-auto ${
                  image.width < 500 ? 'object-contain' : ''
                }`}
              />
            </div>
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
