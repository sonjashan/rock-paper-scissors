'use strict';

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if (!num) return `Rock`;
    else if (num === 1) return `Paper`;
    else return `Scissors`;
}

function playRound(computer, human) {
    if (computer !== human) {
        if (computer === 'Rock') {
            if (human === 'Paper') {
                humanScore += 1;
            } else computerScore += 1;
        } else if (computer === 'Paper' && human === 'Scissors') {
            humanScore++;
        } else if (computer === 'Paper') computerScore++;
        else if (computer === 'Scissors') {
            if (human === 'Rock') humanScore++;
            else computerScore++;
        }
    }

    let result = `Human chose ${human} and computer chose ${computer}.
Current score is Human: ${humanScore} to Computer: ${computerScore}. `;
    return result;
}

let humanScore, computerScore, humanChoice, output, counter;
let endEvent = new CustomEvent('gameover');

function init() {
    counter = 5;
    console.log(`*New Game* We are playing a ${counter} round game!`);
    humanScore = computerScore = 0;
}

let rockBtn = document.createElement("button");
rockBtn.textContent = "Rock";
let paperBtn = document.createElement("button");
paperBtn.textContent = "Paper";
let scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "Scissors";
document.body.appendChild(rockBtn);
document.body.appendChild(paperBtn);
document.body.appendChild(scissorsBtn);

let btns = document.querySelectorAll("button");
btns.forEach(function (button) {
    button.addEventListener("click", function (e) {
        if (counter) {
            humanChoice = e.target.textContent;
            output = playRound(getComputerChoice(), humanChoice);
            console.log(output);
            counter--;
            if (!counter) {
                document.body.dispatchEvent(endEvent);
            }
        }
    });
});

init();
let newBtn = document.createElement("button");
newBtn.textContent = "New game!";
newBtn.addEventListener("click", init);
document.body.appendChild(newBtn);

document.body.addEventListener("gameover", function () {
    let result = `Congratulations! `;
    if (humanScore > computerScore) result = result.concat(`Human Wins!`);
    else if (humanScore < computerScore) result += `Computer Wins!`;
    else result = result.concat(`No one lost!`);
    console.log(result);
});


