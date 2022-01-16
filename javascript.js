function getRandomInt() {
    return Math.floor(Math.random() * 3+1);
}

let playerSelection, computerSelection, playerpoints=0, computerpoints=0, gamecount=0;

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


const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", game));

function playerSelect(e) {
    if (e.path[1].id=="rock") {
        playerSelection="rock";
    }
    else if (e.path[1].id=="paper") {
        playerSelection="paper";
    }
    else {
        playerSelection="scissor"
    };
    console.log(playerSelection);
}

function round () {
    computerPlay();
    if ((playerSelection==="rock" && computerSelection==="scissor") || (playerSelection==="paper" && computerSelection==="rock") || (playerSelection==="scissor" && computerSelection==="paper")) {
        console.log("The computer has choosen "+computerSelection);
        console.log("The player has choosen "+playerSelection.toLowerCase());
        console.log("Player has won this round");
        playerpoints=++playerpoints;
        gamecount=++gamecount
        console.log(playerpoints);
    }
    else if (playerSelection===computerSelection) {
        console.log("The computer has choosen "+computerSelection);
        console.log("The player has choosen "+playerSelection.toLowerCase());
        console.log("It's a tie");
        gamecount=++gamecount
    }
    else {
        console.log("The computer has choosen "+computerSelection);
        console.log("The player has choosen "+playerSelection.toLowerCase());
        console.log("Computer has won this round");
        computerpoints=++computerpoints;
        console.log(computerpoints);
        gamecount=++gamecount
    }
}
function game(e) {
    playerSelect(e);
    round();
    if (playerpoints>computerpoints) {
        console.log("Player has won with "+playerpoints+" points, while computer got "+computerpoints+" points.");
    }
    else if (computerpoints>playerpoints) {
        console.log("Computer has won with "+computerpoints+" points, while player got "+playerpoints+" points.")
    }
    else {
        console.log("The game ended in a tie")
    };
    console.log(gamecount);
}