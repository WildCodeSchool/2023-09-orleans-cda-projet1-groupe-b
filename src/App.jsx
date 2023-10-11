import { Outlet } from 'react-router-dom';

import './App.css';
import GameShow from './components/gameshow/GameShow';

export default function App() {
  return (
    <div className="bg-background">
      {/* Search bar */}
      <section className="fixed top-0 left-0 right-0 h-14">
        {/* TODO: Import SearchBar component */}
      </section>

      <main className="flex flex-row flex-nowrap h-screen">
        <nav className="lg:w-1/3 xl:w-1/4 bg-primary">
          {/* TODO: Import NavBar component */}
        </nav>
        <section className="w-full px-2 xs:px-5 md:px-16 lg:px-2">
          <Outlet />
        </section>
        <aside className="lg:w-1/3 xl:w-1/4 bg-primary"></aside>
      </main>

      {/* Footer */}
      <footer className="h-14 w-screen bg-tertiary">
        {/* TODO: Import Footer component */}
      </footer>
    </div>
  );
}
