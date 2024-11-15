'use strict';

const p = document.createElement('p');

const ChuckNorris = async () => {
  try {
    const response = await fetch('https://api.chucknorris.io/jokes/random')
    const JokeJSON = await response.json();
    p.textContent = JokeJSON.value;
    document.body.appendChild(p);
  }
  catch (error) {
    console.log(error.message)
  }
}

ChuckNorris()