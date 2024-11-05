'use strict';

const ul = document.querySelector('#target');

const li1 = document.createElement('li');
li1.innerHTML = 'First item';
const li2 = document.createElement('li');
li2.innerHTML = 'Second item';

//kokeilin toista tapaa

const li3 = document.createElement('li');
li3.textContent = 'Third item';

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

document.getElementById('target').classList.add('my-item');