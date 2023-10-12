import { useState, useEffect } from 'react';
import { fetchCategoryDetails } from '../../api/api-fetch';
import { genresURL } from '../../api/api-url';

import Logo from '../Logo';
import Button from '../Button';

const GENRES_ID = [4, 51, 3, 5, 10, 2, 40, 14, 7, 11, 83, 1, 14, 19];

export default function Home() {
  const [imageHeader, setImageHeader] = useState();

  // Génére un index aléatoire par rapport à la longueur du tableau GENRE_ID
  const randomIndex = Math.floor(Math.random() * GENRES_ID.length);

  // Extrait la valeur de l'ID d'une catégorie par rapport à un index aléatoire
  const randomGenres = GENRES_ID[randomIndex];

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchCategoryDetails({
      categoryId: randomGenres,
      setter: setImageHeader,
      property: 'image_background',
      signal,
    });
  }, []);

  return (
    <>
      <div className="absolute h-screen w-screen overflow-hidden">
        <div className="image-mask grid h-full w-full grid-cols-1 before:absolute before:h-full before:w-full before:bg-gradient-to-r before:from-dark before:to-dark/0 md:grid-cols-4">
          <div className="hidden h-full md:block">
            {/* Affichage des images si au dessus de 768px */}
            <img
              src="/images/mario.webp"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="hidden md:block">
            <img
              src="/images/masterchief.webp"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="hidden md:block">
            <img
              src="/images/kratos.webp"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="hidden md:block">
            <img
              src="/images/jinx.webp"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          {/* Affichage de l'image si en dessous de 768px */}
          <div className="block md:hidden">
            <img
              src={imageHeader}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      <section className="z-50 mt-[10rem] w-full px-2 xs:px-5 md:px-16 lg:px-2">
        <div className="flex flex-col items-center md:items-start">
          <div className="w-clamp-title lg:w-[40vw]">
            <Logo />
          </div>
          <div class="ml-1 mt-10 h-5 w-28 -skew-x-35 bg-primary"></div>
          <p className="my-10 px-5 text-center text-2xl text-light md:w-[50vw] md:px-0 md:text-start">
            Discover a wide selection of the best video games available on all
            platforms, your go-to source for exploring a world rich in virtual
            entertainment.
          </p>
          <div className="mt-20 flex justify-center md:ml-5 md:justify-start">
            <Button str="Show all games" />
          </div>
        </div>
      </section>
    </>
  );
}
