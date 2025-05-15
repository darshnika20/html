var prompt = require('prompt-sync')();

var n = prompt('Enter any number : ')
function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

// Example usage:
const number = 5; // Change this to any number you want
console.log(`Factorial of ${number} is ${factorial(number)}`);


