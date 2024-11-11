import React from "react";
import HeroSection from "../components/HeroSection";

import Temoignages from "../components/Temoignages";
import Services from "../components/Services";

const Accueil = () => {
  return (
    <div>
      <HeroSection />
      <Services />
      <Temoignages />
    </div>
  );
};

export default Accueil;
