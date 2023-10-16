import React from 'react';
import Top10List from './Top10List';
import Cube3D from './Cube3D';

export default function RetroContainer() {
  return (
    <>
      <div className="relative flex h-auto w-full items-center bg-dark pl-3">
        <div className="perspective mt-12 flex w-10/12 flex-col justify-between pl-8 pt-12 text-justify text-light">
          <h1 className="perspective font-pixel text-2xl font-bold text-yellow-200">
            HIGH SCORE
          </h1>
          {/* {Implémenter ici la logique de switch case pour emplir les faces du ccube en fonction du hover sur la top 10 list} */}
          <Top10List />
          {/* Inclure ici le composant <Top10Retro /> */}
          {/* {top10retro.map((game, index) => (
            <li className="py-[4px] font-text text-light" key={index}>
              {game.name}
            </li>
          ))} */}
          <div className="perspective self-end pb-16 font-pixel">
            <a className=" rotate-360 p-2 hover:bg-light hover:text-dark">{`Suivant >`}</a>
          </div>
        </div>
        <div className="h-full w-2/3">
          <Cube3D />
        </div>
      </div>
    </>
  );
}
