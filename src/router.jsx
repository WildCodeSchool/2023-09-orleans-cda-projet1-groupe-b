import * as React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import App from './App';

import Home from './templates/home/Home';
import GameShow from './templates/gameshow/GameShow';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Outlet />,
        children: [
          // Ajouter les routes
          {
            path: '/home',
            element: <Home />,
          },
          {
            path: '/game/:gameId',
            element: <GameShow />,
          },
        ],
      },
    ],
  },
]);

export default router;
