import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Accueil from './Pages/Accueil';
import Recommandations from './Pages/Recommandations';
import Plateformes from './Pages/Plateformes';
import Catégories from './Pages/Catégories';
import Erreur404 from './Pages/Erreur404';

export default function App() {
  return (
    <>
      {/* Search nar */}
      <section className="fixed top-0 left-0 right-0 h-14">
        {/* // TODO import SearchBar component */}
      </section>

      <main className="flex flex-row flex-nowrap h-screen">
        <nav className="lg:w-1/3 xl:w-1/4">
          <Navbar />
        </nav>
        <section className="w-full">
          {/* // TODO import content */}
          <h1 className="space-x-40 text-dark text-4xl">Hello Word !</h1>
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
