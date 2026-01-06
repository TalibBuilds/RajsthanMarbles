import React from "react";
import { Outlet } from "react-router-dom";
import Cursor from "../Cursor";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbra";

const MainLayout = () => {
  return (
    <>
     <Navbar />
     <Cursor />
     <Outlet />
     <Footer />      
    </>
  );
};

export default MainLayout; 
