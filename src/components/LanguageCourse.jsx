import React from "react";

const LanguageCourse = () => {
  const language = "";
  const courses = [
    {
      title: "Cours de base en français",
      description:
        "Apprenez les bases de la grammaire et du vocabulaire français.",
    },
    {
      title: "Français intermédiaire",
      description:
        "Améliorez vos compétences en français avec des leçons interactives.",
    },
    {
      title: "Français avancé",
      description:
        "Atteignez la maîtrise avec des exercices avancés de grammaire et d'expression orale.",
    },
    {
      title: "Anglais pour débutants",
      description:
        "Découvrez les bases de l'anglais avec des exercices simples et amusants.",
    },
    {
      title: "Anglais conversationnel",
      description:
        "Pratiquez votre anglais à travers des dialogues et des mises en situation.",
    },
    {
      title: "Espagnol pour les débutants",
      description:
        "Apprenez les fondamentaux de la langue espagnole, y compris la grammaire et le vocabulaire.",
    },
    {
      title: "Espagnol avancé",
      description:
        "Perfectionnez votre espagnol avec des leçons de grammaire avancée et des discussions.",
    },
    {
      title: "Allemand pour débutants",
      description:
        "Initiez-vous à la langue allemande avec des cours interactifs adaptés aux débutants.",
    },
    {
      title: "Allemand conversationnel",
      description:
        "Développez vos compétences orales en allemand à travers des conversations pratiques.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <h3 className="text-3xl text-center font-bold text-color6">
        Cours de {language}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 px-20">
        {courses.map((course, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-color6">
              {course.title}
            </h4>
            <p className="mt-4">{course.description}</p>
            <button className="mt-6 bg-color6 text-white px-4 py-2 rounded-lg">
              Démarrer le cours
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LanguageCourse;
