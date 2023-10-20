import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

export default function App() {
  return (
    <div className="bg-background">
      {/* Search bar */}
      <section className="fixed left-0 right-0 top-0 h-14">
        {/* TODO: Import SearchBar component */}
      </section>

      <main className="relative flex flex-row flex-nowrap">
        <nav className="sticky z-10 hidden bg-primary/10 lg:block lg:w-1/3 xl:w-1/4">
          <Navbar />
        </nav>
        <Outlet />
        <aside className="z-10 bg-primary/10 lg:w-1/3 xl:w-1/4"></aside>
      </main>
      {/* Footer */}
      <footer className="h-14 w-screen bg-tertiary">
        {/* TODO: Import Footer component */}
      </footer>
    </div>
  );
}
