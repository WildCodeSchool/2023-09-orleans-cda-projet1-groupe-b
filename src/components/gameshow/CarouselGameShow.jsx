import { useState } from 'react';

// Importation des composants
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';
import Thumbnails from './Thumbnails';

export default function CarouselGameShow({ images }) {
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
          className="flex transition-transform ease-out duration-500 h-[57vw] md:h-[34vw] lg:h-[23vw] xl:h-[27.5vw]"
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
          {curr !== 0 ? (
            <PreviousButton handleClickPrev={handleClickPrev} />
          ) : (
            ''
          )}

          {curr !== images.length - 1 ? (
            <NextButton handleClickNext={handleClickNext} />
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="mt-2">
        <Thumbnails
          images={images}
          curr={curr}
          handleThumbnailClick={handleThumbnailClick}
        />
      </div>
    </>
  );
}
