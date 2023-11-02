import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import Home from './components/home/Home';
import Recommandations from './components/Recommandations';
import News from './components/News';
import BestSellers from './components/BestSellers';
import Offers from './components/Offers';
import GameShow from './components/gameshow/GameShow';
import Categories from './components/genres/Categories';
import Search from './components/search/Search';
import AboutTheTeam from './components/AboutTheTeam';
import Error404 from './components/Error404';
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
        path: '/games/:gameId',
        element: <GameShow />,
      },
      {
        path: '/genres/:slug',
        element: <Categories />,
      },
      {
        path: '/games',
        element: <Search />,
      },
      {
        path: '/about-the-team',
        element: <AboutTheTeam />,
      },
      {
        path: '/404',
        element: <Error404 />,
      },
      {
        path: '*',
        element: <Navigate to="/404" />,
      },
      {
        path: '/platforms/:id',
        element: <Platforms />,
      },
    ],
  },
]);
