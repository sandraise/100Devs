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

subtractFunc(54, 24, 9, 4);

function subtractFunc(num1, num2, num3, num4) {
  let difference = num1 - num2 - num3 - num4;
  alert(difference);
}

// Create a function that divides one number by another and returns the remainder

remainderFunc(600, 13);

function remainderFunc(number1, number2) {
  let remainder = number1 % number2;
  alert(remainder);
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

jumanjiOrNot(50, 12);

function jumanjiOrNot(first, second) {
  sum = first + second;
  if (sum > 50) {
    alert("Jumanji");
  } else {
    alert("Elephants!");
  }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

zebraOrNot(3, 7, 12);

function zebraOrNot(one, two, three) {
  product = one * two * three;
  if (product % 3 == 0) {
    alert("ZEBRA");
  } else {
    alert("Foxes!");
  }
}
