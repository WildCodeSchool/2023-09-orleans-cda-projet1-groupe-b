import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="bg-background">
      {/* Search bar */}
      <section className="fixed left-0 right-0 top-0 h-14">
        {/* TODO: Import SearchBar component */}
      </section>

      <main className="relative flex h-screen flex-row flex-nowrap">
        <nav className="sticky z-10 hidden bg-primary/10 lg:block lg:w-1/3 xl:w-1/4">
          <Navbar />
        </nav>
        <Outlet />
        <aside className="z-10 bg-primary/10 lg:w-1/3 xl:w-1/4"></aside>
      </main>
      <Footer />
    </div>
  );
}
