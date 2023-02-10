const winGame = `You win!`;
const loseGame = `You lose!`;
const tieGame = `It's a tie!`;
const tittle = document.querySelector("#tittle-1");
let playerWin = 0;
let compWin = 0;

const buttonStyle = {
  backgroundColor: "#3498DB",
  color: "white",
  borderRadius: "10px",
  padding: "10px 20px",
  margin: "0.8rem",
  cursor: "pointer",
  width: "100px",
};

const bodyStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const buttonsStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const tittleStyle = {
  textAlign: "center",
  fontSize: "48px",
  color: "#3498DB",
  margin: "40px",
};

const restartButtonStyles = {
  backgroundColor: "#4CAF50",
  color: "white",
  padding: "15px 32px",
  textAlign: "center",
  fontSize: "16px",
  margin: "4px 2px",
  cursor: "pointer",
  borderRadius: "10px",
};

const buttons = document.createElement("div");
buttons.classList.add("buttons");

const rockButton = document.createElement("button");
rockButton.textContent = "Rock";
rockButton.value = "rock";
rockButton.id = "rock";
Object.assign(rockButton.style, buttonStyle);
buttons.appendChild(rockButton);

const paperButton = document.createElement("button");
paperButton.textContent = "Paper";
paperButton.value = "paper";
paperButton.id = "paper";
Object.assign(paperButton.style, buttonStyle);
buttons.appendChild(paperButton);

const scissorsButton = document.createElement("button");
scissorsButton.textContent = "Scissors";
scissorsButton.value = "scissors";
scissorsButton.id = "scissors";
Object.assign(scissorsButton.style, buttonStyle);
buttons.appendChild(scissorsButton);

document.body.appendChild(buttons);

Object.assign(document.body.style, bodyStyle);
Object.assign(tittle.style, tittleStyle);
Object.assign(buttons.style, buttonsStyle);

function computerPlay() {
  const gameWords = [`Rock`, "Paper", "Scissors"];
  return gameWords[Math.floor(Math.random() * gameWords.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return tieGame;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return winGame;
  } else {
    return loseGame;
  }
};

function handleSelection(e) {
  const playerSelection = e.target.value;
  const computerSelection = computerPlay();
  const result = playRound(playerSelection, computerSelection);

  const resultDisplay = document.querySelector("#result");
  if (result === winGame) {
    resultDisplay.style.color = "#2ECC71";
  } else if (result === loseGame) {
    resultDisplay.style.color = "#E74C3C";
  } else if (result === tieGame) {
    resultDisplay.style.color = "#F1C40F";
  }
  resultDisplay.innerHTML = `Round: ${result} <br> Player chose ${playerSelection}. Computer chose ${computerSelection}.`;

  if (result === winGame) {
    playerWin++;
  } else if (result === loseGame) {
    compWin++;
  }

  const scoreDisplay = document.querySelector("#score");
  scoreDisplay.innerHTML = `Player: ${playerWin} | Computer: ${compWin}`;

  if (playerWin === 5) {
    resultDisplay.innerHTML = "Winner, Winner, Winner! Congratulations!";
    tittle.innerHTML = `Congrats, You won the game! &#128512;`;
    deactivateButtons();
    restartGame();
  } else if (compWin === 5) {
    resultDisplay.innerHTML = "Computer wins the game. Better luck next time.";
    tittle.innerHTML = `Ohh Sorry, You loose &#128531;`;
    deactivateButtons();
    restartGame();
  }
}

function deactivateButtons() {
  rockButton.removeEventListener("click", handleSelection);
  paperButton.removeEventListener("click", handleSelection);
  scissorsButton.removeEventListener("click", handleSelection);
  rockButton.style.backgroundColor = "#A9A9A9";
  rockButton.style.cursor = "default";
  paperButton.style.backgroundColor = "#A9A9A9";
  paperButton.style.cursor = "default";
  scissorsButton.style.backgroundColor = "#A9A9A9";
  scissorsButton.style.cursor = "default";
}

function restartGame() {
  const restartButton = document.createElement("button");
  restartButton.textContent = "Restart";
  restartButton.value = "restart";
  restartButton.id = "restart";

  Object.assign(restartButton.style, restartButtonStyles);
  buttons.appendChild(restartButton);

  restartButton.addEventListener("click", () => {
    playerWin = 0;
    compWin = 0;
    resultDisplay.innerHTML = "";
    rockButton.addEventListener("click", handleSelection);
    rockButton.style.backgroundColor = "#4CAF50";
    rockButton.style.cursor = "pointer";
    paperButton.addEventListener("click", handleSelection);
    paperButton.style.backgroundColor = "#2196F3";
    paperButton.style.cursor = "pointer";
    scissorsButton.addEventListener("click", handleSelection);
    scissorsButton.style.backgroundColor = "#f44336";
    scissorsButton.style.cursor = "pointer";
    tittle.textContent = "Good luck this time, You can make it! :D";
    resultDisplay.innerHTML = "";
    scoreDisplay.innerHTML = "";

    restartButton.remove();
  });
}
rockButton.addEventListener("click", handleSelection);
paperButton.addEventListener("click", handleSelection);
scissorsButton.addEventListener("click", handleSelection);

const scoreDisplay = document.createElement("p");
scoreDisplay.id = "score";
scoreDisplay.innerHTML = "Player: 0 | Computer: 0";
document.body.appendChild(scoreDisplay);

const resultDisplay = document.createElement("p");
resultDisplay.id = "result";
resultDisplay.innerHTML = "Make your move!";
document.body.appendChild(resultDisplay);

function capitalizeFirstLetter(wordSelected) {
  return wordSelected.charAt(0).toUpperCase() + wordSelected.slice(1);
}