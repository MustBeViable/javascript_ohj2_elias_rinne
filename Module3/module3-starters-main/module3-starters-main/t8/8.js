'use strict';

const button = document.querySelector('#start');

button.addEventListener('click', function() {
  let num11 = document.querySelector('#num1');
  let num21 = document.querySelector('#num2');
  let num1 = parseFloat(num11.value);
  let num2 = parseFloat(num21.value);
  let option = document.getElementById('operation');
  let calculation = option.value;
  let result = document.querySelector('#result');
  let results;
  if (calculation === 'add') {
    result.textContent = (num1 + num2);
  } else if (calculation === 'sub') {
    results = (num1 - num2);
    result.textContent = results;
  } else if (calculation === 'multi') {
    result.textContent = (num1 * num2);
  } else {
    result.textContent = (num1 / num2);
  }
});
