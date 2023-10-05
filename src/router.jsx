import * as React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import GameShow from './components/gameshow/GameShow';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/gameshow',
    element: <GameShow />,
  },
]);

export default router;
