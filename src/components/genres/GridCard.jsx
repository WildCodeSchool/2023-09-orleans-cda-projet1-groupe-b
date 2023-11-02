import { useState } from 'react';
import { Link } from 'react-router-dom';
import PlatformsList from '../home/PlatformsList';

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
              className="m-auto rounded border border-primary transition-transform md:hover:scale-110 xl:h-96 xl:w-72 xl:hover:scale-110"
            >
              <Link to={`/games/${game.id}`}>
                <img
                  className="h-60 w-full rounded-t object-cover"
                  src={game.background_image}
                />
                <div className="ms-2 flex justify-between text-center">
                  <PlatformsList game={game} isLoaded={isLoaded} />
                  <p className="mx-3 my-2 h-7 w-10 rounded border-2 border-primary font-bold text-primary">
                    {game.metacritic}
                  </p>
                </div>
                <div className="h-20 px-3">
                  <h5 className="my-2 text-2xl font-bold tracking-tight text-light">
                    {game.name}
                  </h5>
                </div>
              </Link>
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
