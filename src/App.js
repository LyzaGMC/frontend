import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Accueil from "./views/Accueil";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Accueil />
      <Footer />
    </div>
  );
};

export default App;
