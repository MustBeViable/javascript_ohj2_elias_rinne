'use strict';

let list_of_numbers = [];

let number = +prompt('Give a number.');

let loop_running = true;

while (loop_running === true) {
  if (list_of_numbers.includes(number) === true) {
    loop_running = false;
  } else {
    list_of_numbers.push(number);
    number = +prompt('Give a number.');
  }
}

list_of_numbers.sort((a, b) => a - b);

console.log(list_of_numbers)

for (let num of list_of_numbers) {
  console.log(num);
}