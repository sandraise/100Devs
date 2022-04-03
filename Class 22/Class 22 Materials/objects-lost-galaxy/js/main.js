//Create a mouse object that has four properties and three methods

let mouse = {};

mouse.name = "Jerry";
mouse.age = 2;
mouse.color = "black";

mouse.squeak = function () {
  console.log(`Squeeeaaakkkk!!`);
};
mouse.squeak();

mouse.eatCheese = function () {
  console.log(`The mouse loves cheese!`);
};
mouse.eatCheese();

mouse.mouseDetails = function () {
  console.log(
    `The age of the mouse is ${mouse.age}\n The name of the mouse is ${mouse.name}\n The color of the mouse is ${mouse.age}`
  );
};
mouse.mouseDetails();

mouse.color = function () {
  console.log(`The mouse's name is ${mouse.name}`);
};
mouse.color();
