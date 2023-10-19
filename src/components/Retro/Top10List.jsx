export default function Top10List({ games, isLoaded }) {
  return (
    <>
      <div className="perspective1 list-none py-4 font-pixel text-xs text-light">
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
                  className=" hover:bg-light hover:text-dark"
                  key={index}
                  // onMouseEnter={() => onHover(game)}
                >
                  <td className="px-5 py-[7px]">n°{index + 1}</td>
                  <td className="px-2 py-[4px]">{game.name}</td>
                  <td className="px-10 py-[4px]">{game.genres[0].name}</td>
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
