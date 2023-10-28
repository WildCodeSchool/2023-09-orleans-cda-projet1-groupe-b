import { useEffect, useState } from 'react';

// Importation de la clé API
const API_KEY = import.meta.env.VITE_API_KEY;

export default function useGameSearch({ searchValue }) {
  const [games, setGames] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [count, setCount] = useState(0);

  const fetchAllGames = async ({ searchValue, signal, pageNumber }) => {
    try {
      setLoading(true);
      const allGames = [];

      const response = await fetch(
        `https://api.rawg.io/api/games?key=${API_KEY}&search=${searchValue}&search_precise=true&page=${pageNumber}&page_size=20`,
        { signal },
      );

      if (response.ok) {
        const data = await response.json();
        // Met à jour le nombre total de jeux
        setCount(data.count);

        if (data.results.length === 0) {
          // False s'il n'y a plus de données à récupérer
          setHasMore(false);
        } else {
          allGames.push(...data.results);
        }
      } else {
        throw new Error(`Unable to load video game list : ${response.status}`);
      }

      // Met à jour le state en supprimant les doublons
      setGames((prevGames) => [...new Set([...prevGames, ...allGames])]);
      setLoading(false);
    } catch (error) {
      throw new Error(`Unable to load API : ${error}`);
    }
  };

  // Réinitialiser la valeur des jeux et de la page à chaque nouvelle recherche
  useEffect(() => {
    setGames([]);
    setPage(1);
  }, [searchValue]);

  // Fetcher l'API
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchAllGames({
      searchValue,
      signal,
      pageNumber: page,
    });

    return () => controller.abort();
  }, [searchValue, page]);

  return { isLoading, games, hasMore, count, page, setPage, fetchAllGames };
}
