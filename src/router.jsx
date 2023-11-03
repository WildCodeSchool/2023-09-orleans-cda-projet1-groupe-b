import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import Home from './components/home/Home';
import GameShow from './components/gameshow/GameShow';
import Genres from './components/genres/Genres';
import Search from './components/search/Search';
import AboutTheTeam from './components/AboutTheTeam';
import Error404 from './components/Error404';
import Platforms from './components/genres/Platforms';

export default createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/games/:gameId',
          element: <GameShow />,
        },
        {
          path: '/genres/:slug',
          element: <Genres />,
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
  ],
  { basename: import.meta.env.BASE_URL },
);
