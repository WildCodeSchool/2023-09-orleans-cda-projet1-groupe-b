import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import { fetchGames } from './api/api-fetch';
import { genresURL, platformsURL } from './api/api-url';
import './App.css';

export default function App() {
  const [genres, setGenres] = useState([]);
  const [platforms, setPlatforms] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetchGames({
      setter: setGenres,
      property: 'results',
      signal,
      parameter: genresURL,
      pageId: 1,
    });

    fetchGames({
      setter: setPlatforms,
      property: 'results',
      signal,
      parameter: platformsURL,
      pageId: 1,
    });
  }, []);

  return (
    <div className="bg-background">
      {/* Search bar */}
      <section className="fixed left-0 right-0 top-0 h-14">
        {/* TODO: Import SearchBar component */}
      </section>

      <main className="flex h-screen flex-row flex-nowrap">
        <nav className="lg:w-1/3 xl:w-1/4">
          <Navbar genres={genres} platforms={platforms} />
        </nav>
        <section className="w-full px-2 xs:px-5 md:px-16 lg:px-2">
          <Outlet />
        </section>
        <aside className="bg-primary lg:w-1/3 xl:w-1/4"></aside>
      </main>
      {/* Footer */}
      <footer className="h-14 w-screen bg-tertiary">
        {/* TODO: Import Footer component */}
      </footer>
    </div>
  );
}
