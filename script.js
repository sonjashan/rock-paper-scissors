'use strict';

function getComputerChoice() {
    let num = Math.floor(Math.random() * 10);
    if (num > 6) return `Rock`;
    else if (num > 3) return `Paper`;
    else return `Scissors`;
}
console.log(getComputerChoice());