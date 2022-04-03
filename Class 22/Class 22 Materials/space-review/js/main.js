//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

firstArray = [33, 59, 2374, 162, 8392, 65];
// firstArray.forEach((num) => (sum += num));
// alert(sum);

let sum = firstArray.reduce((acc, c) => acc + +c, 0);
alert(sum);
// Accumalation 0 means the result will always be a number type

// let sum = firstArray.reduce((acc, c) => acc + Number(c), 0); // This will always use Number types even if there's a string in the array

sum = 0;

for (let i = 0; i < firstArray.length; i++) {
  sum += firstArray[i];
}
console.log(sum);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

priceArray = [84, 579, 24, 14262, 92];
newPrices = priceArray.map((n) => n * n);
console.log(newPrices);

//Create a function that takes string
//Print the reverse of that string to the console

function reverseIt(string) {
  console.log(string.reverse());
}

//Create a function that takes in a string
//Alert if the string is a palindrome or not

const isPalindrome = (s) =>
  s === s.split("").reverse().join("") ? alert("Yes") : alert("No");

function isWordPalindrome(word) {
  let reverseStr = word.split("").reverse().join("");
  if (word.toLowerCase() === reverseStr.toLowerCase()) {
    alert("Yes");
  } else {
    alert("No");
  }
}
