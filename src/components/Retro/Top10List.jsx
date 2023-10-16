export default function Top10List() {
  return (
    <>
      <div></div>
      <div className="perspective my-3 flex list-none items-center justify-around px-12 font-pixel">
        <div className="rank">
          <div className="text-rank">
            <h2 className="pb-6 text-xl font-black">Rank</h2>
            <ul className="flex flex-col gap-4">
              <li>n°1</li>
              {/* <li>{ game.rank } { game.title } { game.genre }</li> */}
              <li className="text-sm">n°2</li>
              <li className="text-sm">n°3</li>
              <li className="text-sm">n°4</li>
              <li className="text-sm">n°5</li>
              <li className="text-sm">n°6</li>
              <li className="text-sm">n°7</li>
              <li className="text-sm">n°8</li>
              <li className="text-sm">n°9</li>
              <li className="text-sm">n°10</li>
            </ul>
          </div>
        </div>
        <div className="titles">
          <div className="text-title">
            <h2 className="pb-6 text-xl font-black">Title</h2>
            <ul className="flex flex-col gap-4">
              <li className="text-sm">Super Mario Bros</li>
              <li className="text-sm">The Legend of Zelda</li>
              <li className="text-sm">Donkey Kong</li>
              <li className="text-sm">Megaman 2</li>
              <li className="text-sm">Street Fighter 2</li>
              <li className="text-sm">Street of rage 2</li>
              <li className="text-sm">Sonic the Hedgehog</li>
              <li className="text-sm">F-zero</li>
              <li className="text-sm">Tetris</li>
              <li className="text-sm">Pong</li>
            </ul>
          </div>
        </div>
        <div className="rank pl-12">
          <div className="text-title p-1">
            <h2 className="pb-6 text-xl font-black">Genre</h2>
            <ul className="flex flex-col gap-4">
              <li className="text-sm">Plateforme</li>
              <li className="text-sm">Aventure</li>
              <li className="text-sm">Plateforme</li>
              <li className="text-sm">Plateforme</li>
              <li className="text-sm">Combat</li>
              <li className="text-sm">Action</li>
              <li className="text-sm">Plateforme</li>
              <li className="text-sm">Course</li>
              <li className="text-sm">Puzzle</li>
              <li className="text-sm">Sport</li>
            </ul>
          </div>
          {/* Intégrer ici la logique de filter des 10 jeux les plus téléchargés, sortis avant 1995 */}
        </div>
      </div>
    </>
  );
}
