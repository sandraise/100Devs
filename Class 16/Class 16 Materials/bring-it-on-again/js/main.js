// *Variables*
// Declare a variable, assign it a value, and alert the value

let birthyear = 1995;
alert(birthyear);

// Create a variable, divide it by 10, and console log the value

const age = 26;
console.log(age / 10);

// *Functions*
// Create a function that multiplys 3 numbers and alerts the product

function multiply3(num1, num2, num3) {
  alert(num1 * num2 * num3);
}

multiply3(36, 4, 2);

// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result

function fourNumbers(n1, n2, n3, n4) {
  console.log(n1 + n2 - n3 - n4);
}
fourNumbers(363, 263, 12, 29);

// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number, subtract the second, and divide the third. If the value is greater then 25, console log "WE HAVE A WINNNA"

function conditionalOne(numba1, numba2, numba3) {
  let result = (100 + numba1 - numba2) / numba3;

  if (result > 25) {
    console.log("WE HAVE A WINNA");
  } else console.log("Nope!");
}

conditionalOne(27, 30, 3);

// Create a function that takes in a day of the week. If it is a weekend alert, "weekend" and if not alert "week day". Handle capitilization and if the user does not enter a day of the week alert "Try again!"

function conditionalTwo() {
  let day = "monday";

  if (
    day.toLowerCase() === "monday" ||
    day.toLowerCase() === "tuesday" ||
    day.toLowerCase() === "wednesday" ||
    day.toLowerCase() === "thursday" ||
    day.toLowerCase() === "friday"
  ) {
    alert("week day!!");
  } else if (
    day.toLowerCase() === "saturday" ||
    day.toLowerCase() === "sunday"
  ) {
    alert("weekend!!");
  } else {
    alert("Try again!");
  }
}

conditionalTwo();

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number or greater, but count by 3

function what(num1) {
  for (let i = 1; i < num1; i += 3) {
    console.log(`${i}`);
  }
}

what(23);
