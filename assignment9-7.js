var prompt = require('prompt-sync')();

var n = prompt('Enter any number : ')
for (let i = 15; i <= 30; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
