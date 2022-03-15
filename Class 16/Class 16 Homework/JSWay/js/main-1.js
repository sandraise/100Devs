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
const x = 3;
const y = 7;
console.log(`${x} + ${y} = ${x + y}`);

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

console.log(number1); // Should show 3
console.log(number2); // Should show 5


// Add conditions
// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter03.md

