import * as React from 'react';
import './App.css';
import Home from './components/Home';
import Recommandations from './components/Recommandations';
import Offers from './components/Offers';
import BestSellers from './components/BestSellers';
import Error404 from './components/Error404';
import News from './components/News';
import { createBrowserRouter, Outlet, Route } from 'react-router-dom';

export default createBrowserRouter([
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
    path: '*',
    element: <Error404 />,
  },
]);
