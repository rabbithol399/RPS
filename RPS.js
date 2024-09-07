let playerScore = 0
let compScore = 0
let roundWinner = ''

function getCompChoice () {
    const validChoices = ["rock", "paper", "scissors"]
    const randomChoice = Math.floor(Math.random() * validChoices.length)
    return validChoices[randomChoice]
}

function getPlayerChoice () {
    const validChoices = ["rock", "paper", "scissors"]
    let validAnswer;  //must be outside of its own loop-'let' (var) repeat self, 'if'/'while' so on
    do {
        validAnswer = prompt("play thoust finest hand").toLowerCase();
        if (validAnswer === null) {
            return null;
        }

        if (validAnswer !== "rock" && validAnswer !== "paper" && validAnswer !== "scissors") {
            alert("THREE damn choices buddy, rock, paper, or scissors");
        }
    } while (!validChoices.includes(validAnswer));
    return validAnswer;
    
    }


function playRound (playerChoice, compChoice) {
    playerChoice = playerChoice.toLowerCase ()
    compChoice = compChoice.toLowerCase ()
    
    const winCondtions = {
      rock: 'scissors',
      paper: 'rock',
      scissors: 'paper'

    };
    let roundWinner;

    if (playerSelection === compSelection) {
        roundWinner = 'TIE';
        console.log (roundWinner);
    }
    if (winCondtions[playerSelection] == compSelection) {
        playerScore++;
        roundWinner = 'player';
        console.log (roundWinner)
    }
    else {
        compScore++
        roundWinner = 'comp'
        console.log (roundWinner);
    }
    return roundWinner;
    
}
const playerSelection = getPlayerChoice ()
const compSelection = getCompChoice ()

playRound(playerSelection, compSelection);

function playGame () {
    playRound ()
}


console.log (getCompChoice() + " was my choice")