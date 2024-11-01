'use strict';

let num = +prompt('Give a number');

let i = 0;

let prime = false;

if (num > 1) {
  prime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }
}

if (prime === true) {
  document.querySelector(
          '#target').innerHTML = `Number ${num} is prime number`
}

if (prime === false) {
  document.querySelector(
          '#target').innerHTML = `Number ${num} is not prime number`
}