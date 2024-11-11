import React, { useState } from "react";

const LanguageQuiz = () => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleSubmit = () => {
    setQuizCompleted(true);
  };

  return (
    <section className="py-20 bg-gray-100">
      <h3 className="text-3xl text-center font-bold text-color6">Quiz de Langue</h3>
      <div className="mt-10 flex justify-center">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold">Quelle est la traduction de "Dog" en français ?</h4>
          <div className="mt-4">
            <label className="block">
              <input
                type="radio"
                value="Chat"
                checked={selectedAnswer === "Chat"}
                onChange={() => setSelectedAnswer("Chat")}
              />
              <span className="ml-2">Chat</span>
            </label>
            <label className="block">
              <input
                type="radio"
                value="Chien"
                checked={selectedAnswer === "Chien"}
                onChange={() => setSelectedAnswer("Chien")}
              />
              <span className="ml-2">Chien</span>
            </label>
            <label className="block">
              <input
                type="radio"
                value="Oiseau"
                checked={selectedAnswer === "Oiseau"}
                onChange={() => setSelectedAnswer("Oiseau")}
              />
              <span className="ml-2">Oiseau</span>
            </label>
          </div>
          <button
            onClick={handleSubmit}
            className="mt-6 bg-color6 text-white px-4 py-2 rounded-lg"
          >
            Soumettre
          </button>

          {quizCompleted && (
            <p className="mt-4 text-lg">
              {selectedAnswer === "Chien" ? "Bonne réponse !" : "Mauvaise réponse, réessayez."}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default LanguageQuiz;
