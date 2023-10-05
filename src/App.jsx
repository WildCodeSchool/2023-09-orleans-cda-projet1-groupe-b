import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Accueil from './Pages/Accueil';
import Recommandations from './Pages/Recommandations';
import Plateformes from './Pages/Plateformes';
import Catégories from './Pages/Catégories';
import Erreur404 from './Pages/Erreur404';

function App() {
  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
