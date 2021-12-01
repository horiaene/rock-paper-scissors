function computerPlay() {   //computer's choice
    let variants = ["Rock", "Paper", "Scissors"];
    let computerChoice = variants[Math.floor(Math.random() * variants.length)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) { //one round
    let win = "win";
    let lose = "lose";
    let tie = "tie";
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return tie;
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS" ) {
        return win;
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER" ) {
        return lose;
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS" ) {
        return lose;
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK" ) {
        return win;
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK" ) {
        return lose;
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER" ) {
        return win;
}
}

function game() { //one game of five rounds
    //set initial score
    let playerScore = 0;
    let computerScore = 0;
    alert(`Welcome to a game of Rock, Paper, Scissors! Best out of 5 wins.`)
    //repeat function - WIP
        for (let i = 0; i < 5; i++) { //repeat following code 5 times
            let playerSelection = prompt("Rock, paper, scissors? What do you choose?"); //check user choice
            let computerSelection = computerPlay(); //check computer choice
            let roundResult = playRound(playerSelection, computerSelection); //get the result of one round
                if (roundResult === "win") { //add one point to user if user wins
                    playerScore = playerScore + 1;
                    alert(`Player wins! Player score: ${playerScore}, computer score: ${computerScore}.`)
                } else if (roundResult === "lose") { //add one point to CPU if CPU wins
                    computerScore = computerScore +  1;
                    alert(`Computer wins! Player score: ${playerScore}, computer score: ${computerScore}.`)
                } else if (roundResult === "tie") { //add one point to CPU if CPU wins
                    alert(`It's a tie! Player score: ${playerScore}, computer score: ${computerScore}.`)

    }
}
    //check score
    if (playerScore > computerScore) {
        alert(`Player wins!`)
    }  else if (playerScore === computerScore) {
        alert(`It's a tie!`)
    }  else if (playerScore < computerScore) {
        alert(`Computer wins! Skynet is boss`)
    }
    let score = `Player score: ${playerScore}, computer score: ${computerScore}.`;
    return score;

}

console.log(game());
let askRestart = prompt(`Play again?`);
if (askRestart.toUpperCase() === "YES" ) {
    game();
} else {
    alert(`Please come again!`)
}