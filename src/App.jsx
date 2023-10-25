import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useState } from 'react';
import './App.css';

export default function App() {
  const [platforms, setPlatforms] = useState([]);

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
      </main>
      {/* Footer */}
      <footer className="h-14 w-screen bg-tertiary">
        {/* TODO: Import Footer component */}
      </footer>
    </div>
  );
}
