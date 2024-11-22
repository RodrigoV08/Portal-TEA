import React, { useState } from 'react';

const quizQuestions = [
  {
    question: "O que é o Transtorno do Espectro Autista (TEA)?",
    options: [
      "Uma doença contagiosa",
      "Uma condição de desenvolvimento que afeta a comunicação e comportamento",
      "Uma deficiência física",
      "Um tipo de distúrbio mental"
    ],
    answer: 1,
  },
  {
    question: "Quais são os níveis de suporte no autismo?",
    options: [
      "Nível 1, Nível 2, Nível 3",
      "Leve, Moderado, Severos",
      "Baixo, Médio, Alto",
      "Nenhum"
    ],
    answer: 0,
  },
  {
    question: "O autismo é mais comum em homens do que em mulheres?",
    options: [
      "Sim",
      "Não",
      "Ambos têm a mesma probabilidade",
      "Não se sabe"
    ],
    answer: 0,
  },
  {
    question: "Quais são algumas características do autismo?",
    options: [
      "Dificuldades de comunicação e interação social",
      "Hiperatividade",
      "Preferência por atividades físicas",
      "Dificuldade em reconhecer emoções"
    ],
    answer: 0,
  }
];

const TesteAutismo = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswer = (optionIndex) => {
    if (optionIndex === quizQuestions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < quizQuestions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(to right, rgba(0, 255, 0, 0.5), rgba(255, 255, 255, 0.5))'
    }}>
      <div style={{
        width: '90%',
        maxWidth: '600px',
        background: '#ffffff',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
        color: '#333'
      }}>
        <h2>{quizFinished ? 'Resultados do Quiz' : 'Teste de Conhecimento sobre Autismo'}</h2>
        {quizFinished ? (
          <div>
            <p>Você acertou {score} de {quizQuestions.length} perguntas!</p>
            <button onClick={handleRestart} style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>
              Reiniciar Quiz
            </button>
          </div>
        ) : (
          <div>
            <p><strong>Pergunta {currentQuestionIndex + 1}:</strong> {quizQuestions[currentQuestionIndex].question}</p>
            <div>
              {quizQuestions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  style={{
                    display: 'block',
                    margin: '10px auto',
                    padding: '10px',
                    backgroundColor: '#28a745',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    width: '100%',
                    maxWidth: '300px'
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TesteAutismo;
