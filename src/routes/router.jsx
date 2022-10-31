import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
