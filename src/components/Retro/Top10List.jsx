import { Link } from 'react-router-dom';

export default function Top10List({
  games,
  isLoaded,
  setHoveringGameId,
  selectedGameId,
  setSelectedGameId,
}) {
  return (
    <>
      <div className="xl:perspective-640 list-none p-10 py-5 font-pixel text-xs text-light">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="text-rank text-lg">Rank</th>
              <th className="text-title px-10 text-lg">Title</th>
              <th className="text-genre px-10 py-3 text-lg">Genre</th>
            </tr>
          </thead>
          <tbody>
            {isLoaded ? (
              games.results &&
              games.results.map((game, index) => (
                <tr
                  key={index}
                  className={`hover:bg-light hover:text-dark ${
                    selectedGameId === game.id ? 'bg-light text-dark' : ''
                  }`}
                  onMouseEnter={() => {
                    setHoveringGameId(game.id);
                    setSelectedGameId(game.id);
                  }}
                >
                  <td className="px-5 py-[7px]">
                    <Link to={`/games/${game.slug}`}>n°{index + 1}</Link>
                  </td>
                  <td className="px-2 py-[4px]">
                    <Link to={`/games/${game.slug}`}>{game.name}</Link>
                  </td>
                  <td className="px-10 py-[4px]">
                    <Link to={`/games/${game.slug}`}>
                      {game.genres[0]?.name}
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
