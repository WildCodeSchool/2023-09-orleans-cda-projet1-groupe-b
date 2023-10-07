import React from 'react';
import { Outlet } from 'react-router-dom';

import './App.css';
import GameShow from './templates/gameshow/GameShow';

export default function App() {
  return (
    <div className="bg-background">
      {/* Search bar */}
      <section className="fixed top-0 left-0 right-0 h-14">
        {/* TODO: Import SearchBar component */}
      </section>

      <main className="flex flex-row flex-nowrap h-screen bg-primary">
        <nav className="lg:w-1/3 xl:w-1/4">
          {/* TODO: Import NavBar component */}
        </nav>
        <section className="w-full bg-secondary">
          <Outlet>
            {/* TODO: Import content */}
            <GameShow />
          </Outlet>
        </section>
        <aside className="lg:w-1/3 xl:w-1/4"></aside>
      </main>

      {/* Footer */}
      <footer className="h-14 w-screen bg-tertiary">
        {/* TODO: Import Footer component */}
      </footer>
    </div>
  );
}
