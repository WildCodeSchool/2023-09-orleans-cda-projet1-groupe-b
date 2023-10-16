import Cube3D from './Cube3D';
import Top10List from './Top10List';

export default function Home() {
  return (
    <>
      <h1>Coucou</h1>
      <div className="flex items-center bg-black p-2">
        <div className="textBox text-justify text-light">
          <Top10List />
          {/* Inclure ici le composant <Top10Retro /> */}
          {/* {top10retro.map((game, index) => (
            <li className="py-[4px] font-text text-light" key={index}>
              {game.name}
            </li>
          ))} */}
        </div>
        <div>
          <Cube3D />
        </div>
      </div>
    </>
  );
}
