'use strict';

const roll_a_dice = () => {
  return Math.floor((Math.random() * 6) + 1);
};

let right_sum = false;

let unord = document.createElement('ul');

let num_of_roll = 1;

while (right_sum === false) {
  let num = roll_a_dice();
  let li = document.createElement('li');
  li.textContent = `${num_of_roll}. throw was ${num}.`;
  unord.appendChild(li);
  if (num === 6) {
    right_sum = true;
  }
}

document.body.appendChild(unord);