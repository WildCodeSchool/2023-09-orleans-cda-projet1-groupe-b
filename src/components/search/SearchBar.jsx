import { useState, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';

// Importation des composants
import MiniLogo from '../MiniLogo';
import IconMagnifyingGlass from '../icons/IconMagnifyingGlass';
import { fetchGames } from '../../api/api-fetch';
import { gamesURL } from '../../api/api-url';

// Importation des contextes
import { SearchProvider } from '../contexts/SearchContext';

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState();
  const [games, setGames] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  let navigate = useNavigate();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchGames({
      parameter: gamesURL,
      setter: setGames,
      setLoaded: setIsLoaded,
      signal,
    });

    return () => controller.abort();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/games?search=${searchValue}`);
  };

  return (
    <>
      <div className="mx-auto flex h-full w-2/3 items-center justify-center gap-6">
        <Link to="/">
          <MiniLogo />
        </Link>
        <div className="flex flex-grow items-center">
          <div className="translate-x-8">
            <IconMagnifyingGlass />
          </div>
          <SearchProvider>
            <form onSubmit={handleSubmit} className="w-full">
              <input
                type="text"
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
                className="w-full rounded-full border border-light bg-dark/0 py-1 pl-10 pr-4 font-text text-light outline-none focus:border-primary"
                placeholder={
                  isLoaded ? `Search among the ${games.count} games` : ''
                }
                value={searchValue}
              />
            </form>
          </SearchProvider>
        </div>
      </div>

      {/* Barre de progression */}
      <motion.div
        className="let-0 right-0 top-0 h-1 origin-top-left transform bg-primary"
        style={{ scaleX }}
      ></motion.div>
    </>
  );
}
