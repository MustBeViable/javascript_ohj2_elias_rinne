'use strict';

let num_of_dices = +prompt('Give how many dices would you like to throw.');

let goal_eye_number = +prompt('Give sum of eye number you are trying to get.');

const test_throws = 1000000;

let successful_throws = 0;

let throws = 1;

while (throws <= test_throws) {
  let sum_of_eyes = 0;
  for (let dice_thrown = 1; dice_thrown <= num_of_dices; dice_thrown++) {
    sum_of_eyes += Math.floor(Math.random() * 6) + 1;
    if (sum_of_eyes === goal_eye_number) {
      successful_throws += 1;
    }
  }
  throws += 1;
}

document.querySelector('#target').innerHTML = `Your probability to get
 ${goal_eye_number} with ${num_of_dices} dices is 
 ${((successful_throws / test_throws) * 100).toFixed(2)} %.`;