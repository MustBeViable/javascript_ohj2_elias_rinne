'use strict';

const roll_a_dice = (max_number) => {
  return Math.floor((Math.random() * max_number) + 1);
};


let max_eye_count = +prompt('Give a max amount of sides for dice')

let right_sum = false;

let unord = document.createElement('ul');

let num_of_roll = 1;

while (right_sum === false) {
  let num = roll_a_dice(max_eye_count);
  let li = document.createElement('li');
  li.textContent = `${num_of_roll}. throw was ${num}.`;
  unord.appendChild(li);
  num_of_roll++
  if (num === max_eye_count) {
    right_sum = true;
  }
}

document.body.appendChild(unord);