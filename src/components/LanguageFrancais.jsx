import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LanguageFrancais = () => {
  const navigate = useNavigate();
  const prgmStructure =
    "https://cloudinary.hbs.edu/hbsit/image/upload/s--mj-EYkHW--/f_auto,c_fill,h_250,w_500,/v20200101/BDD0688FF02068E5C427B0954F8A2297.jpg";
  const francaisaffaire =
    "https://st2.depositphotos.com/3662505/6208/i/380/depositphotos_62081845-stock-photo-support-group.jpg";
  const discussionlibre =
    "https://st5.depositphotos.com/10932024/68989/i/380/depositphotos_689898282-stock-photo-young-female-university-student-studying.jpg";

  const [userLevel, setUserLevel] = useState(1);
  const selectedProgram = useState(null);

  const handleReserve = (program) => {
    if (program === "discussion libre" && userLevel < 3) {
      alert(
        "Niveau insuffisant pour la discussion libre. Minimum requis : Intermédiaire."
      );
    } else if (program === "français des affaires" && userLevel < 4) {
      alert(
        "Niveau insuffisant pour le français des affaires. Minimum requis : Intermédiaire avancé."
      );
    } else {
      navigate(`/contact-reservation`); // Redirection vers le formulaire de contact
    }
  };

  // Rendu conditionnel pour le programme sélectionné
  const renderProgramDetails = () => {
    switch (selectedProgram) {
      case "programme structure":
        return (
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Programme Structuré</h2>
            <p>Voici les détails du programme structuré...</p>
          </div>
        );
      case "français des affaires":
        return (
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Français des Affaires</h2>
            <p>
              Voici les détails pour le programme de français des affaires...
            </p>
          </div>
        );
      case "discussion libre":
        return (
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Discussion Libre</h2>
            <p>Voici les détails pour le programme de discussion libre...</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full flex flex-col gap-10 my-10 py-4">
      <h3 className="text-4xl text-center font-bold text-color6">
        Choisissez votre type de cours
      </h3>

      <label className="text-white">
        Veuillez introduire votre niveau de départ
      </label>
      <select
        name="level"
        onChange={(e) => setUserLevel(parseInt(e.target.value))}
        className="mb-6"
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

      {/* Programmes */}
      <div className="flex lg:flex-row w-full items-center justify-center gap-10 flex-col">
        {/* Programme Structuré */}
        <div
          className="flex justify-center items-center px-4 w-[300px] h-[300px] rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:brightness-75"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${prgmStructure})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col gap-5 ">
            <p className="font-Poppins font-bold text-white text-2xl">
              Programme structuré
            </p>
            <div className="flex gap-2">
              <button
                className="text-white px-4 py-2 font-Poppins font-bold text-xl rounded-lg bg-color10 hover:bg-color7"
                onClick={() => navigate(`/details/programme-structure`)}
              >
                Détails
              </button>
              <button
                className="text-white px-4 py-2 font-Poppins font-bold text-xl rounded-lg bg-color10 hover:bg-color7"
                onClick={() => handleReserve("programme structuré")}
              >
                Réserver
              </button>
            </div>
          </div>
        </div>

        {/* Français des affaires */}
        <div
          className="flex justify-center items-center px-4 w-[300px] h-[300px] rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:brightness-75"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${francaisaffaire})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col gap-5 ">
            <p className="font-Poppins font-bold text-white text-2xl">
              Français des affaires
            </p>
            <div className="flex gap-2">
              <button
                className="text-white px-4 py-2 font-Poppins font-bold text-xl rounded-lg bg-color10 hover:bg-color7"
                onClick={() => navigate(`/details/francais-des-affaires`)}
              >
                Détails
              </button>
              <button
                className="text-white px-4 py-2 font-Poppins font-bold text-xl rounded-lg bg-color10 hover:bg-color7"
                onClick={() => handleReserve("français des affaires")}
              >
                Réserver
              </button>
            </div>
          </div>
        </div>

        {/* Discussion Libre */}
        <div
          className="flex justify-center items-center px-4 w-[300px] h-[300px] rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:brightness-75"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${discussionlibre})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col gap-5 ">
            <p className="font-Poppins font-bold text-white text-2xl">
              Discussion libre
            </p>
            <div className="flex gap-2">
              <button
                className="text-white px-4 py-2 font-Poppins font-bold text-xl rounded-lg bg-color10 hover:bg-color7"
                onClick={() => navigate(`/details/discussion-libre`)}
              >
                Détails
              </button>
              <button
                className="text-white px-4 py-2 font-Poppins font-bold text-xl rounded-lg bg-color10 hover:bg-color7"
                onClick={() => handleReserve("discussion libre")}
              >
                Réserver
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Affichage des détails du programme sélectionné */}
      <div className="mt-10">{renderProgramDetails()}</div>
    </div>
  );
};

export default LanguageFrancais;
