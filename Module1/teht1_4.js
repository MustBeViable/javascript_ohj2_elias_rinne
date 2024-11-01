'use strict';

const name = prompt('Give name pls.');

const multiplier = 4;

let num = Math.floor(Math.random() * multiplier) + 1;

//tällä tarkistan tuloksen, että tulee tuloskia 1-4

console.log(num)

//tehtävä jatkuu

if (num === 4) {
  document.querySelector('#target').innerHTML = `${name}, 
  you are Gryffindor!`;
} else if (num === 3) {
  document.querySelector('#target').innerHTML = `${name}, 
  you are Slytherin!`;
} else if (num === 2) {
  document.querySelector('#target').innerHTML = `${name}, 
  you are Hufflepuff!`;
} else if (num === 1) {
  document.querySelector('#target').innerHTML = `${name}, 
  you are Ravenclaw!`;
}