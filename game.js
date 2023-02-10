/* GLOBALS */
// Variables with the win/lose/tie messages, the tittle of the game and the scores for the player and computr
const winGame = `You win!`;
const loseGame = `You lose!`;
const tieGame = `It's a tie!`;
const tittle = document.querySelector("#tittle-1");

// initialize the scores to 0 for the player and the computer
let playerWin = 0;
let compWin = 0;

// initialize the styles for the game as objets
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

/* ADD BUTTONS IN DIVS*/

// create a div for the buttons
const buttons = document.createElement("div");
buttons.classList.add("buttons");

// create the rock, paper and scissors buttons and add them to the buttons div, besides adding them the styles
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

// Add the buttons div to the body
document.body.appendChild(buttons);

//Add some styles to the game
Object.assign(document.body.style, bodyStyle);
Object.assign(tittle.style, tittleStyle);
Object.assign(buttons.style, buttonsStyle);

/* COMPUTER'S SELECTION */

// function that returns a random selection of Rock, Paper or Scissors
function computerPlay() {
  const gameWords = [`Rock`, "Paper", "Scissors"];
  return gameWords[Math.floor(Math.random() * gameWords.length)];
}

/* COMPARE SELECTIONS */

// function that receives the player's and computer's selections and returns the result
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  // compare the selections and return the result with variables declared above with Fun texts
  // the function uses a conditional statement to compare the selections and return the result
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
}

/* BUTTONS CLICKS */

// function that handles the player selection and the result of the game
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
  resultDisplay.innerHTML = `Round:

${result} <br> Player chose ${playerSelection}. Computer chose ${computerSelection}.`;

  if (result === winGame) {
    playerWin++;
  } else if (result === loseGame) {
    compWin++;
  }

  const scoreDisplay = document.querySelector("#score");
  scoreDisplay.innerHTML = `Player: ${playerWin} | Computer: ${compWin}`;

  // this function updates the result and score displays, and deactivates the buttons with the funtcion deactivateButtons() when either the player or the computer has won 5 rounds
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

// Add event listeners to the rock, paper and scissors buttons
rockButton.addEventListener("click", handleSelection);
paperButton.addEventListener("click", handleSelection);
scissorsButton.addEventListener("click", handleSelection);

/* RESULTS DISPLAY */
const scoreDisplay = document.createElement("p");
scoreDisplay.id = "score";
scoreDisplay.innerHTML = "Player: 0 | Computer: 0";
document.body.appendChild(scoreDisplay);

const resultDisplay = document.createElement("p");
resultDisplay.id = "result";
resultDisplay.innerHTML = "Make your move!";
document.body.appendChild(resultDisplay);

/* CAPITALIZE FIRST LETTER */
function capitalizeFirstLetter(wordSelected) {
  return wordSelected.charAt(0).toUpperCase() + wordSelected.slice(1);
}

/* 
//globals
let winGame = `You win!`;
let loseGame = `You lose!`;
let tieGame = `It's a tie!`;
let noGame = `You don't want to play?`

function computerPlay(){
    //created an array of needed words
    const gameWords =[`Rock`, `Paper`, `Scissors`]; 
    //Math.floor - rounds down to the nearest integer
    //Math.random - gives the random number between 0 and 1
    //gamewords.lenght - the length of the array gameWords (will return 3)
    //then it means we multiply our random on 3 and now it shows randoms floats from 0 to 3
    //then we use Math.floor to round down to integers
    //then we return the index of the array
    return gameWords[Math.floor(Math.random() * gameWords.length)];
}
//the function of all game rounds that returns the result of the comparison
function playRound(playerSelection, computerSelection){    
    switch (playerSelection) {
        case `rock`:
            if (computerSelection === `paper`) return loseGame;
            if (computerSelection === `rock`) return tieGame;
            if (computerSelection === `scissors`) return winGame;
            break;
        case `paper` :
            if (computerSelection === `paper`) return tieGame;
            if (computerSelection === `rock`) return winGame;
            if (computerSelection === `scissors`) return loseGame;
            break;
        case `scissors`:
            if (computerSelection === `paper`) return winGame;
            if (computerSelection === `rock`) return loseGame;
            if (computerSelection === `scissors`) return tieGame;
            break;
        default: 
            return noGame;
    }
}
//firstly we define the counters and set it on 0
//then we do the loop of N games, where N is defined when we CALL for game() funcion
//then we define constants of what player and computer decided to input and lowercase them in order to compare
//then we add the console.log of round counts in the loop
//then we define result and place there a function that will count win/lose/tie and sends playerSelection and computerSelection parameters
//then we count win/lose
//after the loop we decide what to write in console depending on our score
function game(roundCount){
    let playerWin = 0;
    let compWin = 0;

    for (let i = 0; i<roundCount; i++) {
        const questionForPlayer = prompt(`Let's play! Write down "Rock", "Paper" or "Scissors"`);
        const playerSelection = questionForPlayer.toLowerCase();
        const computerSelection = computerPlay().toLowerCase();
        //const computerSelection = `paper`; //we need this only to control the situation

        console.log(`Round ${i+1}: Computer selected: ${capitalizeFirstLetter(computerSelection)}, you selected ${capitalizeFirstLetter(playerSelection)}`);

        let result = playRound(playerSelection,computerSelection);

        if (result === winGame) playerWin++;
        if (result === loseGame) compWin++;
    }
    if (playerWin>compWin){
        console.log(`You played ${roundCount} games, won ${playerWin}, lost ${compWin}. You are the winner!`);
    }
    else if(playerWin<compWin) {
        console.log(`You played ${roundCount} games, won ${playerWin}, lost ${compWin}. You are the looser!`);
    }
    else{
        console.log(`You played ${roundCount} games, won ${playerWin}, lost ${compWin}. It's a tie!`);
    }
}
//we use this function to capitalize only the first letter
function capitalizeFirstLetter(wordSelected){
    return wordSelected.charAt(0).toUpperCase() + wordSelected.slice(1);
}


game(5);

 */
