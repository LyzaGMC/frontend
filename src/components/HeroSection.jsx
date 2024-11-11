import React from "react";
import imghome from "../assets/homepic.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className=" text-white pt-20 pb-36 min-h-screen flex flex-col justify-between items-center "
      style={{
        backgroundImage: `url(${imghome})`,
        backgroundSize: "cover", // Covers the entire area of the section
        backgroundPosition: "center", // Centers the background image
        backgroundRepeat: "no-repeat", // Prevents repeating the background image
      }}
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-bold font-Poppins">
          Apprenez à votre rythme, où que vous soyez
        </h2>
        <p className="mt-4 text-lg font-Poppins">
          Explorez des centaines de cours conçus pour vous aider à maîtriser de
          nouvelles compétences
        </p>
      </div>

      <button className="mt-8 px-6 py-3 bg-color6 text-white font-semibold rounded hover:bg-color7 font-Poppins hover:text-color6">
        <Link to="/register">Commencez dès maintenant</Link>{" "}
      </button>
    </section>
  );
};

export default HeroSection;
