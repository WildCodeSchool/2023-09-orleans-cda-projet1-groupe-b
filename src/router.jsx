// import * as React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import App from './App';

// Importation des pages
import Home from './components/home/Home';
import GameShow from './components/gameshow/GameShow';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/game/:gameId',
        element: <GameShow />,
      },
    ],
  },
]);

export default router;
