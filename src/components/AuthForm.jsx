import React, { useState, useEffect } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/LoginServices";
import { useToken } from "../context/TokenContext";

const AuthForm = () => {
  const { saveToken, token } = useToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/"); // Redirect if token exists
    }
  }, [token, navigate]);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (formData.email === "" || formData.password === "") {
      setMessage("Veuillez remplir tous les champs vides");
      return;
    }

    try {
      const response = await login(formData);

      if (response.success) {
        const token = response.message;
        setMessage("Connexion avec succès");
        saveToken(token); // Save token to context and localStorage
        navigate("/");
      } else {
        setMessage(response.message);
      }
    } catch (err) {
      setError("Erreur de connexion. Veuillez réessayer."); // General error message
    }
  };

  return (
    <section className="py-20 bg-gray-100 flex justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-1/3">
        <h3 className="text-2xl font-bold text-center mb-6">Connexion</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="block w-full mb-4 px-4 py-2 border rounded-lg"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="block w-full mb-4 px-4 py-2 border rounded-lg"
              placeholder="Mot de passe"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showPassword ? (
                <FaEyeSlash className="text-color6" />
              ) : (
                <FaEye className="text-color6" />
              )}
            </button>
          </div>
          <button className="w-full my-6 bg-color6 text-white px-4 py-2 rounded-lg">
            Se Connecter
          </button>
          <div className="flex flex-row items-center justify-start gap-2 w-full">
            <p className="font-light">Je n'ai pas de compte ?</p>
            <Link to={"/register"}>
              <p className="text-color6 cursor-pointer font-bold text-xl">
                Je m'inscris
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

export default AuthForm;
