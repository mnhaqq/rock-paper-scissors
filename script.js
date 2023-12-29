function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    
    return (num === 1) ? "rock" : (num === 2) ? "paper" : (num === 3) ? "scissors" : null;
}

function singleRound(playerSelection, computerSelection) {

    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            return 'Player';
    } else if (playerSelection === computerSelection) {
        console.log('Tie')
        return 0;
    } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return 'Computer';
    } 
}

function game() {
    let roundWinner;
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i+1}`);

        playerSelection = prompt("Rock, paper, scissors").toLowerCase();
        while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
            playerSelection = prompt("Invalid Input! Choose: Rock, paper, scissors").toLowerCase();
        }
        computerSelection = getComputerChoice();

        roundWinner = singleRound(playerSelection, computerSelection);
        if (roundWinner === 'Player') {
            userScore++;
        } else if (roundWinner === 'Computer') {
            computerScore++;
        } else {
            i--;
        }
    }
}

let computerScore = userScore = 0;
let computerSelection, playerSelection;

game()

console.log(`FINAL SCORE: User:${userScore}, Computer:${computerScore}`)
if (computerScore > userScore) {console.log('YOU LOSE');}
else {console.log('YOU WIN');}