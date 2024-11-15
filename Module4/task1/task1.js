'use strict';

const tester = async (test1) => {
  const result = await test1.json();
  console.log(result);
}
const test = document.querySelector('form');

tester(test)