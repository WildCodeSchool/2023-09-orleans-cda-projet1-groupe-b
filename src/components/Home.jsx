import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
// import Recommandations from './components/Recommandations';
// import Plateformes from './components/Plateforms';
// import Catégories from './components/Categories';
// import Erreur404 from './components/Error404';
import '../App.css';

export default function Home() {
  return (
    <>
      {/* Search nar */}
      <section className="fixed top-0 left-0 right-0 h-14">
        {/* // TODO import SearchBar component */}
      </section>

      <main className="flex flex-row flex-nowrap h-screen">
        <nav className="lg:w-1/3 xl:w-1/4 bg-primary h-screen">
          <Navbar />
        </nav>
        <section className="w-full">
          <Outlet />
          <h1 className="space-x-40 text-dark text-4xl">Hello World </h1>
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
