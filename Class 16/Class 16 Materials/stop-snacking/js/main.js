//Create a function that grabs the number of snacks from the input and tells you to stop that many times

document.querySelector("#help").addEventListener("click", stopSnacking);

function stopSnacking() {
  let snacksInput = document.querySelector("#snacks_no");
  document.querySelector("#stops").innerText = "";
  for (let i = 1; i <= snacksInput.value; i++) {
    document.querySelector(
      "#stops"
    ).innerText += ` Warning ${i}! You must stop snacking!`;
  }
}
