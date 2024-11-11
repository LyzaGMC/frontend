import React from "react";

const ProgramList = () => {
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
      title: "Anglais des affaires",
      objective:
        "Apprendre le vocabulaire et les compétences linguistiques nécessaires pour différents domaines professionnels (ex. finance, marketing, droit).",
      content: [
        "Domaines spécifiques (finance, marketing, droit, ingénierie, etc.)",
        "Exercices pratiques basés sur des scénarios professionnels",
        "Ateliers d’expression écrite et orale pour le monde du travail",
      ],
    },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Nos Programmes d'Apprentissage
        </h1>
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {programs.map((program, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                {program.title}
              </h2>
              <p className="text-gray-700 mb-4 font-medium">
                Objectif : {program.objective}
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {program.content.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramList;
