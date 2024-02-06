import React from "react";
import Layout from './Component/layout';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './Component/Home';
import About from './Component/About';
import Portfolio from './Component/Portfolio';
import Contact from './Component/Contact';

export default function App() {

  const routers = createBrowserRouter([{
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
