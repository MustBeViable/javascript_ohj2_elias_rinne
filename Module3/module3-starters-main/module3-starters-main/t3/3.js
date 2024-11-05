'use strict';
const names = ['John', 'Paul', 'Jones'];

const ul = document.querySelector('#target');

for (name of names) {
  ul.innerHTML += `<li>${name}</li>`;
}