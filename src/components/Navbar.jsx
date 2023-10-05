import { Link } from 'react-router-dom';
import Recommandations from '../Pages/Recommandations';

function Navbar() {
  return (
    <>
      <nav className="navbarrre">
        <Link to="/">Accueil</Link>
        <Link to="/recommandations">Recommandations</Link>
        <Link to="/plateforms">Plateforms</Link>
        <Link to="/categories">Catégories</Link>
      </nav>
    </>
  );
}

export default Navbar;
