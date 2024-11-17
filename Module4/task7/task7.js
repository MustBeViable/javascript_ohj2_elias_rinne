'use strict';

const Route_planner = document.querySelector('#user_input');

Route_planner.addEventListener('submit', async () => {
  const User_input = document.querySelector('#start').trim();
  try {
    const response = await fetch(
        'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql');
    const JSONFile = response.json();
  } catch (error) {
     console.log(error.message);
  }
});