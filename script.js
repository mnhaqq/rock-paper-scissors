let computerScore = userScore = 0;
let computerSelection, playerSelection, roundWinner;

const displayScore = document.querySelector('.display-score');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');


rock.addEventListener('click', () => handleClick('rock'));
paper.addEventListener('click', () => handleClick('paper'));
scissors.addEventListener('click', () => handleClick('scissors'));

const gameScore = document.createElement('div');
const roundStatus = document.createElement('div');
displayScore.appendChild(roundStatus);
displayScore.appendChild(gameScore);

initializeUI();


function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    return (num === 1) ? "rock" : (num === 2) ? "paper" : "scissors";
}

function singleRound(playerSelection, computerSelection) {
    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
            roundStatus.innerText = `You win! ${playerSelection} beats ${computerSelection}`;
            return 'Player';
    } else if (playerSelection === computerSelection) {
        roundStatus.innerText = 'Tie';
        return 0;
    } else {
        roundStatus.innerText = `You lose! ${computerSelection} beats ${playerSelection}`;
        return 'Computer';
    } 
}

function initializeUI() {
    computerScore = userScore = 0;
    gameScore.textContent = `Score:: User: ${userScore} | Computer: ${computerScore}`;
}

function updateUI() {
    if (userScore === 5) roundStatus.textContent = 'YOU WIN!'; 
    else if (computerScore === 5) roundStatus.textContent = 'COMPUTER WINS!';

    if (userScore === 5 || computerScore === 5) initializeUI();

    gameScore.textContent = `Score:: User: ${userScore} | Computer: ${computerScore}`;
}

function handleClick(choice) {
    computerSelection = getComputerChoice()
    playerSelection = choice;

    roundWinner = singleRound(playerSelection, computerSelection);

    if (roundWinner === 'Player') userScore++;
    else if (roundWinner === 'Computer') computerScore++;

    updateUI();
}
