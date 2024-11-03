'use strict';

let numbers = [10, 5, 3, 4, 6, 2];

for (let i of numbers) {
  console.log(i);
}

numbers.sort((a, b) => a - b);

for (let i of numbers) {
  console.log(i);
}

let student2 = {
  firstName: 'Ahmed',
  lastName: 'Hussein',
  credits: 175,
  hasLeft: function() {
    return 240 - this.credits;
  },
};

console.log(
    'Student ' + student2.firstName + ' is missing ' + student2.hasLeft() +
    ' credits.');