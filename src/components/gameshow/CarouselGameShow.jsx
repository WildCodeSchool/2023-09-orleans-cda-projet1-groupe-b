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
      <div className="relative w-full overflow-hidden rounded-[3px] bg-dark">
        <div
          className="flex h-[57vw] transition-transform duration-500 ease-out md:h-[34vw] lg:h-[23vw] xl:h-[27.5vw]"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {/* Boucle qui affiche les images du jeu vidéo */}
          {images.map((image, index) => (
            <div key={index} className="flex h-full w-full flex-shrink-0">
              <img
                src={image.image}
                alt={`Screenshot : ${image.id}`}
                className={`m-auto h-full w-full ${
                  image.width < 500 ? 'object-contain' : ''
                }`}
              />
            </div>
          ))}
        </div>

        <div
          className={`absolute inset-0 flex items-center p-2 ${
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
