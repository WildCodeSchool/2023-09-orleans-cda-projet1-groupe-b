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
        <nav className="z-[100] hidden lg:block lg:w-1/3 xl:w-1/4">
          <Navbar />
        </nav>
        <Outlet />
        {location.pathname !== '/' && (
          <aside className="z-10 lg:w-1/3 xl:w-1/4"></aside>
        )}
      </main>
      <Footer />
    </div>
  );
}
