let humanscore = 0
let compscore = 0

function getComputerChoice () {
    const choice = ["rock", "paper", "scissors"]
    const randomIndex = Math.floor(Math.random() * choice.length)
    return choice[randomIndex]

}

function getHumanChoice () {
    
}
console.log (getComputerChoice())

