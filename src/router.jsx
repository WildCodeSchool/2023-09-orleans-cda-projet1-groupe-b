import * as React from 'react';
import './App.css';
import App from './App';
import Home from './components/Home';
import Recommandations from './components/Recommandations';
import Offers from './components/Offers';
import BestSellers from './components/BestSellers';
import Error404 from './components/Error404';
import News from './components/News';
import { createBrowserRouter, Outlet, Route } from 'react-router-dom';
import GameShow from './components/gameshow/GameShow';

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
        path: '/game/:gameId',
        element: <GameShow />,
      },
      {
        path: '*',
        element: <Error404 />,
      },
    ],
  },
]);
