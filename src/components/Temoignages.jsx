import React from "react";

const Temoignages = () => {
  const temoignages = [
    {
      name: "John Doe",
      text: "Cette plateforme m'a aidé à acquérir de nouvelles compétences rapidement. Les cours sont bien structurés.",
    },
    {
      name: "Jane Smith",
      text: "J'adore la flexibilité de l'apprentissage à mon propre rythme. Les instructeurs sont très compétents.",
    },
    {
      name: "Alex Johnson",
      text: "Des cours de qualité et des prix abordables. Je recommande fortement cette plateforme.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <h3 className="text-3xl text-center font-bold text-color6">Témoignages</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 px-20">
        {temoignages.map((temoignages, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg italic">"{temoignages.text}"</p>
            <h4 className="mt-4 font-semibold text-color6 text-center">
              - {temoignages.name}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Temoignages;

