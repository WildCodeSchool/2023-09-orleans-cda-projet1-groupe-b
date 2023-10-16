export default function Top10List() {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold">HIGH SCORE</h1>
      </div>
      <div className="border-5 border-transparent bg-gradient-to-r from-black via-transparent to-black bg-auto bg-clip-border bg-repeat-x"></div>
      <div className="textBox flex list-none items-center justify-between bg-black p-2">
        <div className="rank p-5">
          <div className="text-rank">
            <h2 className="pb-2 text-xl font-black">Rank</h2>
            <ul>
              <li>n°1</li>
              <li>n°2</li>
              <li>n°3</li>
              <li>n°4</li>
              <li>n°5</li>
              <li>n°6</li>
              <li>n°7</li>
              <li>n°8</li>
              <li>n°9</li>
              <li>n°10</li>
            </ul>
          </div>
        </div>
        <div className="titles p-5">
          <div className="text-title">
            <h2 className="pb-2 text-xl font-black">Title</h2>
            <ul>
              <li>Super Mario Bros</li>
              <li>The Legend of Zelda</li>
              <li>Donkey Kong</li>
              <li>Megaman 2</li>
              <li>Street Fighter 2</li>
              <li>Street of rage 2</li>
              <li>Sonic the Hedgehog</li>
              <li>F-zero</li>
              <li>Tetris</li>
              <li>Pong</li>
            </ul>
          </div>
        </div>
        <div className="rank p-5">
          <div className="text-title">
            <h2 className="pb-2 text-xl font-black">Genre</h2>
            <ul>
              <li>Plateforme</li>
              <li>Aventure</li>
              <li>Plateforme</li>
              <li>Plateforme</li>
              <li>Combat</li>
              <li>Action</li>
              <li>Plateforme</li>
              <li>Course</li>
              <li>Puzzle</li>
              <li>Sport</li>
            </ul>
          </div>
        </div>
        <div className="Next self-end font-black">
          <p>Suivant</p>
        </div>
        <div>
          {/* Intégrer ici la logique de filter des 10 jeux les plus téléchargés, sortis avant 1995 */}
        </div>
      </div>
    </>
  );
}
