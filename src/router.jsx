import * as React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Categories from './pages/Categories';

import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/categories',
    element: <Categories />,
  },
]);

export default router;
