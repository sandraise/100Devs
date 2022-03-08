// *Variables*
// Create a variable and console log the value

let alphabet = "ABC";
console.log(alphabet);

// Create a variable, add 10 to it, and alert the value

let age = 40;
alert(age+=10);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function difference4(num1, num2, num3, num4) {
  alert(num1 - num2 - num3 - num4);
}

difference4(27, 38, 12, 5);

// Create a function that divides one number by another and returns the remainder

function divideRemain(n1, n2) {
  return n1 % n2;
}

console.log(divideRemain(62, 8));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function funcJumanji(number1, number2) {
  let sumNumbers = number1 + number2;

  if (sumNumbers > 50) {
    alert("Jumanji!");
  } else return "Nope.";
}

funcJumanji(34, 20);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function funcZebra(numba1, numba2, numba3) {
  let productNumbers = numba1 * numba2 * numba3;

  if (productNumbers % 3 == 0) {
    alert("Zebra!");
  } else return "Nothing...";
}

funcZebra(360, 2, 3);

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function repeatWord(word, number) {
  for (let i = 1; i <= number; i++) {
    console.log(`${word}`);
  }
}

repeatWord("elephant", 6);
