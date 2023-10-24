import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchGames } from '../../api/api-fetch';
import { gamesURL } from '../../api/api-url';

export default function Search() {
  const [games, setGames] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchGames({
      parameter: gamesURL,
      setter: setGames,
      setLoaded: setIsLoaded,
      signal,
      queryString: `search=${searchParams}`,
    });

    return () => controller.abort();
  }, [searchParams]);

  console.log(searchParams);
  console.log('list', games);

  return (
    <>
      <div className="h-screen py-40">
        <h1 className="text-6xl text-light">Search page</h1>
      </div>
    </>
  );
}
