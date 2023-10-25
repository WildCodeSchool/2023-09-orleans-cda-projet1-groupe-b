import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './components/home/Home';
import Recommandations from './components/Recommandations';
import News from './components/News';
import BestSellers from './components/BestSellers';
import Offers from './components/Offers';
import Error404 from './components/Error404';
import GameShow from './components/gameshow/GameShow';
import Search from './components/search/Search';

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
      {
        path: '/games',
        element: <Search />,
      },
      {
        path: '*',
        element: <Error404 />,
      },
    ],
  },
]);
