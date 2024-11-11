// src/components/About.js
import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-r py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-color6 text-center mb-8">
          À propos de nous
        </h2>
        <p className="text-lg text-color6-100  mb-6 text-justify">
          Bienvenue sur <span className="font-semibold">LanguaLearn</span>,
          votre destination en ligne pour apprendre de nouvelles langues de
          manière simple, efficace et immersive.
        </p>
        <p className="text-lg text-color6 mb-6  text-justify">
          Que vous soyez un débutant complet ou un apprenant avancé, notre
          plateforme est conçue pour vous accompagner tout au long de votre
          parcours linguistique, avec des outils innovants et des cours adaptés
          à votre rythme.
        </p>

        <h2 className="text-4xl font-extrabold text-color6 text-center mb-8 mt-12">
          Notre vision
        </h2>
        <p className="text-lg text-color6  text-justify mb-6">
          Notre vision Chez LanguaLearn, nous croyons que l'apprentissage des
          langues est bien plus qu'une simple compétence ; c'est un outil
          puissant qui ouvre des portes vers de nouvelles cultures, de nouvelles
          idées, et de nouvelles opportunités. Notre vision est de créer un
          monde où chacun a accès aux ressources nécessaires pour maîtriser une
          ou plusieurs langues, favorisant ainsi la compréhension
          interculturelle et l'échange global.
        </p>

        <h3 className="text-3xl font-bold text-color6 text-center mt-12 mb-8">
          Ce qui nous rend uniques !
        </h3>
        <ul className="list-disc list-inside text-color6 text-lg space-y-4 mb-8 mx-auto max-w-2xl  text-justify">
          <li>
            <span className="font-semibold">Cours personnalisés</span> :
            Profitez d'un parcours d'apprentissage sur mesure, adapté à vos
            besoins et à vos objectifs.
          </li>
          <li>
            <span className="font-semibold">Professeurs qualifiés</span> : Nos
            enseignants sont des experts linguistiques certifiés qui viennent du
            monde entier.
          </li>
          <li>
            <span className="font-semibold">Cours en visio de 40 minutes</span>{" "}
            : Participez à des séances d'apprentissage interactives et
            dynamiques de 40 minutes, conçues pour maximiser votre engagement et
            votre progression.
          </li>
          <li>
            <span className="font-semibold">Communauté internationale</span> :
            Rejoignez une communauté d'apprenants du monde entier et pratiquez
            vos compétences linguistiques avec des partenaires d'échange.
          </li>
          <li>
            <span className="font-semibold">Flexibilité totale</span> : Apprenez
            quand et où vous voulez grâce à notre plateforme accessible sur tous
            les appareils.
          </li>
        </ul>

        <h3 className="text-3xl font-bold text-color6 text-center mt-12 mb-8 ">
          Notre mission
        </h3>
        <p className="text-lg text-color6 mb-6  text-justify">
          Notre mission est de rendre l'apprentissage des langues accessible à
          tous, partout dans le monde. Nous pensons que la maîtrise de plusieurs
          langues est non seulement un atout pour la vie personnelle et
          professionnelle, mais aussi un pont vers la compréhension
          interculturelle.
        </p>
        <p className="text-lg text-color6 mb-6  text-justify">
          En utilisant les dernières technologies d'enseignement et en créant un
          environnement d'apprentissage stimulant, nous aidons chaque étudiant à
          atteindre ses objectifs linguistiques.
        </p>
        <h3 className="text-3xl font-bold text-color6 text-center mt-12 mb-8 ">
          Disponibilité
        </h3>
        <p className="text-lg text-color6 mb-6  text-justify">
          Notre plateforme est disponible tous les jours, de 6h20 à 22h00, afin
          que vous puissiez apprendre à votre rythme, quand cela vous convient
          le mieux.
        </p>
      </div>
    </div>
  );
};

export default About;
