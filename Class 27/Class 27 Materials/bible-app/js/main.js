//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value;

  console.log(choice);

  const url = `https://bible-api.com/john 3:16`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);

      document.querySelector("h3").innerText = data.text;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
