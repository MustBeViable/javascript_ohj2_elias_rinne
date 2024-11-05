'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const select = document.querySelector('#target');

for (let times = 0; times < students.length; times++) {
  let option = document.createElement('option');
  option.textContent = students[times].name;
  option.value = students[times].id;
  select.appendChild(option);
}