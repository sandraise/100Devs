//Create a conditonal that checks their age

//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too

const h1Check = document
  .querySelector("h1")
  .addEventListener("click", ageChecker);

var ageInputField = document.querySelector("#danceDanceRevolution");

function ageChecker() {
  if (ageInputField.value < 16) {
    alert("You can't drive!");
  } else if (ageInputField.value < 18) {
    alert(
      "You can't hate from outside the club, because you can't even get in!"
    );
  } else if (ageInputField.value < 21) {
    alert("You can't drink!");
  } else if (ageInputField.value < 25) {
    alert("You can't rent cars affordably!");
  } else if (ageInputField.value < 30) {
    alert("You can't rent fancy cars affordably!");
  } else if (ageInputField.value >= 30) {
    alert("There is nothing left to look forward to!");
  } else {
    alert("Nothing for you.");
  }
}

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
