import React from "react";
import Rock from "../assets/rock.png";
import Paper from "../assets/paper.png";
import Scissors from "../assets/scissors.png";

const Hand = ({ choice }) => {
  let imageSrc;

  if (choice === "rock") {
    imageSrc = Rock;
  } else if (choice === "paper") {
    imageSrc = Paper;
  } else if (choice === "scissors") {
    imageSrc = Scissors;
  }

  return <img src={imageSrc} width="150px" alt={choice} />;
};

export default Hand;
