import * as React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';

// import * as React from 'react';

import App from './App';

// Importation des pages
import GameShow from './components/gameshow/GameShow';
import Categories from './components/genres/Categories';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <App />
      </>
    ),
    children: [
      {
        // Ajouter les routes
        path: '/game/:gameId',
        element: <GameShow />,
      },
      {
        path: '/categories/:slug',
        element: <Categories />,
      },
    ],
  },
]);

export default router;
