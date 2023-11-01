import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './components/home/Home';
import Recommandations from './components/Recommandations';
import News from './components/News';
import BestSellers from './components/BestSellers';
import Offers from './components/Offers';
import GameShow from './components/gameshow/GameShow';
import Categories from './components/genres/Categories';
import AboutTheTeam from './components/AboutTheTeam';
import Platforms from './components/genres/Platforms';

export default createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'recommandations',
        element: <Recommandations />,
        children: [
          {
            path: 'news',
            element: <News />,
          },
          {
            path: 'bestsellers',
            element: <BestSellers />,
          },
          {
            path: 'offers',
            element: <Offers />,
          },
        ],
      },
      {
        // Ajouter les routes
        path: '/games/:gameId',
        element: <GameShow />,
      },
      // ajouter la route '/genres/:slug'
      {
        path: '/genres/:slug',
        element: <Categories />,
      },
      {
        path: '/about-the-team',
        element: <AboutTheTeam />,
      },
      {
        path: '/platforms/:id',
        element: <Platforms />,
      },
    ],
  },
]);
