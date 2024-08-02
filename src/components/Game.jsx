/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";

const finishes = [
  {
    finishTitle:
      "Wow, looks like Kata would love to work in your team! You should probably get in contact.",
    score: 131,
  },
  {
    finishTitle:
      "According to my intricate calculations, Kata would seamlessly fit into your team, and he would love to conquer the world with you.",
    score: 118,
  },
  {
    finishTitle:
      "Looks like you don't have enough retro music lover yet, your team would definitely benefit from Kata!",
    score: 125,
  },
];

const questions = [
  {
    question: "Do you appreciate team members who enjoy handcrafted beers?",
  },
  {
    question:
      "Is it important to you to have a teammate who could eat an unlimited amount of sushi?",
  },
  {
    question: "Is it important to you to have a teammate skilled in WoW?",
  },
  {
    question:
      "Would you enjoy working with someone who prefers to party to the music of the 70s and 80s?",
  },
  {
    question:
      "Do you value collaborating with people who is a big fan of the band Ghost?",
  },
  {
    question:
      "Would you enhance your team with someone who would definitely be one of the shortest members on the team?",
  },
  {
    question: "Would you enjoy working with a big sitcom fan?",
  },
  {
    question:
      "Do you value collaborating with people who has a Duolingo streak of over 500+ days? (for real)",
  },
  {
    question:
      "Would you enjoy working with someone who, not at all behind, has just discovered the X-files series for herself?",
  },
  {
    question: "Would you enjoy working with a lifelong Harry Potter fan?",
  },
];

const shuffleArray = (array) => {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Game = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [aiProcessing, setAiProcessing] = useState(false);
  const [randomizedQuestions] = useState(shuffleArray(questions));
  const [opacity, setOpacity] = useState(1);
  const [questionIndex, setQuestionIndex] = useState(0);
  const randomIndex = Math.floor(Math.random() * 3);

  const nextQuestion = () => {
    if (questionIndex == 9) {
      setGameFinished(true);
      setAiProcessing(true);
      setGameStarted(false);

      setTimeout(() => {
        setAiProcessing(false);
      }, 3500);
      return;
    }

    setOpacity(0);
    setTimeout(() => {
      setQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
      setOpacity(1);
    }, 500);
  };

  const restartGame = () => {
    setGameFinished(false);
    setGameStarted(false);
    setQuestionIndex(0);
    setOpacity(1);
  };

  return (
    <div className="container game-container d-flex align-items-start justify-content-center">
      <div className="row game-box no-plus with-margin">
        {!gameStarted && !gameFinished ? (
          <>
            <h4 className="poppins-font position-relative mb-4">
              Katafy Your Team - Test
            </h4>
            <p className="poppins-font">
              The <span className="red">KYT - test</span> helps you decide
              whether you should consider reaching out to to Kata.
            </p>
            <p className="poppins-font">
              Simply answer the appearing questions with either
              <span className="red"> "Yes" </span> or
              <span className="red"> "No" </span> and the underlying
              <span className="red"> super-complicated AI</span> will provide
              you with a team fit percentage between you and Kata.
            </p>
            <button
              className="button mt-3"
              onClick={() => setGameStarted(true)}
            >
              <span className="button-text">Let's start</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button>
          </>
        ) : gameFinished ? (
          aiProcessing ? (
            <div>
              <div className="d-flex justify-content-center">
                <div className="lds-ellipsis">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <h5>
                Thank you! <br />
                The <span className="red">AI</span> is working really hard...{" "}
                <span className="red">beep... boop...</span>
              </h5>
            </div>
          ) : (
            <div>
              <h1 className="percentage">{finishes[randomIndex].score}%</h1>
              <h4>{finishes[randomIndex].finishTitle}</h4>
              <div className="row mt-4">
                <div className="col-12 col-sm-6 text-center mt-4">
                  <button className="button" onClick={restartGame}>
                    <span className="button-text">Restart</span>
                    <span className="button-icon fa fa-refresh"></span>
                  </button>
                </div>
                <div className="col-12 col-sm-6 text-center mt-4">
                  <button
                    className="button no-icon"
                    onClick={() =>
                      (window.location = "mailto:farkaskata99@gmail.com")
                    }
                  >
                    <span className="button-text">Get in contact</span>
                  </button>
                </div>
              </div>
            </div>
          )
        ) : (
          <div
            style={{ opacity: opacity, transition: "opacity 0.3s ease-in-out" }}
          >
            {randomizedQuestions[questionIndex] && (
              <h5>
                {`${questionIndex + 1} / 10 - ${
                  randomizedQuestions[questionIndex].question
                }`}
              </h5>
            )}

            <div className="row">
              <div className="col-12 col-sm-6 text-center mt-4">
                <button className="button  no-icon" onClick={nextQuestion}>
                  <span className="button-text">Nope</span>
                </button>
              </div>
              <div className="col-12 col-sm-6 text-center mt-4">
                <button className="button game-yes" onClick={nextQuestion}>
                  <span className="button-text">Yes</span>
                  <span className="button-icon fa fa-check"></span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Game;
