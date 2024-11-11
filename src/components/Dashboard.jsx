import React from "react";

const Dashboard = () => {
  return (
    <section className="py-20 bg-white">
      <h3 className="text-3xl text-center font-bold text-color6">
        Mon Tableau de Bord
      </h3>
      <div className="flex justify-center mt-10">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md w-1/2">
          <h4 className="text-xl font-semibold text-center">
            Progrès d'apprentissage
          </h4>
          <p className="mt-4 text-center">Cours suivis : 5/10</p>
          <div className="relative w-full bg-gray-200 h-4 rounded-lg mt-4">
            <div
              className="bg-color6 h-4 rounded-lg"
              style={{ width: "50%" }}
            ></div>
          </div>
          <p className="mt-4 text-center">
            Continuez votre apprentissage pour compléter vos cours !
          </p>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
