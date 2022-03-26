// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console

const fav_hol = "Summer";
console.log(fav_hol);

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)

const new_word = "Supercalifragilisticexpialidocious";
alert(new_word.substring(new_word.length - 3));
alert(new_word.slice(-3));

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

function fiveNums(n1, n2, n3, n4, n5) {
  alert(Math.abs(100 - n1 - n2 - n3 - n4 - n5));
}

fiveNums(12, 39, -21, 2, 5);

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

function happyDay(num1, num2, num3) {
  let min = Math.min(num1, num2, num3);
  let max = Math.max(num1, num2, num3);
  console.log(`The lowest number is ${min} and the highest number is ${max}`);
}

happyDay(1639, 273, 12);

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

const headsOrTails = (_) => (Math.random() < 0.5 ? "Heads" : "Tails");

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.

function headsOrTailsRepeat(numba) {
  for (let i = 1; i <= numba; i++) {
    let result = headsOrTails();
    console.log(result);
  }
}

headsOrTailsRepeat(6);
