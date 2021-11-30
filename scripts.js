let variants = ["Rock", "Paper", "Scissors"];
function computerPlay() {    
    let computerChoice = variants[Math.floor(Math.random() * variants.length)];
    return computerChoice;
}

let playerSelection = prompt("What is your selection?");
let computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
    // let win = "You win!";
    // let lose = "You lose!";
    // let tie = "It's a tie!"
    if (playerSelection === computerSelection) {
        let result = "Tie!";
        return result;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" ) {
        let result = "You win!";
        return result;
    } else if (playerSelection === "Rock" && computerSelection === "Paper" ) {
        let result = "You lose!";
        return result;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors" ) {
        let result = "You lose!";
        return result;
    } else if (playerSelection === "Paper" && computerSelection === "Rock" ) {
        let result = "You win!";
        return result;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock" ) {
        let result = "You lose!";
        return result;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper" ) {
        let result = "You win!";
        return result;
}
}
// let playerSelection = prompt("What is your selection?");
// let computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

function game() {
    //set initial score
    let playerScore = 0;
    let computerScore = 0;
    //repeat function - WIP
    for (let i = 0; i < 5; i++) {
    let roundResult = playRound(playerSelection, computerSelection);
    if (roundResult === ("You win!")) {
        playerScore = playerScore + 1;
    } else if (roundResult === ("You lose!")) {
        computerScore = computerScore + 1;
    }   
    let score = `Player score: ${playerScore}, computer score: ${computerScore}.`;
    return score;
}

}

console.log(game());