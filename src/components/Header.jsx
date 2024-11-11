import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    switch (event.target.value) {
      case "Anglais":
        navigate("/langue/anglais");
        break;
      case "Français":
        navigate("/langue/français");
        break;
      case "Langues":
        navigate("/langue");
        break;
      default: //Langues
        break;
    }
    setSelectedValue(event.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm); // Tu pourras implémenter une recherche réelle ici
  };

  return (
    <div className="flex justify-between items-center px-20 py-4 bg-white shadow-md">
      <div>
        <h1 className="text-2xl font-bold text-color6">LangaLearn</h1>
      </div>
      <form onSubmit={handleSearch} className="flex items-center">
        <input
          type="text"
          className="border border-gray-400 rounded-l px-4 py-2"
          placeholder="Rechercher un cours..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="bg-color6 text-white px-4 py-2 rounded-r"
        >
          Rechercher
        </button>
      </form>
      <nav className="flex gap-6">
        <Link to={"/"}>Accueil</Link>
        <div className="justify-center cursor-pointer   px-5">
          <select
            className="cursor-pointer px-3  "
            value={selectedValue}
            onChange={handleChange}
          >
            <option className="font-Poppins cursor-pointer " value="Langues">
              Langues
            </option>
            <option className="font-Poppins cursor-pointer " value="Anglais">
              Anglais
            </option>
            <option className="font-Poppins cursor-pointer " value="Français">
              Français
            </option>
          </select>
        </div>

        <Link to={"/about"}>À propos</Link>
        <Link to={"/contact"}>Contact</Link>
      </nav>
    </div>
  );
};

export default Header;
