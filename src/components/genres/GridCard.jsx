export default function GridCard({ games }) {
  return (
    <>
      <div className="mx-auto w-[75%]">
        <h1 className="my-20 space-x-40 text-center font-title text-4xl text-dark">
          Catalogue
        </h1>
        <div className="grid grid-cols-4 gap-x-2 gap-y-10">
          {games.map((game, index) => (
            <div
              key={index}
              className="m-auto h-96 w-60 rounded border border-primary transition-transform hover:scale-110"
            >
              <img
                className="h-60 w-full rounded-t object-cover"
                src={game.background_image}
              />
              <div className="flex justify-end text-center">
                {game.platforms.map((platform, index) => (
                  <p key={index} className=" text-light">
                    {platform.platform.name}
                  </p>
                ))}
                <p className="mx-3 my-2 h-7 w-10 rounded border-2 border-primary font-bold text-primary">
                  {game.metacritic}
                </p>
              </div>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-light">
                  {game.name}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
