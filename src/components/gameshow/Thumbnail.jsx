import React from 'react';
import { ReactSVG } from 'react-svg';

// Importation des composants
import ThumbnailPagination from './ThumbnailPagination';

export default function Thumbnail({ images, curr, handleThumbnailClick }) {
  const numberImages = 5;
  const totalImages = images.length;

  // Calcule l'indice de départ
  let startIndex = Math.floor(curr / numberImages) * numberImages;

  // Condition qui vérifie si le nombre d'images restantes est inférieur ou égal au nombre d'images affichées ; si oui, réajuste la valeur de la variable startIndex afin d'afficher toujours 5 images
  if (totalImages - startIndex <= numberImages) {
    startIndex = Math.max(0, totalImages - numberImages);
  }

  // Extraction des images à partir de l'index jusqu'au nombre d'images afin d'afficher 5 images
  const imageThumbnail = images.slice(startIndex, startIndex + numberImages);

  // Nombre total de paginations
  const totalPaginations = Math.ceil(totalImages / numberImages);

  return (
    <>
      <div className={`flex justify-center gap-1 relative`}>
        {imageThumbnail.map((image, index) => (
          <div
            key={startIndex + index}
            className={`cursor-pointer mb-2 relative ${
              startIndex + index === curr
                ? 'outline outline-2 outline-primary'
                : ''
            }`}
            onClick={() => handleThumbnailClick(startIndex + index)}
          >
            <ReactSVG
              src="/public/images/arrow.svg"
              className={`absolute left-1/2 -translate-x-1/2 -top-3 ${
                startIndex + index === curr ? 'block' : 'hidden'
              }`}
            />
            <img src={image.image} alt={`Thumbnail ${startIndex + index}`} />
          </div>
        ))}
      </div>
      <ThumbnailPagination
        totalPagination={totalPaginations}
        pageId={startIndex}
      />
    </>
  );
}
