function computerPlay () {
    let choice;
    
    switch(Math.floor(Math.random() *10)) {
        case 0:         //They always choose Rock!
        case 1:        
        case 2:
        case 3:
        choice ="Rock"
        break;
        
        case 4:
        case 5:
        case 6:
        choice ="Paper"
            break;
        
        case 7:
        case 8:
        case 9:
        choice ="Scissors"
            break;
    }
    return choice;
}

function playOneRound (playerSelection,) {
    //Refresh If You want to start a new Game
    if (playerScore == 5 || computerScore == 5){
        return;
    }

    const computerSelection = computerPlay();
    
    //Input Insenitivity + Check
    playerSelection = playerSelection.toLowerCase()
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    console.assert(playerSelection == "Rock" ||playerSelection =="Paper"||playerSelection =="Scissors",  "Input was invalid")
    
    //Output UI
    selectionField.textContent = "You chose: " + playerSelection + " | The Computer chose: " + computerSelection;

    //Match Review
    let endResult = matchReview(playerSelection, computerSelection);
    if (playerScore == 5 || computerScore == 5) {
        const winnerField = document.createElement("p");
        winnerField.textContent = endResult;
        document.getElementById("result").appendChild(winnerField)
    }
}

function matchReview(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        resultField.textContent = "It's a Tie!";
    }
    //Computer-Win conditions
    else if ((computerSelection == "Rock" && playerSelection == "Scissors")||
        (computerSelection == "Scissors" && playerSelection == "Paper")||
            computerSelection == "Paper" && playerSelection == "Rock") {
            resultField.textContent = `You lose! ${computerSelection} beats ${playerSelection}!`;
            computerScore++;
            computerScoreField.textContent =  `ComputerScore: ${computerScore}`;
            return ("The Computer wins the Game!");
            }
    else {
        resultField.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
        playerScore++;
        playerScoreField.textContent =  `PlayerScore: ${playerScore}`;
        return ("You win the Game!")
    }
}

let playerScore = 0;
let computerScore = 0;

const selectionField = document.createElement("p");
selectionField.textContent = " ";
document.getElementById("result").appendChild(selectionField);

const resultField = document.createElement("p");
resultField.textContent = " ";
document.getElementById("result").appendChild(resultField);

const playerScoreField = document.createElement("p");
playerScoreField.textContent =  `PlayerScore: ${playerScore}`;
document.getElementById("div1").appendChild(playerScoreField);

const computerScoreField = document.createElement("p");
computerScoreField.textContent =  `ComputerScore: ${computerScore}`;
document.getElementById("div1").appendChild(computerScoreField);

document.getElementById("rockbtn").addEventListener("click", () => {playOneRound("rock")});
document.getElementById("paperbtn").addEventListener("click", () => {playOneRound("paper")});
document.getElementById("scissorsbtn").addEventListener("click", () => {playOneRound("scissors")});