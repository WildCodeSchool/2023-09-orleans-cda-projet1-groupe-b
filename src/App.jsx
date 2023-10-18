import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
import { fetchGames } from './api/api-fetch';
import { genresURL, platformsURL } from './api/api-url';
import './App.css';

export default function App() {
  const location = useLocation();
  const [genres, setGenres] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [playstationModels, setPlaystationModels] = useState([]);

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
      <main className="relative flex flex-row flex-nowrap">
        <nav className="sticky z-10 hidden bg-primary/10 lg:block lg:w-1/3 xl:w-1/4">
          <Navbar platforms={platforms} />
        </nav>
        <Outlet />
        {location.pathname !== '/' && (
          <aside className="z-10 bg-primary/10 lg:w-1/3 xl:w-1/4"></aside>
        )}
      </main>
      {/* Footer */}
      <footer className="h-14 w-screen bg-tertiary">
        {/* TODO: Import Footer component */}
      </footer>
    </div>
  );
}
