// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value

let favouriteFood = "Bread";
alert(favouriteFood);

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)

let hello = "Extraordinary";
alert(hello.charAt(1));
alert(hello[1]);

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

function threeNum(n1, n2, n3) {
  alert((n1 / n2) * n3);
}

threeNum(40, 2, 9);

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

function oneNumber(numba) {
  console.log(Math.cbrt(numba));
}

oneNumber(27);

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

function monthFunc(month) {
  month = month.toLowerCase();
  if (
    month === "june" ||
    month === "july" ||
    month === "august" ||
    month === "september"
  ) {
    alert("YAY");
  } else {
    alert("BOO!");
  }
}

monthFunc("january");

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function skipFive(numberInput) {
  for (let i = 0; i <= numberInput; i += 5) {
    console.log(i);
  }
}

skipFive(38);
