'use strict';

const parag = document.querySelector('#trigger');

const image = document.querySelector('#target');

const hoverer = () => {
  image.src = 'img/picB.jpg';
};

parag.addEventListener('mouseover', hoverer);

parag.addEventListener('mouseout', function() {
  image.src = 'img/picA.jpg';
});