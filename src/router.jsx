import * as React from 'react';
import './App.css';
import Home from './components/Home';
import Recommandations from './components/Recommandations';
import Plateforms from './components/Plateforms';
import Categories from './components/Categories';
import Error404 from './components/Error404';
// import Navbar from './components/Navbar';
import News from './components/News';
import Offers from './components/Offers';
import BestSellers from './components/BestSellers';
import { Outlet, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '',
    element: (
      <>
        <Home />
      </>
    ),
    children: [
      {
        path: 'recommandations',
        element: (
          <>
            <div className="outlet">
              <Outlet />
            </div>
          </>
        ),
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
        path: 'plateforms',
        element: <Plateforms />,
      },
      {
        path: 'categories',
        element: <Categories />,
      },
      {
        path: '*',
        element: <Error404 />,
      },
    ],
  },
]);

export default router;
