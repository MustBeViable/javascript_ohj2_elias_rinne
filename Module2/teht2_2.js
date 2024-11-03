'use strict';

let number_of_participants = +prompt('How many people is participating');

let times_of_ask = 0;

let names_of_participants = [];

while (number_of_participants > times_of_ask) {
  times_of_ask += 1;
  name = prompt(`Give ${times_of_ask}. participants name.`);
  names_of_participants.push(name);
}

names_of_participants.sort();

const ol = document.createElement('ol');

ol.textContent = `List of all ${number_of_participants} participants in alphabetical order.`;

for (let name of names_of_participants) {
  let li = document.createElement('li');
  li.textContent = name;
  ol.appendChild(li);
}

document.body.appendChild(ol);