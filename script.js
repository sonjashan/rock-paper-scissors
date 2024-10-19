'use strict';

function getComputerChoice() {
    let num = Math.floor(Math.random() * 10);
    if (num > 6) return `Rock`;
    else if (num > 3) return `Paper`;
    else return `Scissors`;
}
// console.log(getComputerChoice());

function getHumanChoice() {
    let msg = `Please enter 
    'r' for Rock or 
    'p' for Paper or 
    's' for Scissors or
    'x' for a random choice!`;
    let input = prompt(msg, 'x');
    if (input === 'r') {
        return 'Rock';
    } else if (input === 'p') {
        return 'Paper';
    } else if (input === 's') {
        return 'Scissors';
    } else return getComputerChoice();
}
// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

let computer = getComputerChoice();
let human = getHumanChoice();

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

let result;
result = `Human chose ${human} and computer chose ${computer}.
${humanScore} to ${computerScore} `;
if (humanScore > computerScore) result = result.concat(`Human Wins!`);
else if (humanScore < computerScore) result += `Computer Wins!`;
else result = result.concat(`No one lost!`);

console.log(result);