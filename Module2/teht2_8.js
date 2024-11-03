'use strict';

const concat = (array) => {
  let complete_string = '';
  for (let string of array) {
    complete_string += string;
  }
  return complete_string;
};

let hardcoded_array = ['Jee', 'Joo', 'Lista', 'Kiva'];

document.querySelector('#array1').innerHTML = hardcoded_array.toString();

document.querySelector('#array2').innerHTML = concat(hardcoded_array);