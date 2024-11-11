import React from "react";
// src/components/Footer.js
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa"; // Import des icônes de réseaux sociaux

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-4 mt-8">
      <div className="container mx-auto text-center text-gray-400">
        <h3 className="text-lg font-semibold text-gray-100 mb-4">
          Suivez-nous sur les réseaux sociaux
        </h3>
        <div className="flex justify-center space-x-6 mb-6">
          {/* Icône Instagram */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaInstagram className="h-6 w-6" />
          </a>
          {/* Icône Facebook */}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaFacebookF className="h-6 w-6" />
          </a>

          {/* Icône LinkedIn */}
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaLinkedinIn className="h-6 w-6" />
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          © 2024 LangaLearn. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
