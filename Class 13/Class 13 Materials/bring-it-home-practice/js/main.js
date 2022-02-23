// *Variables*
// Create a variable and console log the value

let degree = "Masters";
console.log(degree);

// Create a variable, add 10 to it, and alert the value

let age = 26;
newAge = age + 10;
alert(newAge);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

let num1 = 50;
let num2 = 21;
let num3 = 3;
let num4 = 5;

subtractFunc();

function subtractFunc() {
  let difference = num1 - num2 - num3 - num4;
  alert(difference);
}

// Create a function that divides one number by another and returns the remainder

let number1 = 200;
let number2 = 7;

remainderFunc();

function remainderFunc() {
  let remainder = 200 % 7;
  alert(remainder);
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

let first = 20;
let second = 25;
let sum = first + second;

jumanjiOrNot();

function jumanjiOrNot() {
  if (sum > 50) {
    alert("Jumanji");
  } else {
    alert("Elephants!");
  }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

let one = 23;
let two = 25;
let three = 74;
let product = one * two * three;

zebraOrNot();

function zebraOrNot() {
  if (product % 3 == 0) {
    alert("ZEBRA");
  } else {
    alert("Foxes!");
  }
}
