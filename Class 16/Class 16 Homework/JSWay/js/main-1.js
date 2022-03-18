// 3,2,1...Code!
// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter01.md

console.log("Hello from JavaScript!");

console.log("Let's do some math");

console.log(4 + 7);

console.log(12 / 0);

console.log("Goodbye!");

/* A comment
written on
several lines */

// A one line comment

console.log("Sandra!");

console.log(26);

console.log(6 + 3);

console.log(6 - 3);

console.log(6 * 3);

console.log(6 / 3);

console.log(4 + 5);
// 9

console.log("4+5");
// 4+5

console.log("4" + "5");
// 45

// Play with variables
// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter02.md

let a;
a = 3.14;
console.log(a);

let b = 3.14;
console.log(b);

const ab = 3.14; // Value cannot be mofified because it is 'const'
// ab = 6.24; // Impossible to reassign value

let age = 0; // age = 0
age += 1; // age = 1
age++; // age = 2
console.log(age);

// Variable scope

let num1 = 0;
{
  num1 = 1; // OK - num1 is declared in the parent block;
  const num2 = 0;
}

console.log(num1); // OK - num1 is declared in the current block - num1 = 0;
// console.log(num2); // Error! num2 is not visible here

// Expressions

const c = 3;
let d = c;
d = d + 1;
console.log(d);

let e = 3 + 2 * 4;
e = (3 + 2) * 4;

const country = "France";
console.log(`I live in ${country}`);
const xNum = 3;
const y = 7;
console.log(`${xNum} + ${y} = ${xNum + y}`);

// Type conversions

const f = 100;
console.log("Variable f contains the value " + f);

const g = "five" * 2;
console.log(g);
// Shows NaN because trying to convert a String to a number

const h = "5";
console.log(h + 1); // String 51
const i = Number("5");
console.log(i + 1); // Number 6

// User interactions

// const fname = prompt("Enter your first name: ");
// alert(`Hello, ${fname}`);

const temp1 = 36.5;
const temp2 = 33.2;
const temp3 = 34.6;
console.log(temp1, temp2, temp3);

// const input = prompt("Enter a number: ");
// const nb = Number(input);

const newNum = Number(prompt("Enter a number: "));
alert(`You entered... ${newNum}`);

// Variable naming

const alpaca = 5.5;
const bobcat = 3.14;
const cheetah = 2 * a * b;
console.log(cheetah);

const radius = 5.5;
const pi = 3.14;
const perimeter = 2 * pi * radius;
console.log(perimeter);

// Improved hello

const firstName = prompt("What is your first name? ");
const lastName = prompt("What is your last name? ");
alert(`Your name is: ${firstName} ${lastName}`);

// Final values

let alpha = 2;
alpha -= 1;
alpha++; // alpha = 2
let beta = 8;
beta += 2; // beta = 10
const celcius = alpha + beta * beta; // celcius = 102
const delta = alpha * beta + beta; // delta = 30
const eureka = alpha * (beta + beta); // eureka = 40
const farenheit = (alpha * beta) / alpha; // farenheit = 10
const gamma = (beta / alpha) * alpha; // gamma = 10
console.log(alpha, beta, celcius, delta, eureka, farenheit, gamma);

// VAT Calculation

const price = Number(prompt("Enter a price: "));
const finalVAT = alert(`Price including VAT = ${price + price * 0.206}`);

// From Celsius to Farenheit degrees

const celsiusInput = Number(prompt("Enter a Celsius degree: "));
const farenheitOutput = alert(
  `You entered: ${celsiusInput}.. In Farenheit that is ${
    celsiusInput * (9 / 5) + 32
  }`
);

// Variable swapping

let number1 = 5;
let number2 = 3;

number1 = 3;
number2 = number1 + 2;

console.log(number1); // Should show 3
console.log(number2); // Should show 5

// Add conditions
// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter03.md

switch (expression) {
  case value1:
    // Code to run when the expression matches value1
    break;
  case value2:
    // Code to run when the expression matches value2
    break;
  // ...
  default:
  // Code to run when neither case matches
}

const numberVal = Number(prompt("Enter a number: "));
if (numberVal > 0) {
  console.log(`${numberVal} is positive.`);
}

// Boolean expressions

/*
Operator         Meaning
=                Assignment operator
==               Equal (value only)
===              Equal (value and type)
!==              Not equal to
<                Less than
<=               Less than or equal to
>                Greater than
>=               Greater than or equal to
*/

const number = Number(prompt("Enter a number:"));
if (number > 0) {
  console.log(`${number} is positive`);
} else {
  // number <= 0
  if (number < 0) {
    console.log(`${number} is negative`);
  } else {
    // number === 0
    console.log(`${number} is zero`);
  }
}

// Else if

const num = Number(prompt("Enter a number:"));
if (num > 0) {
  console.log(`${num} is positive`);
} else if (num < 0) {
  console.log(`${num} is negative`);
} else {
  console.log(`${num} is zero`);
}

// And operator

if (input >= 0 && input <= 100) {
  console.log(`${input} is between 0 and 100, both included`);
}

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// Or operator

if (userInput < 0 || userInput > 100) {
  console.log(`${userInput} is not in between 0 and 100`);
}

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// Usage with non-boolean values

console.log(true && "Hello"); // "Hello"
console.log(false && "Hello"); // false
console.log(undefined && "Hello"); // undefined
console.log("" && "Hello"); // ""
console.log("Hello" && "Goodbye"); // "Goodbye"

console.log(true || "Hello"); // true
console.log(false || "Hello"); // "Hello"
console.log(undefined || "Hello"); // "Hello"
console.log("" || "Hello"); // "Hello"
console.log("Hello" || "Goodbye"); // "Hello"

// Not operator

if (!(enterNum > 100)) {
  console.log(`${enterNum} is less than or equal to 100`);
}

console.log(!true); // false
console.log(!false); // true

// Multiple choices

const weather = prompt("What's the weather like?");
if (weather === "sunny") {
  console.log("T-shirt time!");
} else if (weather === "windy") {
  console.log("Windbreaker life.");
} else if (weather === "rainy") {
  console.log("Bring that umbrella!");
} else if (weather === "snowy") {
  console.log("Just stay inside!");
} else {
  console.log("Not a valid weather type");
}

// Switch statement

const weather1 = prompt("What's the weather like?");
switch (weather1) {
  case "sunny":
    console.log("T-shirt time!");
    break;
  case "windy":
    console.log("Windbreaker life.");
    break;
  case "rainy":
    console.log("Bring that umbrella!");
    break;
  case "snowy":
    console.log("Winter is coming! Just stay inside!");
    break;
  default:
    console.log("Not a valid weather type");
}

const x = "abc";
switch (x) {
  case "abc":
    console.log("x = abc");
  // break omitted: the next block is also run!
  case "def":
    console.log("x = def");
    break;
}

// Following day

const userDay = prompt("What day is it? ");

switch (userDay.toLowerCase()) {
  case "monday":
    console.log(`The following day is: Tuesday`);
    break;
  case "tuesday":
    console.log(`The following day is: Wednesday`);
    break;
  case "wednesday":
    console.log(`The following day is: Thursday`);
    break;
  case "thursday":
    console.log(`The following day is: Friday`);
    break;
  case "friday":
    console.log(`The following day is: Saturday`);
    break;
  case "saturday":
    console.log(`The following day is: Sunday`);
    break;
  case "sunday":
    console.log(`The following day is: Monday`);
    break;
  default:
    console.log(`Not a valid day, try again!`);
}

// Number comparison

const firstNum = Number(prompt("Type in the first number: "));
const secondNum = Number(prompt("Type in the second number: "));

if (firstNum > secondNum) {
  console.log(`${firstNum} is greater than ${secondNum}`);
} else if (firstNum < secondNum) {
  console.log(`${secondNum} is greater than ${firstNum}`);
} else {
  console.log(`${firstNum} is equal to ${secondNum}`);
}

// Final values

let nb1 = Number(prompt("Enter nb1:"));
let nb2 = Number(prompt("Enter nb2:"));
let nb3 = Number(prompt("Enter nb3:"));

if (nb1 > nb2) {
  nb1 = nb3 * 2;
} else {
  nb1++;
  if (nb2 > nb3) {
    nb1 += nb3 * 3;
  } else {
    nb1 = 0;
    nb3 = nb3 * 2 + nb2;
  }
}
console.log(nb1, nb2, nb3);

/*
Initial values

nb1=nb2=nb3=4
nb1 = 0
nb2 = 2
nb3  10

nb1=4,nb2=3,nb3=2
nb1 = 4
nb2 = 3
nb3 = 2

nb1=2,nb2=4,nb3=0
nb1 = 3
nb2 = 4
nb3 = 0
*/

// Numbers of days in a month

const monthNumber = Number(prompt("Enter a number number between 1 and 12: "));

if (
  monthNumber == 1 ||
  monthNumber == 3 ||
  monthNumber == 5 ||
  monthNumber == 7 ||
  monthNumber == 8 ||
  monthNumber == 10 ||
  monthNumber == 12
) {
  console.log(`That month has 31 days.`);
} else if (
  monthNumber == 4 ||
  monthNumber == 6 ||
  monthNumber == 9 ||
  monthNumber == 11
) {
  console.log(`That month has 30 days.`);
} else if (monthNumber == 2) {
  console.log(`That month has 28 or 29 days.`);
} else {
  console.log(`Invalid month, please try again!`);
}

// Following second

/*
Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.
*/

// Repeat statements
// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter04.md

let ageNum = 1;
while (ageNum <= 26) {
  console.log(ageNum);
  ageNum++;
}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// For loops - use when you know how many times you want the loop to run.
// While loops - use when you don't know how many times the loop should run, so it should continue running until it's false.

let letter = "";
while (letter !== "X") {
  letter = prompt("Type a letter or X to exit:");
}

// Carousel

userNumInput = prompt("Enter a number: ");

for (let i = 1; i <= userNumInput; i++) {
  if (i % 2 === 1) {
    console.log(`Turn ${i}`);
  } else continue;
}

// Input validation

let userNumber = "";
while (userNumber >= 100) {
  userNumber = prompt("Enter a number");
}
