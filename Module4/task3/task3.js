'use strict';

const tvShow = document.querySelector('#tv_series');
tvShow.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = document.querySelector('#show').value;
  try {
    const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${query}`);
    const JSONData = await response.json();
    console.log(JSONData);
    SeriesINFO(JSONData);
  } catch (error) {
    console.log(error.message);
  }
});

const SeriesINFO = (JSONFile) => {
  let div1 = document.querySelector('#result');
  div1.innerHTML = '';
  let article = document.createElement('article');
  let h2 = document.createElement('h2');
  h2.textContent = JSONFile[0].show.name;
  article.appendChild(h2);
  let a = document.createElement('a');
  a.setAttribute('target', '_blank');
  a.setAttribute('href', `${JSONFile[0].show.url}`);
  a.textContent = `Link to ${JSONFile[0].show.name} page`;
  article.appendChild(a);
  let img = document.createElement('img');
  img.setAttribute('src', `${JSONFile[0].show.image?.medium || 'no image'}`);
  img.setAttribute('alt', `${JSONFile[0].show.name}`);
  article.appendChild(img);
  let div = document.createElement('div');
  div.innerHTML = JSONFile[0].show.summary;
  article.appendChild(div);
  div1.appendChild(article);
};