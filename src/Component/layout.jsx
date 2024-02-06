import React from "react";
import Footer from "./Footer";
import Navbra from "./Navbra";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbra />
      <Outlet/>
      <Footer />
    </>
  );
}
