//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

//images-api.nasa.gov

fetch("https://images-api.nasa.gov") // Send request to server
  .then((res) => res.json()) // parse response as JSON
  .then((data) => {
    console.log(data); // display the data e.g. Object
    document.querySelector("img").src = data.message; // add image to the DOM
  })
  .catch((err) => {
    console.log(`err ${err}`); // if it receives an error, display the error message
  });
