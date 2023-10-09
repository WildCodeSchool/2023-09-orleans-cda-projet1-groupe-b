// import * as React from 'react';
// import './App.css';
// import Home from './Templates/Home';
// import Recommandations from './Templates/Recommandations';
// import Plateforms from './Templates/Plateforms';
// import Categories from './Templates/Categories';
// import Action from './Templates/Categories';
// import Navbar from './components/Navbar';
// import Error404 from './Templates/Error404';
// import News from './Templates/News';
// import PC from './Templates/PlatformGallery';
// import { Outlet, createBrowserRouter } from 'react-router-dom';
// import './App.css';

// const router = createBrowserRouter([
//   {
//     path: '',
//     element: (
//       <>
//         <Home />
//         <div className="outlet">
//           <Outlet />
//         </div>
//       </>
//     ),
//     children: [
//       {
//         path: 'recommandations',
//         element: (
//           <>
//             <Recommandations />

//             <div className="outlet">
//               <Outlet />
//             </div>
//           </>
//         ),
//         children: [
//           {
//             path: ':recommandations',
//             element: <News />,
//           },
//         ],
//       },
//       {
//         path: 'plateforms',
//         element: (
//           <>
//             <Plateforms />

//             <div className="outlet">
//               <Outlet />
//             </div>
//           </>
//         ),
//         children: [
//           {
//             path: ':platform',
//             element: <PC />,
//           },
//         ],
//       },
//       {
//         path: 'categories',
//         element: <Action />,
//       },
//       {
//         path: '*',
//         element: <Error404 />,
//       },
//     ],
//   },
// ]);

// export default router;

import * as React from 'react';
import './App.css';
import Home from './Templates/Home';
import Recommandations from './Templates/Recommandations';
import Plateforms from './Templates/Plateforms';
import Categories from './Templates/Categories';
import Action from './Templates/Categories';
import Navbar from './components/Navbar';
import Error404 from './Templates/Error404';
import News from './Templates/News';
import PC from './Templates/PlatformGallery';
import { Outlet, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Home />
        <div className="outlet">
          <Outlet />
        </div>
      </>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'recommandations',
        element: <Recommandations />,
        children: [
          {
            path: ':recommandations',
            element: <News />,
          },
        ],
      },
      {
        path: 'plateforms',
        element: <Plateforms />,
        children: [
          {
            path: ':platform',
            element: <PC />,
          },
        ],
      },
      {
        path: 'categories',
        element: <Action />,
      },
      {
        path: '*',
        element: <Error404 />,
      },
    ],
  },
]);

export default router;
