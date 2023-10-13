import { useState } from 'react';

// Importation des composants
import ThumbnailsPaginations from './ThumbnailsPaginations';

const NUMBER_IMAGES = 5;

export default function Thumbnails({ images, curr, handleThumbnailClick }) {
  const [nbPage, setNbPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const totalImages = images.length;

  // Calcule l'indice de départ
  const pageStartIndex = Math.floor(curr / NUMBER_IMAGES) * NUMBER_IMAGES;

  // Condition qui vérifie si le nombre d'images restantes est inférieur ou égal au nombre d'images affichées ; si oui, réajuste la valeur de la variable startIndex afin d'afficher toujours 5 images
  const startIndex = Math.min(pageStartIndex, totalImages - NUMBER_IMAGES);

  // Extraction des images à partir de l'index jusqu'au nombre d'images afin d'afficher 5 images
  const imagesThumbnails = images.slice(startIndex, startIndex + NUMBER_IMAGES);

  // Nombre total de paginations
  const totalPaginations = Math.ceil(totalImages / NUMBER_IMAGES);

  return (
    <>
      <div className="relative flex max-h-[12vw] min-h-full justify-center gap-1 md:max-h-[8vw] lg:max-h-[5vw] xl:h-[15vw] xl:max-h-[6vw]">
        {imagesThumbnails.map((image, index) => (
          <div
            key={startIndex + index}
            className={`w-max-full relative mb-2 w-full cursor-pointer bg-dark ${
              startIndex + index === curr
                ? 'outline outline-2 outline-primary'
                : ''
            }`}
            onClick={() => handleThumbnailClick(startIndex + index)}
          >
            <svg
              height="10"
              fill="#31FFE6"
              version="1.1"
              viewBox="0 0 36.8 25"
              className={`absolute -top-3 left-1/2 -translate-x-1/2 ${
                startIndex + index === curr ? 'block' : 'hidden'
              }`}
            >
              <polygon points="0,25 18.4,0 36.8,25 " />
            </svg>

            <img
              src={image.image}
              alt={`Thumbnail ${startIndex + index}`}
              className={`max-h-full min-h-full w-full flex-shrink-0 ${
                image.width < 500 ? 'object-contain' : ''
              }`}
            />
          </div>
        ))}
      </div>
      <ThumbnailsPaginations
        totalPagination={totalPaginations}
        pageId={startIndex}
      />
    </>
  );
}
