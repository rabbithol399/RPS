function compchoice () {
    const validchoices = ["rock", "paper", "scissors"]
    const randomchoice = Math.floor(Math.random() * validchoices.length)
    return validchoices[randomchoice]
}
console.log (compchoice())

function herochoice () {
    const validchoices = ["rock", "paper", "scissors"]
    let validanswer;
    do {
        validanswer = prompt("play thoust finest hand").toLowerCase();
        if (validanswer === null) {
            return null;
        }

        if (validanswer !== "rock" && validanswer !== "paper" && validanswer !== "scissors") {
            alert("THREE damn choices buddy, rock, paper, or scissors");
        }
    } while (!validchoices.includes(validanswer));
    return validanswer;
    
    }


console.log (compchoice())
console.log (herochoice())