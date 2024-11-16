'use strict';

const search = document.querySelector('#target');

search.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = document.querySelector('#joke').value.trim();
  console.log('t1');
  try {
    const response = await fetch(
        `https://api.chucknorris.io/jokes/search?query=${query}`);
    const JokeJSON = await response.json();
    console.log(JokeJSON);
    if (JokeJSON.result.length >= 1) {
      for (let joke = 0; joke <= JokeJSON.result.length; joke++) {
        let article = document.createElement('article');
        let p = document.createElement('p');
        p.textContent = `${joke+1}. ${JokeJSON.result[joke].value}`;
        article.appendChild(p);
        document.body.appendChild(article)
      }
    } else {
      p.textContent = 'No results found. Try again!'
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