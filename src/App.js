import React from "react";
import Layout from './Component/Layout/layout';
import { RouterProvider, createHashRouter } from "react-router-dom";
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Portfolio from './Component/Portfolio/Portfolio';
import Contact from './Component/Contact/Contact';

export default function App() {

  const routers = createHashRouter([{
    path: '/', element: <Layout />,
    children: [
      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'contact', element: <Contact /> }

    ]
  }]);
  return (
    <>

      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}
