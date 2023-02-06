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
//globals
let winGame = `You win!`;
let loseGame = `You lose!`;
let tieGame = `It's a tie!`;
let noGame = `You don't want to play?`

game(5);


