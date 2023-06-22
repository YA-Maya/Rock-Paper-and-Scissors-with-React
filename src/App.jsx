import React, { useState } from "react";
import "./App.css";
import Hand from "./components/Hand";
import Score from "./components/Score";
import Popup from "./components/Popup";

const App = () => {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const [showMatch, setShowMatch] = useState(false);
  const [winnerText, setWinnerText] = useState("");
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  const startGame = () => {
    setShowIntro(false);
    setShowMatch(true);
  };

  const playMatch = (choice) => {
    const computerOptions = ["rock", "paper", "scissors"];
    const computerNumber = Math.floor(Math.random() * 3);
    const computerChoice = computerOptions[computerNumber];

    setPlayerChoice(choice);
    setComputerChoice(computerChoice);

    setTimeout(() => {
      compareHands(choice, computerChoice);
    }, 2000);
  };

  const compareHands = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      setWinnerText("It is a tie");
      return;
    }

    if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      setWinnerText("Player Wins");
      setPlayerScore(playerScore + 1);
    } else {
      setWinnerText("Computer Wins");
      setComputerScore(computerScore + 1);
    }
  };

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handlePopupOpen = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handlePopupSkip = () => {
    // Handle skip action
    setShowPopup(false);
  };

  return (
    <section className={`games ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <button className={`mode-toggle ${isDarkMode ? "light" : "dark"}`} onClick={toggleMode}>
        Mode Switch
      </button>
      <Score playerScore={playerScore} computerScore={computerScore} />
      {showIntro && (
        <div className="intro">
          <h1>Rock, Paper and Scissors</h1>
          <button onClick={startGame}>Let's play</button>
        </div>
      )}
      {showPopup && <Popup onClose={handlePopupClose} onSkip={handlePopupSkip} />}
      {showMatch && (
        <div className="match fadeIn">
          <h1 className="winner">{winnerText}</h1>
          <div className="hands">
            <Hand choice={playerChoice} />
            <Hand choice={computerChoice} />
          </div>
          <div className="options">
            <button className="rock" name="rock" onClick={() => playMatch("rock")}>
              rock
            </button>
            <button className="paper" name="paper" onClick={() => playMatch("paper")}>
              paper
            </button>
            <button className="scissors" name="scissors" onClick={() => playMatch("scissors")}>
              scissors
            </button>
          </div>
        </div>
      )}
      {!showIntro && !showMatch && (
        <div>
          <button className="popup-button" onClick={handlePopupOpen}>
            login/sign up
          </button>
        </div>
      )}
    </section>
  );
};

export default App;
