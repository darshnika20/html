var prompt = require('prompt-sync')();

var n = prompt('Enter any number : ')
for (let i = 1; i <= 5; i++) {
  console.log(`The square of ${i} is ${i * i}`);
}
