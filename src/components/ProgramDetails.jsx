// src/components/ProgramDetails.js
import React from "react";
import { useParams, Link } from "react-router-dom";

const ProgramDetails = () => {
  const { program } = useParams();
  const programs = [
    {
      title: "Programme structuré",
      objective:
        "Offrir une progression organisée dans l'apprentissage de la langue avec des niveaux (débutant, intermédiaire, avancé).",
      content: [
        "Niveaux de difficulté (A1 à C1)",
        "Cours de grammaire, vocabulaire, compréhension écrite et orale",
        "Exercices de révision avec quiz interactifs",
      ],
    },
    {
      title: "Discussion libre",
      objective:
        "Permettre aux utilisateurs de pratiquer leur expression orale de manière informelle via des conversations en direct ou programmées avec des tuteurs.",
      content: [
        "Sessions de discussion avec des sujets variés (culture, voyage, technologie, etc.)",
        "Interactions avec des locuteurs natifs",
        "Correction en temps réel",
      ],
    },
    {
      title: "Français des affaires",
      objective:
        "Apprendre le vocabulaire et les compétences linguistiques nécessaires pour différents domaines professionnels (ex. finance, marketing, droit).",
      content: [
        "Domaines spécifiques (finance, marketing, droit, ingénierie, etc.)",
        "Exercices pratiques basés sur des scénarios professionnels",
        "Ateliers d’expression écrite et orale pour le monde du travail",
      ],
    },
  ];
  const getProgramContent = (program) => {
    switch (program) {
      case "francais-des-affaires":
        return programs[2];
      case "discussion-libre":
        return programs[1];
      default:
        return programs[0];
    }
  };

  return (
    <div className="p-10 flex flex-col items-center gap-4">
      <h2 className="text-3xl font-bold">
        {program.replaceAll("-", " ").toUpperCase()}
      </h2>
      <div className="flex flex-col gap-4 ">
        <p className=" font-Poppins font-light text-color1 text-base">
          {getProgramContent(program).objective}
        </p>
        <div className="flex flex-col gap-4 ">
          {getProgramContent(program).content.map((item, idx) => (
            <li className="font-Poppins text-sm" key={idx}>
              {item}
            </li>
          ))}
        </div>
        <Link to="/langue">
          {" "}
          <p className="text-white bg-color9 px-4 py-2 cursor-pointer font-Poppins font-bold w-[120px] flex justify-center">
            Précédent
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProgramDetails;
