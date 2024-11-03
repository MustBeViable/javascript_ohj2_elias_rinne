'use strict';

let list_of_numbers = [];

let number = +prompt('Give a number. If you want to stop, give 0.');

while (number !== 0) {
  list_of_numbers.push(number);
  number = +prompt('Give a number. If you want to stop, give 0.');
}

console.log(`Ei sortattu lista ${list_of_numbers}`);

list_of_numbers.sort((a, b) => b - a);

console.log(`Sortattu lista ${list_of_numbers}`)