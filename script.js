const options = document.querySelectorAll('.options')
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const roundResult = document.querySelector('#roundResults');
const finalResults = document.querySelector('#finalResults');
const score = document.querySelector('#score');
const playAgainButton = document.querySelector('.playAgain')

let playerScore = 0;
let computerScore = 0;


// Randomly returns either 'rock', 'paper', or 'scissors'
function computerPlay() {
    let val = Math.floor(Math.random() * 3) + 1;

    if(val === 1){
        return "rock";
    }
    else if(val === 2){
        return "paper";
    }
    else{
        return "scissors";
    }
}

// Plays a single round of Rock Paper Scissors and
// returns a string that declares winner of round
function playRound(playerSelection, computerSelection){
    let player = playerSelection;
    let computer = computerSelection;

    let result = "";
    if(player == computer){
        result = "You Tie!";
    }
    else if ( (computer == "rock" && player == "scissors") ||
    (computer == "paper" && player == "rock") ||
    (computer == "scissors" && player == "paper") ){
        result = "You lost this round! " + computer + " beats " + player;
        ++computerScore;

    }
    else{
        result = "You win this round! " + player + " beats " + computer;
        ++playerScore;
    }
        return result;
}

function isGameOver(){
    if(playerScore === 5 || computerScore === 5){
        return true;
    }
}

function printFinalResults(){
    return playerScore > computerScore ? finalResults.textContent = "You win!" :
        finalResults.textContent = "Computer wins!";
}

function restartGame(){
    playAgainButton.style.visibility = 'visible';
    playAgainButton.addEventListener('click', () => {
        window.location.reload();
    });

}

// plays a 5 round game that keeps score and reports a winner or loser at the end
function game(e){
    let player, result;
    if(isGameOver()){
        printFinalResults();
        return;
    }

    player = e.target.id;
    result = playRound(player, computerPlay());
   

    roundResults.textContent = result;
    score.textContent = `Player's score: ${playerScore}  \u00a0 Computer's score: ${computerScore}`;
    

    if(isGameOver()){
        printFinalResults();
        restartGame();
        return;
    }

}

function startGame(){
    options.forEach((button) => {
        button.addEventListener('click', game);
    });
}

startGame();
