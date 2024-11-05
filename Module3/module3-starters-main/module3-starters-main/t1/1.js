'use strict';


const ul = document.querySelector('#target');

ul.innerHTML += '<li>First item</li>'
ul.innerHTML += '<li>Second item</li>'
ul.innerHTML += '<li>Third item</li>'
document.getElementById('target').classList.add('my-list');