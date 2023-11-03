import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PlatformsList from '../home/PlatformsList';
import Title from '../Title';
import Button from '../Button';

export default function GridCard({ games, isLoaded }) {
  const [visible, setVisible] = useState(12);
  const [selectedPlatform, setSelectedPlatform] = useState('All');
  const [sortedGames, setSortedGames] = useState([]);
  const [originalGames, setOriginalGames] = useState([]);

  useEffect(() => {
    if (games?.results) {
      setSortedGames([...games.results]);
      setOriginalGames([...games.results]);
    }
  }, [games]);

  useEffect(() => {
    if (selectedPlatform === 'All') {
      setSortedGames([...originalGames]);
    } else {
      const filteredGames = originalGames.filter((game) => {
        return game.platforms.some(
          (platform) => platform.platform.name === selectedPlatform,
        );
      });
      setSortedGames(filteredGames);
    }
  }, [selectedPlatform, originalGames]);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 12);
  };

  const totalGames = games?.results?.length;

  const sortByReleaseDate = () => {
    const sortedByReleaseDate = [...sortedGames].sort((a, b) => {
      return new Date(b.released) - new Date(a.released);
    });
    setSortedGames(sortedByReleaseDate);
  };

  const sortByRating = () => {
    const sortedByRating = [...sortedGames].sort((a, b) => {
      return b.metacritic - a.metacritic;
    });
    setSortedGames(sortedByRating);
  };

  const getPlatformNames = (games) => {
    const platformNames = games.reduce((names, game) => {
      game.platforms.forEach((platform) => {
        if (!names.includes(platform.platform.name)) {
          names.push(platform.platform.name);
        }
      });
      return names;
    }, []);
    return platformNames;
  };

  if (!isLoaded) {
    return null;
  }
  return (
    <>
      <div className="z-30 mx-auto">
        <div className="flex flex-col">
          <Title title="Catalogue" />
        </div>
        <div className="mx-auto mb-10 flex flex-col space-x-5 sm:flex-row md:flex-row xl:flex-row">
          <p className="mt-4 text-xl text-light">Sort by</p>
          <button
            className="mt-3 w-72 -skew-x-35 rounded border border-primary text-light hover:bg-primary/50 xl:w-44"
            onClick={sortByReleaseDate}
          >
            <p className="skew-x-[35deg]">Release date</p>
          </button>
          <button
            className="mt-3 w-72 -skew-x-35 rounded border border-primary text-light hover:bg-primary/50 xl:w-44"
            onClick={sortByRating}
          >
            <p className="skew-x-[35deg]">Best rating</p>
          </button>
          <div className="mt-3 w-72 -skew-x-[35deg] rounded border border-primary hover:bg-primary/50 xl:w-60">
            <div className="skew-x-[35deg] ps-3">
              <select
                className="w-60 rounded bg-dark/0 p-2 text-light xl:w-52"
                value={selectedPlatform}
                onChange={(e) => {
                  setSelectedPlatform(e.target.value);
                }}
              >
                <option value="All">Platforms</option>
                {getPlatformNames(originalGames).map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4">
          {sortedGames.slice(0, visible).map((game, index) => (
            <div
              key={index}
              className="m-auto rounded border border-primary transition-transform md:hover:scale-[1.05] xl:h-96 xl:w-72 xl:hover:scale-[1.05]"
            >
              <Link to={`/games/${game.slug}`}>
                <img
                  className="h-60 w-full rounded-t object-cover"
                  src={game.background_image}
                />
                <div className="ms-2 flex justify-between p-2 text-center">
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

      <div className="z-30 my-10 flex justify-center">
        {visible < totalGames && (
          <Button handleClick={showMoreItems} str="Show More" />
        )}
      </div>
    </>
  );
}
