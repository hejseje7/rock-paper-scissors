function getRandomInt() {
    return Math.floor(Math.random() * 3+1);
}

let playerSelection, computerSelection, playerpoints=0, computerpoints=0

function computerPlay() {
    if (getRandomInt()===1) {
        computerSelection="rock";
    }
    else if (getRandomInt()===2) {
        computerSelection="paper";
    }
    else {
        computerSelection="scissor";
    };
}

function round() {
    computerPlay();
    playerSelection=prompt("Rock, Paper or scissor?: ");
    if (!(playerSelection.toLowerCase()==="rock" || playerSelection.toLowerCase()==="paper" || playerSelection.toLowerCase()==="scissor")) {
        console.log("Error, "+playerSelection+" is not an option");
    }
    else if ((playerSelection.toLowerCase()==="rock" && computerSelection==="scissor") || (playerSelection.toLowerCase()==="paper" && computerSelection==="rock") || (playerSelection.toLowerCase()==="scissor" && computerSelection==="paper")) {
        console.log("The computer has choosen "+computerSelection);
        console.log("The player has choosen "+playerSelection.toLowerCase());
        console.log("Player has won this round");
        playerpoints=++playerpoints;
        console.log(playerpoints);
    }
    else if (playerSelection.toLowerCase()===computerSelection) {
        console.log("The computer has choosen "+computerSelection);
        console.log("The player has choosen "+playerSelection.toLowerCase());
        console.log("It's a tie");
    }
    else {
        console.log("The computer has choosen "+computerSelection);
        console.log("The player has choosen "+playerSelection.toLowerCase());
        console.log("Computer has won this round");
        computerpoints=++computerpoints;
        console.log(computerpoints);
    }
}

function game() {
    round();
    round();
    round();
    round();
    round();
    if (playerpoints>computerpoints) {
        console.log("Player has won with "+playerpoints+" points, while computer got "+computerpoints+" points.");
    }
    else if (computerpoints>playerpoints) {
        console.log("Computer has won with "+computerpoints+" points, while player got "+playerpoints+" points.")
    }
    else {
        console.log("The game ended in a tie")
    }
}

game()