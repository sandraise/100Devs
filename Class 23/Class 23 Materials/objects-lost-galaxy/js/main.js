//Create a dog object that has four properties and three methods

let dog = {};

dog.breed = "chihuahua";
dog.colour = "brown";
dog.legs = 4;
dog.name = "Angel";
dog.bark = function () {
  console.log("WOOF!");
};
dog.jump = function () {
  console.log("BLAST OFF!");
};
dog.fetch = function () {
  console.log("ZOOOOOOOM!");
};
dog.dogSpec = function () {
  console.log(
    `The dog's name is ${dog.name}.\n It is a ${dog.breed} breed with ${dog.legs} legs.\n The colour of its fur is ${dog.colour}.`
  );
};
dog.dogSpec();
