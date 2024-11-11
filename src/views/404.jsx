// src/pages/404.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">404</h1>
        <p className="text-lg text-gray-600 mt-2">Page non trouvé</p>
        <p className="text-base text-gray-500 mt-4">
          Désolé, la page que vous cherchiez n'existe pas.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700"
        >
          Vers la page d'accueil
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;