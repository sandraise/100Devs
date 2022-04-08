//Get a dog photo from the dog.ceo api and place the photo in the DOM

fetch("https://dog.ceo/api/breeds/image/random") // Send request to server
  .then((res) => res.json()) // parse response as JSON
  .then((data) => {
    console.log(data.message); // display the data e.g. Object
    document.querySelector("img").src = data.message; // add image to the DOM
  })
  .catch((err) => {
    console.log(`err ${err}`); // if it receives an error, display the error message
  });
