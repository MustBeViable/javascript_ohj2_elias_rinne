'use strict';

let names_of_dogs = [];

let asks = 0;

while (asks < 6) {
  name = prompt('Give name of a dog.');
  names_of_dogs.push(name);
  asks++;
}

names_of_dogs.sort();

names_of_dogs.reverse();

let list = document.createElement('ul');

for (let name1 of names_of_dogs) {
  let li = document.createElement('li');
  li.textContent = name1;
  list.appendChild(li);
}

document.body.appendChild(list);