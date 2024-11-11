// AppRouter.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { TokenProvider } from "../context/TokenContext"; // Import TokenProvider
import LoginPage from "../views/LoginPage";
import PrivateRoute from "./PrivateRoute";
import NotFoundPage from "../views/404";
import Accueil from "../views/Accueil";
import AccueilEtudiant from "../views/AccueilEtudiant";
import Layouts from "../layouts/Layouts";
import InscriptionPage from "../views/InscriptionPage";
import ContactForm from "../components/ContactForm";
import About from "../components/About";
import LanguageEnglish from "../components/LanguageEnglish";
import LanguageFrancais from "../components/LanguageFrancais";
import Language from "../components/Language";
import ProgramList from "../components/ProgramList";
import ContactReservation from "../components/ContactReservation";
import ProgramDetails from "../components/ProgramDetails";

const AppRouter = () => (
  <Router basename="/">
    <TokenProvider> {/* Wrap all routes with TokenProvider */}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layouts />}>
          <Route path="/langue" element={<Language />} />
          <Route path="/langue/anglais" element={<LanguageEnglish />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<InscriptionPage />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Accueil />} />
          <Route path="/Etudiant" element={<AccueilEtudiant />} />
          <Route path="/langue/français" element={<LanguageFrancais />} />
          <Route path="/coursFrancais/:programType" element={<ProgramList />} />
          <Route path="/coursFrancais" element={<LanguageFrancais />} />
          <Route path="/contact-reservation" element={<ContactReservation />} />
          <Route path="/details/:program" element={<ProgramDetails />} />
        </Route>

        {/* Private Routes */}
        <Route
          path="/AccueilEtudiant"
          element={
            <PrivateRoute
              element={<AccueilEtudiant />}
              role="Etudiants"
              redirectPath="/Etudiant"
            />
          }
        />

        {/* Root route, redirect to appropriate login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* 404 Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </TokenProvider>
  </Router>
);

export default AppRouter;
