'use strict';

const form = document.querySelector('#source');

const first_name = document.querySelector('input[name="firstname"]');
const last_name = document.querySelector('input[name="lastname"]');
const print = document.querySelector('#target');
form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  print.textContent = `Your name is ${first_name.value} ${last_name.value}`;
});