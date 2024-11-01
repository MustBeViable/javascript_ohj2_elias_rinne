'use strict';
let num1, num2, num3;
num1 = +prompt('Give first number.');
num2 = +prompt('Give second number.');
num3 = +prompt('Give third number.');
const sum = num1 + num2 + num3;
const product = num1 * num2 * num3;
const average = (num1 + num2 + num3) / 3;
document.querySelector(
    '#target').innerHTML = `the sum of numbers is ${sum}, 
    product ${product} and average ${average}.`;