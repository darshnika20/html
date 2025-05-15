var prompt = require('prompt-sync')();

var n = prompt('Enter any number : ')
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("The sum of numbers from 1 to 100 is:", sum);
