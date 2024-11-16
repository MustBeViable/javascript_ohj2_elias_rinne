'use strict';

const search = document.querySelector('#target');

const div = document.querySelector('div');

search.addEventListener('submit', async (event) => {
  event.preventDefault();
  div.innerHTML = '';
  let article = document.createElement('article');
  const query = document.querySelector('#joke').value.trim();
  try {
    const response = await fetch(
        `https://api.chucknorris.io/jokes/search?query=${query}`);
    const JokeJSON = await response.json();
    console.log(JokeJSON);
    if (JokeJSON.result.length >= 1) {
      for (let joke = 0; joke <= JokeJSON.result.length; joke++) {
        let p = document.createElement('p');
        p.textContent = `${joke+1}. ${JokeJSON.result[joke].value}`;
        article.appendChild(p);
        div.appendChild(article)
      }
    } else {
      let p = document.createElement('p');
      p.textContent = 'No results found. Try again!'
      article.appendChild(p);
      div.appendChild(article);
    }
  } catch (error) {
    console.log(error.message);
  }
});

/*
      let index = Math.floor(Math.random() * JokeJSON.result.length);
      p.textContent = JokeJSON.result[index].value;
      document.body.appendChild(p);
 */