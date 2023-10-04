import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router-dom';
import router from './router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
