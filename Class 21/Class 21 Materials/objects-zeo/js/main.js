//Create a stopwatch object that has four properties and three methods

let stopwatch = {};

stopwatch.brand = "Nike";
stopwatch.color = "Black";
stopwatch.shape = "Round";
stopwatch.size = "Large";

stopwatch.start = function () {
  console.log(`STARTING`);
};

stopwatch.start();

stopwatch.stop = function () {
  console.log(`STOPPING`);
};
stopwatch.stop();

stopwatch.sayStopwatchDetails = function () {
  console.log(
    `The brand of the stopwatch is ${stopwatch.brand}\n The color of the stopwatch is ${stopwatch.color}\n The shape of the stopwatch is ${stopwatch.shape}\n The size of the stopwatch is ${stopwatch.size}`
  );
};

stopwatch.sayStopwatchDetails();
