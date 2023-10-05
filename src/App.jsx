import './App.css';
import GameShow from './components/gameshow/GameShow';

export default function App() {
  return (
    <>
      {/* Search nar */}
      <section className="fixed top-0 left-0 right-0 h-14">
        {/* // TODO import SearchBar component */}
      </section>

      <main className="flex flex-row flex-nowrap h-screen">
        <nav className="lg:w-2/6 xl:w-1/4 bg-secondary">
          {/* // TODO import NavBar component */}
        </nav>
        {/* // TODO import content */}
        <GameShow />
        <aside className="lg:w-2/6 xl:w-1/4 bg-secondary"></aside>
      </main>

      {/* Footer */}
      <footer className="h-14 w-screen">
        {/* // TODO import Footer component */}
      </footer>
    </>
  );
}
