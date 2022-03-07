//---Easy
//create a function that subtracts two numbers and alerts the difference

function subtractTwo(num1, num2) {
  let difference = num1 - num2;
  alert(difference);
}

subtractTwo(34, 12);

//create a function that divides three numbers and console logs the quotient

function divideThree(num1, num2, num3) {
  let quotient = num1 / num2 / num3;
  console.log(quotient);
}

divideThree(230, 5, 3);

//create a function that multiplys three numbers and returns the product

function multiplyThree(num1, num2, num3) {
  let product = num1 * num2 * num3;
  return product;
}

multiplyThree(30, 23, 4);

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function mediumTask(num1, num2, num3) {
  let result = (num1 + num2) % num3;
  console.log(result);
}

mediumTask(34, 10, 500);

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function hardTask(num1, num2, num3, num4) {
  let firstProduct = num1 * num2;

  if (firstProduct > 100) {
    let firstSum = num3 + num4;
    console.log(firstSum);
  } else if ((firstProduct = 100)) {
    let secondProduct = num1 * num2 * num3;
    alert(secondProduct % num4);
  } else return "Nothing...";
}

hardTask(34, 29, 12, 5000);
