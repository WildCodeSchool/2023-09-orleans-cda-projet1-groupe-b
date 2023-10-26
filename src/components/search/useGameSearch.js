import { useEffect, useState } from 'react';

// Importation de la clé API
const API_KEY = import.meta.env.VITE_API_KEY;

export default function useGameSearch({ searchValue }) {
    const [games, setGames] = useState([]);
    const [isLoaded, setLoaded] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchAllGames = async () => {
            try {
                const allGames = [];

                const response = await fetch(
                    `https://api.rawg.io/api/games?key=${API_KEY}&search=${searchValue}&search_precise=true&page=${page}&page_size=20`,
                    signal,
                );

                if (response.ok) {
                    const data = await response.json();
                    // Met à jour le nombre total de jeux en fonction de la recherche
                    setCount(data.count);
                    console.log('current page: ', page);

                    if (data.results.length === 0) {
                        // False s'il n'y a plus de données à récupérer
                        setHasMore(false);
                    } else {
                        // Filtre les jeux en fonction de la valeur de la recherche et les stock dans un tableau
                        const filteredGames = data.results.filter((dataGame) =>
                            dataGame.name.toLowerCase().includes(searchValue.toLowerCase()),
                        );

                        allGames.push(...filteredGames);
                    }
                } else {
                    throw new Error(
                        `Unable to load video game list : ${response.status}`,
                    );
                }

                setLoaded(true);
                // Met à jour le state en supprimant les doublons
                setGames((prevGames) => [...new Set([...prevGames, ...allGames])]);
                setPage((prevPage) => prevPage + 1);
                console.log('page next:', searchValue, page);
            } catch (error) {
                throw new Error(`Unable to load API : ${error}`);
            }
        };

        fetchAllGames();

        return () => controller.abort();
    }, [searchValue]);

    return { isLoaded, games, hasMore, count };
}
