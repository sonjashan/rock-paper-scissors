'use strict';

function getComputerChoice() {
    let num = Math.floor(Math.random() * 10);
    if (num > 6) return `Rock`;
    else if (num > 3) return `Paper`;
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

let counter = 5;
console.log(`We are playing a ${counter} round game!`);
let humanScore, computerScore, humanChoice, output;
humanScore = computerScore = 0;
let endEvent = new CustomEvent('gameover');

let rockBtn = document.createElement("button");
rockBtn.textContent = "Rock";
let paperBtn = document.createElement("button");
paperBtn.textContent = "Paper";
let ScissorsBtn = document.createElement("button");
ScissorsBtn.textContent = "Scissors";
document.body.appendChild(rockBtn);
document.body.appendChild(paperBtn);
document.body.appendChild(ScissorsBtn);

let btns = document.querySelectorAll("button");
btns.forEach(function (button) {
    button.addEventListener("click", function (e) {
        humanChoice = e.target.textContent;
        output = playRound(getComputerChoice(), humanChoice);
        console.log(output);
        counter--;
        if (!counter) {
            document.body.dispatchEvent(endEvent);
        }
    });
});

document.body.addEventListener("gameover", function () {
    let result = `Congratulations! `;
    if (humanScore > computerScore) result = result.concat(`Human Wins!`);
    else if (humanScore < computerScore) result += `Computer Wins!`;
    else result = result.concat(`No one lost!`);
    console.log(result);
});


