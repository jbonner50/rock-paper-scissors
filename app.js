//caching the dom
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    var rand = Math.floor(Math.random() * 3);
    return choices[rand];
}

function convertToWord(letter) {
    if (letter === 'r') return "Rock";
    else if (letter === 'p') return "Paper";
    else return "Scissors";
}
function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`;

}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(computerChoice)}${smallCompWord} beats ${convertToWord(userChoice)}${smallUserWord}. You lose!`;

}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a draw!`;

}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        //user wins
        case "rs":
        case "pr":
        case "sp":
            //console.log("USER WINS");
            win(userChoice, computerChoice);
            break;
        //computer wins
        case "sr":
        case "rp":
        case "ps":
            //console.log("COMPUTER WINS");
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            //console.log("DRAW");
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    //add event listeners to the three buttons
    rock_div.addEventListener('click', function () {
        game('r');
    })

    paper_div.addEventListener('click', function () {
        game('p');
    })

    scissors_div.addEventListener('click', function () {
        game('s');
    })
}


main();

