export default function TestTable({ games, isLoaded }) {
  return (
    <div className="perspective1 flex list-none items-center py-4 font-pixel text-xs text-light">
      <table className="ml-40 w-3/5 table-auto">
        <thead>
          <tr>
            <th className="text-rank text-lg">Rank</th>
            <th className="text-title text-lg">Title</th>
            <th className="text-genre py-3 text-lg">Genre</th>
          </tr>
        </thead>
        <tbody>
          {isLoaded ? (
            games.results.map((game, index) => (
              <tr className=" hover:bg-light hover:text-dark" key={index}>
                <td className="py-[4px]">n°{index + 1}</td>
                <td className="overflow-hidden py-[4px] sm:overflow-ellipsis">
                  {game.name}
                </td>
                <td className="px-5 py-[4px]">{game.genres[0].name}</td>
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
  );
}
