var prompt = require('prompt-sync')();

var n = prompt('Enter any number : ')
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
