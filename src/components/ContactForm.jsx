// src/components/ContactForm.js
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",

    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de soumission (peut être remplacée par un appel API)
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="max-w-2xl mx-auto my-10 p-8 bg-gradient-to-r from-color6 to-color6 rounded-3xl shadow-xl">
      <h2 className="text-4xl font-extrabold text-center text-white mb-8">
        Contactez-nous
      </h2>
      <p className="text-center text-gray-100 mb-6">
        Vous avez une question ou un problème ? Remplissez le formulaire
        ci-dessous et notre équipe vous contactera rapidement.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nom complet */}
        <div className="relative">
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-white"
          >
            Nom complet
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full mt-1 px-4 py-2 border border-transparent rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition duration-300 ease-in-out"
            placeholder="Votre nom complet"
          />
        </div>

        {/* Email */}
        <div className="relative">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-white"
          >
            Adresse e-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full mt-1 px-4 py-2 border border-transparent rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition duration-300 ease-in-out"
            placeholder="Votre adresse e-mail"
          />
        </div>

        {/* Numéro de téléphone */}
        <div className="relative">
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-white"
          >
            Numéro de téléphone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full mt-1 px-4 py-2 border border-transparent rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition duration-300 ease-in-out"
            placeholder="Votre numéro de téléphone"
          />
        </div>

        {/* Message */}
        <div className="relative">
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-white"
          >
            Votre message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full mt-1 px-4 py-2 border border-transparent rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-color6 focus:border-transparent transition duration-300 ease-in-out"
            placeholder="Décrivez votre problème ou question"
          />
        </div>

        {/* Bouton d'envoi */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-white text-color6 font-semibold rounded-full shadow-lg hover:bg-gray-200 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
          >
            Envoyer le message
          </button>
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
