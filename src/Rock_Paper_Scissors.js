import React, { useState, useEffect } from "react";
import "./Rock_Paper_Scissors.css";
// faire un usestate pour chacun des h2
function Rock_Paper_Scissors() {
  const [computerChoice, setComputerChoice] = useState("");
  const [choice, setChoice] = useState("");
  const [result, setResult] = useState("");

  const HandleClick = (userChoice) => {
    setChoice(userChoice);
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
      setComputerChoice("Rock");
    }
    if (randomNumber === 2) {
      setComputerChoice("Paper");
    }
    if (randomNumber === 3) {
      setComputerChoice("Scissors");
    }
  };
  const getResult = () => {
    if (computerChoice === choice) {
      setResult("Draw");
    }
    if (computerChoice === "Rock" && choice === "Paper") {
      setResult("You win!");
    }
    if (computerChoice === "Rock" && choice === "Scissors") {
      setResult("You lost!");
    }
    if (computerChoice === "Paper" && choice === "Scissors") {
      setResult("You win!");
    }
    if (computerChoice === "Paper" && choice === "Rock") {
      setResult("You lose!");
    }
    if (computerChoice === "Scissors" && choice === "Rock") {
      setResult("You win!");
    }
    if (computerChoice === "Scissors" && choice === "Paper") {
      setResult("You lose!");
    }
  };
  useEffect(() => {
    getResult();
  }, [computerChoice, choice]);

  return (
    <div className="Rock_Paper_Scissors">
      <div className="Rock_Paper_Scissors_choices">
        <h2 className="Rock_Paper_Scissors_choice">
          Computer Choice:
          <span className="Rock_Paper_Scissors_text">{computerChoice} </span>
        </h2>

        <h2 className="Rock_Paper_Scissors_choice">
          Your Choice:<span className="Rock_Paper_Scissors_text">{choice}</span>
        </h2>
      </div>

      <h2 className="Rock_Paper_Scissors_result">
        Result: <span className="Rock_Paper_Scissors_text">{result}</span>
      </h2>
      <div className="Rock_Paper_Scissors_buttons">
        <button onClick={() => HandleClick("Rock")}>Rock </button>
        <button onClick={() => HandleClick("Paper")}>Paper </button>
        <button onClick={() => HandleClick("Scissors")}>Scissors </button>
      </div>
    </div>
  );
}

export default Rock_Paper_Scissors;
