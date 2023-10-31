import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollTop from './components/ScrollTop';
import Footer from './components/Footer';
import SearchBar from './components/search/SearchBar';
import './App.css';

export default function App() {
  const location = useLocation();

  return (
    <div className="bg-background bg-cover bg-fixed">
      <ScrollTop />
      {/* Search bar */}
      <section className="fixed left-0 right-0 top-0 z-50 h-14 bg-dark/80">
        <SearchBar />
      </section>
      <main className="relative flex flex-row flex-nowrap">
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
      <Footer />
    </div>
  );
}
