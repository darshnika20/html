const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 1️⃣ Even or Odd Checker
const checkEvenOdd = (num) => {
  if (num % 2 === 0) {
    console.log(`✅ ${num} is Even`);
  } else {
    console.log(`🔢 ${num} is Odd`);
  }
};

// 2️⃣ Positive, Negative, or Zero
const checkNumberSign = (num) => {
  if (num > 0) {
    console.log("Positive Number");
  } else if (num < 0) {
    console.log(" Negative Number");
  } else {
    console.log(" Number is Zero");
  }
};

// 3️⃣ Age-based Eligibility
const checkVotingEligibility = (age) => {
  if (age >= 18) {
    console.log("You are eligible to vote!");
  } else {
    console.log(" You are NOT eligible to vote.");
  }
};

// 4️⃣ Number Range Validator
const checkNumberRange = (num) => {
  if (num >= 10 && num <= 20) {
    console.log(" Number is in range (10-20)");
  } else {
    console.log(" Number is OUT of range");
  }
};

// 5️⃣ Check Number Equality
const checkEquality = (num1, num2) => {
  if (num1 === num2) {
    console.log(" Both numbers are equal");
  } else if (num1 > num2) {
    console.log(`${num1} is larger`);
  } else {
    console.log(` ${num2} is larger`);
  }
};

// 6️⃣ Simple Grading System
const assignGrade = (score) => {
  if (score >= 90) {
    console.log(" Grade A");
  } else if (score >= 75) {
    console.log(" Grade B");
  } else if (score >= 50) {
    console.log(" Grade C");
  } else {
    console.log(" Fail");
  }
};

// 7️⃣ Divisibility Checker (5 and 11)
const checkDivisibility = (num) => {
  if (num % 5 === 0 && num % 11 === 0) {
    console.log("Divisible by both 5 and 11");
  } else {
    console.log(" Not divisible by both");
  }
};

// 8️⃣ Find the Largest of Three Numbers
const findLargest = (num1, num2, num3) => {
  if (num1 > num2 && num1 > num3) {
    console.log(` Largest number is ${num1}`);
  } else if (num2 > num1 && num2 > num3) {
    console.log(`Largest number is ${num2}`);
  } else {
    console.log(`Largest number is ${num3}`);
  }
};

// 9️⃣ Leap Year Validator
const checkLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(" Leap Year");
  } else {
    console.log(" Not a Leap Year");
  }
};

// 🔟 Vowel or Consonant Checker
const checkVowel = (char) => {
  const vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(char.toLowerCase())) {
    console.log(" Vowel");
  } else {
    console.log(" Consonant");
  }
};


