import Cube3D from './Retro/Cube3D';
import RetroContainer from './Retro/RetroContainer';

export default function Home() {
  return (
    <>
      {/* {Implémenter ici la logique de switch case pour emplir les faces du ccube en fonction du hover sur la top 10 list} */}
      {/* Inclure ici le composant <Top10Retro /> */}
      {/* {top10retro.map((game, index) => (
            <li className="py-[4px] font-text text-light" key={index}>
              {game.name}
            </li>
          ))} */}

      <section className="w-full px-2 xs:px-5 md:px-16 lg:px-2">
        <RetroContainer />
      </section>
    </>
  );
}
