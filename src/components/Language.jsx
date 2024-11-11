import React from "react";
import { Link } from "react-router-dom";

const Language = () => {
  const imgAnglais =
    "https://media.clondres.com/resize/uploads/sites/5/2018/03/big-ben-londres-1200x800.jpg?format=auto";
  const imgFrancais =
    "https://d2iru24ttzll0d.cloudfront.net/cache/img/949c30e99e2df2dc46c5acc821c8693ceb296a5c-949c30-1024-383-landscape.jpg?q=1682617373";
  return (
    <div className="w-full flex flex-col gap-10 my-10 py-4">
      <h3 className="text-3xl text-center font-bold text-color6">
        Nos Langues disponible
      </h3>
      <div className="flex lg:flex-row w-full items-center justify-center gap-10 flex-col  ">
        <Link to={"/langue/français"}>
          <div
            className="flex justify-center items-center px-4 w-[300px] h-[300px] rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:brightness-75"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${imgFrancais})`, // Dark overlay
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <p className="font-Poppins font-bold text-white text-2xl">
              Français
            </p>
          </div>
        </Link>

        <Link to={"/langue/anglais"}>
          <div
            className="flex justify-center items-center px-4 w-[300px] h-[300px] rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:brightness-75"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${imgAnglais})`, // Dark overlay
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <p className="font-Poppins font-bold text-white text-2xl">
              Anglais
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Language;
