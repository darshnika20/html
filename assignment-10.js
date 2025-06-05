
//  PART 1: Arrays


//  Sum of all even numbers
const sumEvenNumbers = (arr) => arr.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);

//  Double each number in array
const doubleNumbers = (arr) => arr.map(num => num * 2);

//  Find second largest number
const secondLargest = (arr) => {
    const uniqueSorted = [...new Set(arr)].sort((a, b) => b - a);
    return uniqueSorted.length > 1 ? uniqueSorted[1] : null;
};

//  Remove duplicates
const removeDuplicates = (arr) => [...new Set(arr)];

// Rotate array by k positions
const rotateArray = (arr, k) => [...arr.slice(-k), ...arr.slice(0, -k)];

//  Reverse array in-place
const reverseArray = (arr) => {
    for (let i = 0; i < arr.length / 2; i++) {
        [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
    }
    return arr;
};

//  Get string lengths in an array
const getStringLengths = (arr) => arr.map(str => str.length);

//  PART 2: Strings


//  Check if string is palindrome
const isPalindrome = (str) => str.toLowerCase() === str.toLowerCase().split("").reverse().join("");

// Count vowels and consonants
const countVowelsConsonants = (str) => {
    const vowels = "aeiou";
    let counts = { vowels: 0, consonants: 0 };
    str.toLowerCase().split("").forEach(char => {
        if (/[a-z]/.test(char)) {
            vowels.includes(char) ? counts.vowels++ : counts.consonants++;
        }
    });
    return counts;
};

//  Capitalize first letter of each word
const capitalizeWords = (str) => str.replace(/\b\w/g, char => char.toUpperCase());

//  Reverse words in a sentence
const reverseWords = (str) => str.split(" ").reverse().join(" ");

// Find most frequent character
const mostFrequentChar = (str) => {
    let freqMap = {};
    let maxChar = "", maxCount = 0;
    str.split("").forEach(char => {
        if (char !== " ") freqMap[char] = (freqMap[char] || 0) + 1;
        if (freqMap[char] > maxCount) {
            maxChar = char;
            maxCount = freqMap[char];
        }
    });
    return maxChar;
};

//  Check if two strings are anagrams
const areAnagrams = (str1, str2) => {
    const formatString = (str) => str.toLowerCase().replace(/[^a-z]/g, "").split("").sort().join("");
    return formatString(str1) === formatString(str2);
};

//  Remove non-alphabetic characters
const removeNonAlphabetic = (str) => str.replace(/[^a-zA-Z ]/g, "");


//  PART 3: Objects
//  Get object keys as an array
const getObjectKeys = (obj) => Object.keys(obj);

//  Filter objects by a property value
const filterObjectsByValue = (arr, key, value) => arr.filter(obj => obj[key] === value);

//  Merge two objects
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

//  Count properties in an object
const countProperties = (obj) => Object.keys(obj).length;

//  Sort array of objects by key
const sortObjectsByKey = (arr, key) => arr.sort((a, b) => (a[key] > b[key] ? 1 : -1))
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));  // Output: 12
console.log(doubleNumbers([1, 2, 3]));  // Output: [2, 4, 6]
console.log(secondLargest([10, 5, 20, 8, 20]));  // Output: 10
console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));  // Output: [1, 2, 3, 4]
console.log(rotateArray([1, 2, 3, 4, 5], 2));  // Output: [4, 5, 1, 2, 3]
console.log(reverseArray([1, 2, 3, 4, 5]));  // Output: [5, 4, 3, 2, 1]
console.log(getStringLengths(["hello", "world"]));  // Output: [5, 5]

console.log(isPalindrome("racecar"));  // Output: true
console.log(countVowelsConsonants("hello world"));  // Output: { vowels: 3, consonants: 7 }
console.log(capitalizeWords("hello world"));  // Output: "Hello World"
console.log(reverseWords("hello world"));  // Output: "world hello"
console.log(mostFrequentChar("banana"));  // Output: "a"
console.log(areAnagrams("listen", "silent"));  // Output: true
console.log(removeNonAlphabetic("Hello! How are you?"));  // Output: "Hello How are you"

const person = { name: "Alice", age: 25 };
console.log(getObjectKeys(person));  // Output: ["name", "age"]
console.log(filterObjectsByValue([{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }], "age", 25));  // Output: [{ name: "Alice", age: 25 }]
console.log(mergeObjects({ a: 1 }, { b: 2, a: 3 }));  // Output: { a: 3, b: 2 }
console.log(countProperties({ name: "Alice", age: 25, country: "USA" }));  // Output: 3
console.log(sortObjectsByKey([{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }], "age"));  // Output: [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }]
