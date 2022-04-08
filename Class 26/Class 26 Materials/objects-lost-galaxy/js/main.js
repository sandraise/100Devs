//Create a pizza object that has four properties and three methods

let pizza = {};

pizza.size = "Medium";
pizza.base = "BBQ Sauce";
pizza.toppings = ["Bacon", "Chicken", "Onions"];
pizza.crust = "Stuffed";

pizza.estimatedDeliveryTime = function () {
  console.log(`Calculating delivery time...`);
};

pizza.placeMyOrder = function () {
  console.log(
    `I would like to place an order for a ${pizza.size} sized pizza with ${pizza.base} with a ${pizza.crust} and ${pizza.toppings}. Please deliver ASAP!`
  );
};

pizza.yummyInMyTummy = function () {
  console.log(`Time to EAT!!!`);
};

pizza.estimatedDeliveryTime();

pizza.placeMyOrder();

pizza.yummyInMyTummy();
