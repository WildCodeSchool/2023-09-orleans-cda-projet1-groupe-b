import * as React from 'react';
import './App.css';
import Home from './Pages/Home';
import Recommandations from './Pages/Recommandations';
import Plateforms from './Pages/Plateforms';
import Categories from './Pages/Categories';
import Error404 from './Pages/Error404';
import Navbar from './components/Navbar';
import News from './Pages/News';
import Offers from './Pages/Offers';
import BestSellers from './Pages/BestSellers';
import { Outlet, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '',
    element: (
      <>
        <Navbar />
        <div className="outlet">
          <Outlet />
        </div>
      </>
    ),
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'recommandations',
        element: (
          <>
            <Recommandations />

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
