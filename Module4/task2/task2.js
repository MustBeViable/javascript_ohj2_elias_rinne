'use strict';

const tvShow = document.querySelector('#tv_series');
tvShow.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = document.querySelector('#show').value;
  try {
    const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${query}`);
    const JSONData = await response.json();
    console.log(response);
    console.log(JSONData);
  } catch (error) {
    console.log(error.message);
  }
});
