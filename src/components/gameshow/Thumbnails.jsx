import { useState, useEffect } from 'react';

// Importation des composants
import ThumbnailsPaginations from './ThumbnailsPaginations';

export default function Thumbnails({ images, curr, handleThumbnailClick }) {
  const [nbPage, setNbPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const numberImages = 5;
  const totalImages = images.length;

  // Calcule l'indice de départ
  const pageStartIndex = Math.floor(curr / numberImages) * numberImages;

  // Condition qui vérifie si le nombre d'images restantes est inférieur ou égal au nombre d'images affichées ; si oui, réajuste la valeur de la variable startIndex afin d'afficher toujours 5 images
  const startIndex = Math.min(pageStartIndex, totalImages - numberImages);

  // Extraction des images à partir de l'index jusqu'au nombre d'images afin d'afficher 5 images
  const imagesThumbnails = images.slice(startIndex, startIndex + numberImages);

  // Nombre total de paginations
  const totalPaginations = Math.ceil(totalImages / numberImages);

  useEffect(() => {});

  return (
    <>
      <div className="flex justify-center gap-1 relative min-h-full xl:h-[15vw] max-h-[12vw] md:max-h-[8vw] lg:max-h-[5vw] xl:max-h-[6vw]">
        {imagesThumbnails.map((image, index) => (
          <div
            key={startIndex + index}
            className={`cursor-pointer mb-2 relative bg-dark w-full w-max-full ${
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
              className={`absolute left-1/2 -translate-x-1/2 -top-3 ${
                startIndex + index === curr ? 'block' : 'hidden'
              }`}
            >
              <polygon points="0,25 18.4,0 36.8,25 " />
            </svg>

            <img
              src={image.image}
              alt={`Thumbnail ${startIndex + index}`}
              className={`flex-shrink-0 w-full min-h-full max-h-full ${
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
