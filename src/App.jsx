import { Outlet } from 'react-router-dom';

import './App.css';
import GameShow from './components/gameshow/GameShow';
import Categories from './components/genres/Categories';

export default function App() {
  return (
    <div className="bg-background">
      {/* Search bar */}
      <section className="fixed left-0 right-0 top-0 h-14">
        {/* TODO: Import SearchBar component */}
      </section>

      <main className="flex h-full w-full flex-row flex-nowrap">
        <nav className="bg-primary/10 lg:w-1/3 xl:w-1/4">
          {/* TODO: Import NavBar component */}
        </nav>
        {/* <Outlet /> */}
        <div className=" lg:w-1/3 xl:w-3/5">
          <Outlet />
        </div>
        <aside className="bg-primary/10 lg:w-1/3 xl:w-1/4"></aside>
      </main>

      {/* Footer */}
      <footer className="h-14 w-screen bg-tertiary">
        {/* TODO: Import Footer component */}
      </footer>
    </div>
  );
}
