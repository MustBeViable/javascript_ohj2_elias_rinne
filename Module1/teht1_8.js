'use strict';

let start_year = +prompt('Give star year.');

let end_year = +prompt('Give end year.');

const ul = document.createElement('ul');

for (let year = start_year; year <= end_year; year++) {
  const li = document.createElement('li');
  li.textContent = year.toString();
  ul.appendChild(li);
}

document.body.appendChild(ul)