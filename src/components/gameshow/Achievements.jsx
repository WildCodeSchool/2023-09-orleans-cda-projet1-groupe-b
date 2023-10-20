// Importation des composants
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';
import { useState } from 'react';
import { Carousel } from 'flowbite-react';

export default function Achievements({ trophiesResults, isLoaded }) {
  const [curr, setCurr] = useState(0);

  // Fonction qui décrémente l'index
  const handleClickPrev = () =>
    setCurr((curr) => (curr === 0 ? curr : curr - 1));

  // Fonction qui incrémente l'index
  const handleClickNext = () =>
    setCurr((curr) => (curr === trophiesResults.length - 1 ? curr : curr + 1));

  // Fonction qui gére le clic sur le composant Thumbnail
  const handleThumbnailClick = (index) => {
    setCurr(index);
  };

  console.log(trophiesResults);

  return (
    <>
      {/* <Carousel slide={false}>
        {isLoaded ? (
          trophiesResults &&
          trophiesResults.map((trophy, index) => (
            <div className="grid grid-cols-3">
            <div className="flex font-bold text-light w-14">
              <img src={trophy.image} alt={`Screenshot : ${trophy.id}`} />
              <p>{trophy.name}</p>
            </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Carousel> */}
      <Carousel
        cols={6}
        rows={2}
        gap={1}
        containerStyle={{ background: 'transparent' }}
      >
        {[...Array(23)].map((_, i) => (
          <Carousel.Item key={i}>
            <img src="/public/images/kratos.webp" />
          </Carousel.Item>
        ))}
        <Carousel.Item key={23}>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
