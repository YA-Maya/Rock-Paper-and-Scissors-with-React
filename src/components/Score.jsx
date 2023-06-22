import React from "react";

const Score = ({ playerScore, computerScore }) => {
  return (
    <div id="score">
      <div id="player-score">
        <h2 className="player1">Player</h2>
        <p className="player-score">{playerScore}</p>
      </div>
      <div id="computer-score">
        <h2 className="player2">Computer</h2>
        <p className="player-score">{computerScore}</p>
      </div>
    </div>
  );
};

export default Score;
