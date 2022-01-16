function getRandomInt() {
    return Math.floor(Math.random() * 3+1);
}

let playerSelection, computerSelection, playerpoints=0, computerpoints=0, gamecount=0;

function computerPlay() {
    if (getRandomInt()===1) {
        computerSelection="Rock";
    }
    else if (getRandomInt()===2) {
        computerSelection="Paper";
    }
    else {
        computerSelection="Scissor";
    };
}
const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", game));

function playerSelect(e) {
    if (e.path[1].id=="rock") {
        playerSelection="Rock";
    }
    else if (e.path[1].id=="paper") {
        playerSelection="Paper";
    }
    else {
        playerSelection="Scissor"
    };
    const div_you = document.querySelector(".you-choosed");
    const you_choose = document.querySelector(".you-choose");
    you_choose.removeChild(div_you);
    div_you.textContent=playerSelection;
    you_choose.appendChild(div_you);
}

function round () {
    computerPlay();
    const div_com = document.querySelector(".com-choosed");
    const computer_choose = document.querySelector(".computer-choose");
    computer_choose.removeChild(div_com);
    div_com.textContent=computerSelection;
    computer_choose.appendChild(div_com);
    if ((playerSelection=="Rock" && computerSelection=="Scissor") || (playerSelection=="Paper" && computerSelection=="Rock") || (playerSelection=="Scissor" && computerSelection=="Paper")) {
        console.log("The computer has choosen "+computerSelection);
        console.log("The player has choosen "+playerSelection.toLowerCase());
        console.log("Player has won this round");
        playerpoints=++playerpoints;
        gamecount=++gamecount;
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
        gamecount=++gamecount;
    }
    const div_you_points = document.querySelector(".you-points");
    const you_point = document.querySelector(".you-point");
    you_point.removeChild(div_you_points);
    div_you_points.textContent=playerpoints;
    you_point.appendChild(div_you_points);
    const div_com_points = document.querySelector(".com-points");
    const com_point = document.querySelector(".computer-point");
    com_point.removeChild(div_com_points);
    div_com_points.textContent=computerpoints;
    com_point.appendChild(div_com_points);
    if (computerpoints==5 || playerpoints==5) {
        game();
    }
    else {
        return;
    }
}
function game(e) {
    if (playerpoints==5) {
        const winner = document.querySelector(".winner");
        const body = document.querySelector(".winner-box");
        body.removeChild(winner);
        winner.textContent="You won!";
        body.appendChild(winner);
        return;
    }
    else if (computerpoints==5) {
        const winner = document.querySelector(".winner");
        const body = document.querySelector(".winner-box");
        body.removeChild(winner);
        winner.textContent="The computer won!";
        body.appendChild(winner);
        return
    }
    else {
        playerSelect(e);
        round();
    }
}

