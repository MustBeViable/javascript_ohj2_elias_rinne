'use strict';

document.getElementById('date').innerHTML = '<span class="red">Tuesday</span>';
const button = document.querySelector('button');
button.addEventListener('click', function(evt){
  alert('Element ' + evt.currentTarget.tagName + ' was clicked');
});