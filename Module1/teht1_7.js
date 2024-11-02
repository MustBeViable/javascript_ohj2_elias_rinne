'use strict';
let amount = +prompt('How many dices would you like to throw?');

let throws = 0;

let result = 0;

while (throws <= amount) {
  result += Math.floor(Math.random() * 6) + 1;
  throws += 1;
}

document.querySelector(
    '#target').innerHTML = `You threw ${amount} dices and got ${result} as result.`;