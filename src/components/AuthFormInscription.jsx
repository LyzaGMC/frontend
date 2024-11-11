import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { signup } from "../services/SignupServices"; // Import the signup service

const AuthFormInscription = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    role: "Etudiants", // Add role if needed, otherwise remove it
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    // Password match validation
    if (formData.password !== formData.confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      console.log("afficher le format data", formData);
      const response = await signup(formData);
      setMessage(response.message); // Show success message from server
    } catch (err) {
      setError(err.message); // Display error message if signup fails
    }
  };

  return (
    <section className="py-16 bg-gray-100 flex justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-1/3">
        <h3 className="text-2xl font-bold text-center mb-6">Inscription</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nom"
            className="block w-full mb-4 px-4 py-2 border rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="block w-full mb-4 px-4 py-2 border rounded-lg"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Numéro de téléphone"
            className="block w-full mb-4 px-4 py-2 border rounded-lg"
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Mot de passe"
              className="block w-full mb-4 px-4 py-2 border rounded-lg"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirmer le mot de passe"
              className="block w-full mb-4 px-4 py-2 border rounded-lg"
              required
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full my-4 bg-color6 text-white px-4 py-2 rounded-lg"
          >
            S'inscrire
          </button>
          <div className="flex flex-row items-center justify-start gap-2 w-full">
            <p className="font-light">j'ai déjà un compte?</p>
            <Link to={"/login"}>
              <p className="text-color6 cursor-pointer font-bold text-xl">
                je me connecte
              </p>
            </Link>
          </div>
        </form>
        {message && (
          <p className="text-center mt-4 text-green-500">{message}</p>
        )}
        {error && <p className="text-center mt-4 text-red-500">{error}</p>}
      </div>
    </section>
  );
};

export default AuthFormInscription;
