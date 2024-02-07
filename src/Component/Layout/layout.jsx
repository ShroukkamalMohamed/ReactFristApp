import React from "react";
import Footer from "./../Footer/Footer";
 import { Outlet } from "react-router-dom";
import Navbra from './../Navbar/Navbra';

export default function Layout() {
  return (
    <>
      <Navbra />
      <Outlet/>
      <Footer />
    </>
  );
}
