import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

export default function App() {
  const location = useLocation();

  return (
    <div className="bg-background">
      {/* Search bar */}
      <section className="fixed left-0 right-0 top-0 h-14">
        {/* TODO: Import SearchBar component */}
      </section>

      <main className="relative flex flex-row flex-nowrap">
        {/* <nav className="sticky z-10 hidden bg-primary/50 md:w-1/4 lg:block xl:w-1/5"> */}
        <nav
          className={`sticky z-10 hidden bg-primary/50 lg:block lg:w-[25%] xl:w-[18%]`}
        >
          <Navbar />
        </nav>
        <Outlet />
        {location.pathname !== '/' && (
          <aside className="z-10 bg-primary/50 lg:w-[25%] xl:w-[18%]"></aside>
        )}
      </main>
      {/* Footer */}
      <footer className="h-14 w-screen bg-tertiary">
        {/* TODO: Import Footer component */}
      </footer>
    </div>
  );
}
