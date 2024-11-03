'use strict';

const even = (array) => {
  let array_of_even_numbers = [];
  for (let num of array) {
    if (num % 2 === 0) {
      array_of_even_numbers.push(num);
    }
  }
  return array_of_even_numbers;
};

let num_array = [1, 2, 3, 4, 5, 6, 7, 9, 8];

console.log(num_array);

console.log(even(num_array));

