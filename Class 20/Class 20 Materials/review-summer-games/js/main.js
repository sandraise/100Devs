//Create a function that takes in an array of numbers. Multiply each number together and alert the product.

function arrayFunc(numberArray) {
  let product = 1;
  numberArray.forEach((x) => (product *= x));
  alert(product);
}

function arrayFunc(numberArray) {
  let product = 1;
  for (let i = 0; i < numberArray.length; i++) {
    product *= numberArray[i];
  }
  alert(product);
}

arrayFunc([5, 15, 25, 35, 45]);

function arrayAdd(numbas) {
  let sum = 0;
  numbas.forEach((x) => (sum += x));
  alert(sum);
}

arrayAdd([263, 4728, 12, 42]);
