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

    if (playerChoice == compChoice) {
        roundWinner = 'TIE';
        console.log (roundWinner + ' its a tie');
    }
    else if (winCondtions[playerChoice] == compChoice) {
        playerScore++;
        roundWinner = 'player';
        console.log (roundWinner + ' wins')
    }
    else {
        compScore++
        roundWinner = 'comp'
        console.log (roundWinner + ' wins');
    }
    return roundWinner;

 
    
}

function playGame() {
    for (let i = 0; i < 5; i++) { 
        const playerChoice = getPlayerChoice(); // 2nd re-creation (line 30)- no global var)
        if (playerChoice === null) { // If player cancels, end the game
            console.log("Game canceled.");
            return; // Exit the function early
        }

        const compChoice = getCompChoice(); 
        console.log("Computer chose: " + compChoice); 

        playRound(playerChoice, compChoice); 

        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + compScore);
    }

    if (playerScore > compScore) {
        console.log("Player wins the game!");
    } else if (compScore > playerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game is a tie!");
    }
}

playGame ();