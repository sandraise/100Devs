// *Variables*
// Declare a variable, assign it a boolean, and alert the value

const hungry = true;
alert(hungry);

// Declare a variable, reassign it to your favorite color, and console log the value

let favouriteColour = "Purple";
console.log(favouriteColour);

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.

function fourNums(n1, n2, n3, n4) {
  return (n1 + n2 + n3) / n4;
}

fourNums(37, 19, 873, 66);

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.

function twoNums(num1, num2) {
  console.log(num1 ** num2);
}

twoNums(2, 3);

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string

function booString(boo, str) {
  if (boo == true) {
    alert(str);
  } else console.log(str);
}

booString(true, "Hello World!");
booString(false, "Goodbye!");

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number

function fizzBuzzFunc(numba) {
  for (let i = 0; i <= numba; i++) {
    if (i % 15 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else console.log(i);
  }
}

fizzBuzzFunc(34);
