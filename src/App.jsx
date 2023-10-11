import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Recommandations from './components/Recommandations';
import Plateforms from './components/Plateforms';
import Categories from './components/Categories';
import Error404 from './components/Error404';

export default function App() {
  return (
    <>
      {/* Search nar */}
      <section className="fixed left-0 right-0 top-0 h-14">
        {/* // TODO import SearchBar component */}
      </section>

      <main className="flex h-screen flex-row flex-nowrap">
        <nav className="lg:w-1/3 xl:w-1/4">
          <Navbar />
        </nav>
        <section className="w-full">
          {/* // TODO import content */}
          <h1 className="space-x-40 text-4xl text-dark">Hello Word !</h1>
        </section>
        <aside className="lg:w-1/3 xl:w-1/4"></aside>
      </main>

      {/* Footer */}
      <footer className="h-14 w-screen">
        {/* // TODO import Footer component */}
      </footer>
    </>
  );
}
