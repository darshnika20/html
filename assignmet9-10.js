var prompt = require('prompt-sync')();

var n = prompt('Enter any number : ')
const countDivisibleBy9 = () => {
  let count = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 9 === 0) {
      count++;
    }
  }
  return count;
};

console.log(countDivisibleBy9()); // Output: 11
