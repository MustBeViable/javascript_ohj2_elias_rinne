'use strict';
let ans = confirm('Should I calculate the square root?');

console.log(ans);

if (ans === true) {
  let num = +prompt('Give a number.');
  if (num > 0) {
    let num_sqrt = Math.sqrt(num);
    document.querySelector(
        '#target').innerHTML = `Square root of ${num} is ${num_sqrt}`;
  } else {
    document.querySelector(
        '#target').innerHTML = `You gave negative number which cannot have a square root.`;
  }
}