import { gamesURL } from '../../api/api-url';

export default function Top10List({ games, isLoaded }) {
  return (
    <>
      <div></div>
      <div className="perspective my-3 flex list-none items-center justify-around px-12 font-pixel">
        <div className="rank">
          <div className="text-rank">
            <h2 className="pb-6 text-xl font-black">Rank</h2>
            <ul className="flex flex-col gap-4">
              {isLoaded ? (
                games.results.map((_, index) => (
                  <li className="py-[2px] font-text text-light" key={index}>
                    {index + 1}
                  </li>
                ))
              ) : (
                <p>Loading...</p>
              )}
            </ul>
          </div>
        </div>
        <div className="titles">
          <div className="text-title">
            <h2 className="pb-6 text-xl font-black">Title</h2>
            <ul className="flex flex-col gap-4">
              {isLoaded ? (
                games.results.map((game, index) => (
                  <li className="py-[2px] font-text text-light" key={index}>
                    {game.name}
                  </li>
                ))
              ) : (
                <p>Loading...</p>
              )}
            </ul>
          </div>
        </div>
        <div className="rank pl-12">
          <div className="text-title p-1">
            <h2 className="pb-6 text-xl font-black">Genre</h2>
            <ul className="flex flex-col gap-4">
              {isLoaded ? (
                games.results.map((game, genres, name) => (
                  <li className="flex py-[2px] font-text text-light">
                    {`${game.genres[0].name}`.split('').join(' ')}
                  </li>
                ))
              ) : (
                <p>Loading...</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

// {`${game.genres}`.split('').join(', ')};
