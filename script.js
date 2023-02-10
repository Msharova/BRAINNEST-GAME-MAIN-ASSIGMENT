function computerPlay(){
    const gameWords =[`Rock`, `Paper`, `Scissors`]; 
    return gameWords[Math.floor(Math.random() * gameWords.length)];
}

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

function game(roundCount){
    let playerWin = 0;
    let compWin = 0;

    for (let i = 0; i<roundCount; i++) {
        const questionForPlayer = prompt(`Let's play! Write down "Rock", "Paper" or "Scissors"`);
        const playerSelection = questionForPlayer.toLowerCase();
        const computerSelection = computerPlay().toLowerCase();

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

function capitalizeFirstLetter(wordSelected){
    return wordSelected.charAt(0).toUpperCase() + wordSelected.slice(1);
}

let winGame = `You win!`;
let loseGame = `You lose!`;
let tieGame = `It's a tie!`;
let noGame = `You don't want to play?`

game(5);


