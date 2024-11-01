'use strict';

let start_year = +prompt('Give star year.');

let end_year = +prompt('Give end year.');

const ul = document.createElement('ul');

let list_leap = [];

for (let leap = start_year; leap <= end_year; leap++) {
  if (leap % 4 === 0) {
    if (leap % 100 === 0) {
      if (leap % 400 === 0) {
        list_leap.push(leap);
      }
    } else {
      list_leap.push(leap);
    }
  }
}

for (let i = 0; i < list_leap.length; i++) {
  const li = document.createElement('li');
  li.textContent = list_leap[i].toString();
  ul.appendChild(li);
}

document.body.appendChild(ul);