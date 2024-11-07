'use strict';

const button = document.querySelector('#start');

button.addEventListener('click', function() {
  let calculation = document.querySelector('#calculation');

  let p = document.querySelector('#result');

  let calc = calculation.value;
  console.log(calc);

  let num1, num2;
  const numbers = calc.split(' ');
  num1 = parseFloat(numbers[0]);
  num2 = parseFloat(numbers[2]);
  if (calc.includes('+')) {
    console.log('add');
    p.textContent = `${num1 + num2}`;
  } else if (calc.includes('-')) {
    console.log('sub');
    p.textContent = `${num1 - num2}`;
  } else if (calc.includes('/')) {
    console.log('div');
    p.textContent = `${num1 / num2}`;
  } else if (calc.includes('*')) {
    console.log('multi');
    p.textContent = `${num1 * num2}`;
  } else {
    p.textContent = 'Wrong input';
  }
});