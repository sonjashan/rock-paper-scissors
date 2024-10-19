'use strict';

function getComputerChoice() {
    let num = Math.floor(Math.random() * 10);
    if (num > 6) return `Rock`;
    else if (num > 3) return `Paper`;
    else return `Scissors`;
}
// console.log(getComputerChoice());

function getHumanChoice() {
    let msg = `Please enter 'Rock' or 'Paper' or 'Scissors'!
Or enter 'Random' for a random choice!`;
    let input = prompt(msg, 'Random');
    input = input.toLowerCase();

    if (input === 'rock') {
        return 'Rock';
    } else if (input.slice(0, 5) === 'paper') {
        return 'Paper';
    } else if (input[0] === 's') {
        return 'Scissors';
    } else {
        console.log(`Generating random choice for human...`);
        return getComputerChoice();
    }
}
// console.log(getHumanChoice());

let humanScore, computerScore;


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

function playGame() {
    console.log(`We are playing a five round game!`);

    humanScore = computerScore = 0;
    let output;
    output = playRound(getComputerChoice(), getHumanChoice());
    console.log(output);
    output = playRound(getComputerChoice(), getHumanChoice());
    console.log(output);
    output = playRound(getComputerChoice(), getHumanChoice());
    console.log(output);
    output = playRound(getComputerChoice(), getHumanChoice());
    console.log(output);
    output = playRound(getComputerChoice(), getHumanChoice());
    console.log(output);

    let result = `Congratulations! `;
    if (humanScore > computerScore) result = result.concat(`Human Wins!`);
    else if (humanScore < computerScore) result += `Computer Wins!`;
    else result = result.concat(`No one lost!`);
    return result;
}

console.log(playGame());