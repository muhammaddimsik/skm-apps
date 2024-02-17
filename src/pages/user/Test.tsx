import React, { useState } from "react";

const questions = [
  {
    id: 1,
    question: "Apa jenis kelamin Anda?",
    options: ["Laki-laki", "Perempuan"],
  },
  {
    id: 2,
    question: "Apa jenjang pendidikan Anda?",
    options: ["1", "2", "3", "4"],
  },
  // Tambahkan pertanyaan berikutnya sesuai kebutuhan
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div>
      {currentQuestion <= questions.length ? (
        <div>
          <p>{questions[currentQuestion - 1].question}</p>
          <ul>
            {questions[currentQuestion - 1].options.map((option, index) => (
              <li key={index} onClick={() => handleAnswer(option)}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <p>Terima kasih telah menjawab pertanyaan!</p>
          <p>Ringkasan Jawaban:</p>
          <ul>
            {questions.map((question) => (
              <li key={question.id}>
                Pertanyaan {question.id}:{" "}
                {answers[question.id] || "Belum dijawab"}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
