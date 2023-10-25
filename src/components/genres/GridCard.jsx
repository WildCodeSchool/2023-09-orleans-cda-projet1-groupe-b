import { useState } from 'react';

export default function GridCard({ games, isLoaded }) {
  const [visible, setVisible] = useState(12);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 12);
  };

  if (!isLoaded) {
    return null;
  }
  return (
    <>
      <div className="mx-auto">
        <div className="my-20 flex flex-col ">
          <h1 className="text-start font-title text-7xl text-light">
            Catalogue
          </h1>
          <div className="mt-4 h-5 w-28 -skew-x-35 bg-primary"></div>
        </div>
        <div className="grid gap-x-10 gap-y-10 md:grid-cols-2 xl:grid-cols-4">
          {games.results?.slice(0, visible).map((game, index) => (
            <div
              key={index}
              className="m-auto rounded border border-primary transition-transform hover:scale-110 xl:h-96 xl:w-60"
            >
              <img
                className="h-60 w-full rounded-t object-cover"
                src={game.background_image}
              />
              <div className="flex justify-around text-center">
                <p className="text-light">Platforms: </p>
                <p className="mx-3 my-2 h-7 w-10 rounded border-2 border-primary font-bold text-primary">
                  {game.metacritic}
                </p>
              </div>
              <div className="h-20 px-3">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-light">
                  {game.name}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <button
          className="mb-4 h-10 w-44 -skew-x-[30deg] rounded bg-primary "
          onClick={showMoreItems}
        >
          Load More
        </button>
      </div>
    </>
  );
}