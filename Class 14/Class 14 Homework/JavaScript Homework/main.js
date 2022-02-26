// https://javascript.info/variables

// Tasks

// Part 1
// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).

let admin, name;
name = "John";
admin = name;
alert(admin);

// Part 2

// Create a variable with the name of our planet. How would you name such a variable?
// Create a variable to store the name of a current visitor to a website. How would you name that variable?

let ourPlanet = "Earth";
let currentVisitor = "Bob";

// https://javascript.info/function-basics

// Tasks

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm("Did parents allow you?");
  }
}

// Will the function work differently if 'else' is removed?

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm("Did parents allow you?");
}

// There will be no difference because the the function will go to the 'return' statment anyway.

function checkAge(age) {
  return age > 18 ? true : confirm("Did your parents allow you?");
}

// Rewrite it, to perform the same, but without if, in a single line.

// Using a question mark operator '?':
function checkAge(age) {
  return age > 18 ? true : confirm("Did parents allow you?");
}

// Using OR || (the shortest variant):
function checkAge(age) {
  return age > 18 || confirm("Did parents allow you?");
}

// Write a function min(a,b) which returns the least of two numbers a and b.

function min(a, b) {
  return a > b ? a : b;
}

function min(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

min(10, 5);
min(2, 5) == 2;
min(3, -1) == -1;
min(1, 1) == 1;

// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert(pow(x, n));
}

pow(3, 2);
pow(3, 3);
pow(3, 100);

// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter04.md

// Tasks

// Carousel

// Write a program that launches a carousel for 10 turns, showing the turn number each time.
// When it's done, improve it so that the number of turns is given by the user.

let noOfTurns = prompt("Number of turns?", "");
for (let i = 1; i <= noOfTurns; i++) {
  console.log(`Turn ${i}`);
}

let number = prompt("Number of turns?", "");
while (number <= 10) {
  console.log(`Turn ${number}`);
  number++;
}

// Check the following program that shows even numbers (divisible by 2) between 1 and 10.

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  }
}

// Improve the program so that it also shows odd numbers. Improve it again to replace the initial number 1 by a number given by the user.

let userInput = prompt("Type a number: ", "");

for (let i = userInput; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else if (i % 2 != 0) {
    console.log(`${i} is odd`);
  }
}

// Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.
// When you are done with the above, improve the program so that the terminating number is between 50 and 100.

lessthan100();
function lessthan100() {
  let userInput = prompt("Enter a number over 100: ", "");
  userInput < 100 ? lessthan100() : alert(`You typed in.. ${userInput}`);
}

// Write a program that asks the user for a number, then shows the multiplication table for this number.
// When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).

multiplicationTable();

function multiplicationTable() {
  let userEnter = prompt("Enter a number: ", "");
  if (userEnter > 2 && userEnter < 9)
    for (let i = 1; i <= 12; i++) {
      console.log(`${userEnter} * ${i} =`, userEnter * i);
    }
  else alert(`Please enter a number between 2 and 9!`);
}

// Write a program that plays "neither yes, nor no" with the user. Specifically, the programs asks the user to enter text until either "yes" or "no" is typed, which ends the game.

// Write a program that shows all numbers between 1 and 100 with the following exceptions:
// It shows "Fizz" instead if the number is divisible by 3.
// It shows "Buzz" instead if the number is divisible by 5 and not by 3.
// When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.

fizzBuzz();

function fizzBuzz() {
  for (i = 1; i < 101; i++) {
    if (i % 15 === 0) console.log(`FizzBuzz ${i}`);
    else if (i % 3 === 0) console.log(`Fizz ${i}`);
    else if (i % 5 === 0) console.log(`Buzz ${i}`);
    else console.log(i);
  }
}