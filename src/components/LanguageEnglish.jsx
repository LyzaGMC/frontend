import React, { useState } from "react"; // Ensure useState is used
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const LanguageFrancais = () => {
  const navigate = useNavigate();
  // Define the images correctly
  const prgmStructure =
    "https://cloudinary.hbs.edu/hbsit/image/upload/s--mj-EYkHW--/f_auto,c_fill,h_250,w_500,/v20200101/BDD0688FF02068E5C427B0954F8A2297.jpg";
  const francaisaffaire =
    "https://st2.depositphotos.com/3662505/6208/i/380/depositphotos_62081845-stock-photo-support-group.jpg";
  const discussionlibre =
    "https://st5.depositphotos.com/10932024/68989/i/380/depositphotos_689898282-stock-photo-young-female-university-student-studying.jpg";

  // Correctly define the userLevel state
  const [userLevel, setUserLevel] = useState(1); // Default to the first option

  const handleReserve = (program) => {
    // Check the user level before navigating
    if (program === "discussion libre" && userLevel < 3) {
      alert(
        "Niveau insuffisant pour la discussion libre. Minimum requis : Intermédiaire."
      );
    } else if (program === "anglais des affaires" && userLevel < 4) {
      alert(
        "Niveau insuffisant pour le français des affaires. Minimum requis : Intermédiaire avancé."
      );
    } else {
      // Navigate to the corresponding program details
      navigate(`/coursFrancais/${program.replace(/\s/g, "-").toLowerCase()}`); // Replace spaces with hyphens for the route
    }
  };

  return (
    <div className="w-full flex flex-col gap-10 my-10 py-4">
      <h3 className="text-4xl text-center font-bold text-color6">
        Choisissez votre type de cours
      </h3>

      <button>Veuillez introduire votre niveau de départ</button>
      <select
        name="level"
        id=""
        onChange={(e) => setUserLevel(parseInt(e.target.value))} // Save user level
      >
        <option value="1">Débutant</option>
        <option value="2">Débutant avancé</option>
        <option value="3">Intermédiaire</option>
        <option value="4">Intermédiaire avancé</option>
        <option value="5">Avancé</option>
        <option value="6">Courant</option>
      </select>

      <h5 className="text-xl text-center font-bold text-color6">
        Nous vous proposons des cours collectifs et individuels adaptés à votre
        niveau
      </h5>

      <div className="flex lg:flex-row w-full items-center justify-center gap-10 flex-col">
        <Link to={`/coursAglais/programme-structuré`}>
          <div
            className="flex justify-center items-center px-4 w-[300px] h-[300px] rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:brightness-75"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${prgmStructure})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            onClick={() => handleReserve("programme structuré")}
          >
            <div className="flex flex-col gap-5 ">
              <p className="font-Poppins font-bold text-white text-2xl">
                Programme structuré
              </p>
              <button className="flex justify-center text-white px-4 py-2 font-Poppins font-bold text-xl rounded-lg bg-color10 hover:bg-color7">
                Réserver
              </button>
            </div>
          </div>
        </Link>
        <div
          className="flex justify-center items-center px-4 w-[300px] h-[300px] rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:brightness-75"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${francaisaffaire})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          onClick={() => handleReserve("français des affaires")}
        >
          <Link to={`/coursAnglais/anglais-des-affaires`}>
            <div className="flex flex-col gap-5 ">
              <p className="font-Poppins font-bold text-white text-2xl">
                Anglais des affaires
              </p>
              <p className="flex justify-center text-white px-4 py-2 font-Poppins font-bold text-xl rounded-lg bg-color10 hover:bg-color7">
                Réserver
              </p>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex w-full justify-center items-center">
        <Link to={`/coursAnglais/discussion-libre`}>
          <div
            className="flex justify-center items-center px-4 w-[300px] h-[300px] rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:brightness-75"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${discussionlibre})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            onClick={() => handleReserve("discussion libre")}
          >
            <div className="flex flex-col gap-5 ">
              <p className="font-Poppins font-bold text-white text-2xl">
                Discussion libre
              </p>
              <p className="flex justify-center text-white px-4 py-2 font-Poppins font-bold text-xl rounded-lg bg-color10 hover:bg-color7">
                Réserver
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LanguageFrancais;
