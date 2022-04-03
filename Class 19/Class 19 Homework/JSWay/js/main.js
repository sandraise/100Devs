// Store data in arrays
// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter07.md

// Musketeers

// Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".

musketeers = ["Athos", "Porthos", "Aramis"];

// Shows each array element using a for loop.

for (let i = 0; i < musketeers.length; i++) {
  console.log(musketeers[i]);
}

// Adds the "D'Artagnan" value to the array.

musketeers = ["Athos", "Porthos", "Aramis"];
musketeers.push("D'Artagnan");

console.log(musketeers);

// Shows each array element using the forEach() method.

musketeers.forEach((x = (x) => console.log(x)));

// Remove poor Aramis.

musketeers.splice(2, 1);
console.log(musketeers);

// Shows each array element using a for-of loop.

for (const musk of musketeers) {
  console.log(musk);
}

// Sum of values
// Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).

const values = [3, 11, 7, 2, 9, 10];

function sumArray(values) {
  sum = 0;
  for (let i = 0; i < values.length; i++) {
    sum += values[i];
  }
  return sum;
}

console.log(sumArray(values));

// Array maximum
// Write a program that creates the following array, then calculates and shows the array's maximum value.

function arrayMax(values) {
  sortedValues = values.sort((a, b) => a - b);
  console.log(
    `Max: ${sortedValues[sortedValues.length - 1]}\nMin: ${sortedValues[0]}`
  );
}

arrayMax(values);

// List of words
// Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".

otherWords = [];
userInput = "";

function dontStop() {
  while (userInput !== "stop") {
    otherWords.push(userInput);
    userInput = prompt("Enter a word: ");
  }
  console.log(otherWords);
}

dontStop();
