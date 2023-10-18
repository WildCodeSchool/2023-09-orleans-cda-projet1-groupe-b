import Carousel from './Carousel';
import GridCard from './GridCard';
import { useState, useEffect } from 'react';
import { fetchGames } from '../../api/api-fetch.js';
import { gamesURL, genresURL } from '../../api/api-url.js';
import { useParams } from 'react-router-dom';

export default function Categories() {
  const { slug } = useParams();
  const [games, setGames] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchGames({
      parameter: gamesURL,
      pageId: 1,
      setter: setGames,
      property: 'results',
      signal,
    });
    fetchGames({
      parameter: genresURL,
      pageId: 1,
      setter: setGames,
      property: 'results',
      signal,
    });
  }, []);

  const genreGames = games.filter((game) => {
    const genres = game.genres;
    if (genres && Array.isArray(genres)) {
      for (let i = 0; i < genres.length; i++) {
        if (genres[i].slug === slug) {
          return true;
        }
      }
    }
    return false;
  });

  return (
    <>
      <section className="z-50 mt-[10rem] w-full px-2 xs:px-5 md:px-16 lg:px-2">
        <div className="mx-auto w-[80%] lg:max-w-[55vw]">
          <Carousel games={genreGames} />
        </div>
        <GridCard games={genreGames} />
      </section>
    </>
  );
}
