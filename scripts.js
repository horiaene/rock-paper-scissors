function computerPlay() {   //computer chooses
    let variants = ["Rock", "Paper", "Scissors"];
    let computerChoice = variants[Math.floor(Math.random() * variants.length)];
    return computerChoice;
}

function playRound(playerSelection, computerSelection) { //one round
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        let result = "Tie!";
        return result;
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS" ) {
        let result = "You win!";
        return result;
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER" ) {
        let result = "You lose!";
        return result;
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS" ) {
        let result = "You lose!";
        return result;
    } else if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK" ) {
        let result = "You win!";
        return result;
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK" ) {
        let result = "You lose!";
        return result;
    } else if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER" ) {
        let result = "You win!";
        return result;
}
}

function game() { //one game of five rounds
    //set initial score
    let playerScore = 0;
    let computerScore = 0;
    //repeat function - WIP
        for (let i = 0; i < 5; i++) { //repeat following code 5 times
            let playerSelection = prompt("What is your selection?"); //check user choice
            let computerSelection = computerPlay(); //check computer choice
            let roundResult = playRound(playerSelection, computerSelection); //get the result of one round
                if (roundResult === ("You win!")) { //add one point to user if user wins
                    playerScore = playerScore + 1;
                    alert(`Player score: ${playerScore}, computer score: ${computerScore}.`)
                } else if (roundResult === ("You lose!")) { //add one point to CPU if CPU wins
                    computerScore = computerScore +  1;
                    alert(`Player score: ${playerScore}, computer score: ${computerScore}.`)
                } else if (roundResult === ("Tie!")) { //add one point to CPU if CPU wins
                    computerScore = computerScore +  1;
                    alert(`Player score: ${playerScore}, computer score: ${computerScore}.`)

    }
}
    let score = `Player score: ${playerScore}, computer score: ${computerScore}.`;
    return score;
}   
console.log(game());
