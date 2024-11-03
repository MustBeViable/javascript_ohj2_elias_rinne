'use strict';

let numbers = [];

let ask = 0;

while (ask < 5) {
  ask += 1;
  numbers.push(prompt(`Give ${ask}. number.`));
}

console.log(`Test print of list: ${numbers}`)

for (let i = 0; i < ask; i++) {
  console.log(numbers[ask-i-1]);
}