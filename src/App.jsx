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

      <main className="flex h-screen flex-row flex-nowrap">
        <nav className="bg-primary lg:w-1/3 xl:w-1/4">
          <Navbar />
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
