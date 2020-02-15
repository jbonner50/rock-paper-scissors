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
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 500)
}


function lose(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(computerChoice)}${smallCompWord} beats ${convertToWord(userChoice)}${smallUserWord}. You lose!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 500)

}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a draw!`;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 500)


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
    rock_div.addEventListener('click', () => game('r'));
    paper_div.addEventListener('click', () => game('p'));
    scissors_div.addEventListener('click', () => game('s'));
}

main();

