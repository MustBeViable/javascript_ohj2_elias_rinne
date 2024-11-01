'use strict';

let year = prompt('Gib year pls.');

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      document.querySelector(
          '#target').innerHTML = `Year ${year} is leap year.`;
    } else {
      document.querySelector(
          '#target').innerHTML = `Year ${year} is not leap year.`;
    }
  } else {
    document.querySelector('#target').innerHTML = `Year ${year} is leap year.`;
  }
} else {
  document.querySelector(
      '#target').innerHTML = `Year ${year} is not leap year.`;
}