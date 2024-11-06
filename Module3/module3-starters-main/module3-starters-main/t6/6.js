'use strict';

const button = document.querySelector('button');

const alerter = (evt) => {
  alert('Button clickerered');
}

button.addEventListener('click', alerter);