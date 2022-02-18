document.querySelector("#check").addEventListener("click", check);

function check() {
  const day = document.querySelector("#day").value.toLowerCase();

  //Conditionals go here
  if (day === "tuesday" || day === "thursday") {
    document.querySelector("#placeToSee").innerHTML = "Class day!";
  } else if (day === "saturday" || day === "sunday") {
    document.querySelector("#placeToSee").innerHTML = "It's the weekend!";
  } else if (day === "friday") {
    document.querySelector("#placeToSee").innerHTML = "TGIF!";
  } else {
    document.querySelector("#placeToSee").innerHTML =
      "BOOOORRRRRRRIIIIIINNNGGGGGGGG!!";
  }
}
