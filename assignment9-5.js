var prompt = require('prompt-sync')();

var n = prompt('Enter any number : ')
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}
