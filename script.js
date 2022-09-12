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
    const computerSelection = computerPlay();
    //Input Insenitivity + Check
    playerSelection = playerSelection.toLowerCase()
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    console.assert(playerSelection == "Rock" ||playerSelection =="Paper"||playerSelection =="Scissors",  "Input was invalid")
    
    //Output UI
    console.log("You choose: " + playerSelection);
    console.log("The Computer choose: " + computerSelection);

    //Match Review
    let result = matchReview(playerSelection, computerSelection);
    if (playerScore == 5 || computerScore == 5) {alert(result);}
}

function matchReview(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("It's a Tie!")
    }
    //Computer-Win conditions
    else if ((computerSelection == "Rock" && playerSelection == "Scissors")||
        (computerSelection == "Scissors" && playerSelection == "Paper")||
            computerSelection == "Paper" && playerSelection == "Rock") {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}!`)
            computerScore++;
            computerScoreField.textContent =  `ComputerScore: ${computerScore}`;
            return ("The Computer wins!");
            }
    else {
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
        playerScore++;
        playerScoreField.textContent =  `PlayerScore: ${playerScore}`;
        return ("You win!")
    }
}

let playerScore = 0;
let computerScore = 0;

const playerScoreField = document.createElement("p");
playerScoreField.textContent =  `PlayerScore: ${playerScore}`;
document.getElementById("div1").appendChild(playerScoreField);

const computerScoreField = document.createElement("p");
computerScoreField.textContent =  `ComputerScore: ${computerScore}`;
document.getElementById("div1").appendChild(computerScoreField);

document.getElementById("rockbtn").addEventListener("click", () => {playOneRound("rock")});
document.getElementById("paperbtn").addEventListener("click", () => {playOneRound("paper")});
document.getElementById("scissorsbtn").addEventListener("click", () => {playOneRound("scissors")});
