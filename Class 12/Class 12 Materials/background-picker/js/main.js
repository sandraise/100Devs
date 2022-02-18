document.getElementById("purple").onclick = partyPurple;
document.getElementById("green").onclick = partyGreen;
document.getElementById("blue").onclick = partyBlue;
document.getElementById("orange").onclick = partyOrange;

function partyPurple() {
  document.querySelector("body").style.backgroundColor = "rgba(241,63,247,1)";
  document.querySelector("body").style.color = "white";
  document.querySelector("h2").style.background = "grey";
}

function partyGreen() {
  document.querySelector("body").style.backgroundColor = "rgba(0,253,81,1)";
  document.querySelector("body").style.color = "white";
  document.querySelector("h2").style.background = "black";
}

function partyBlue() {
  document.querySelector("body").style.backgroundColor = "rgba(0,254,255)";
  document.querySelector("body").style.color = "white";
  document.querySelector("h2").style.background = "pink";
}

function partyOrange() {
  document.querySelector("body").style.backgroundColor = "rgb(240,128,64)";
  document.querySelector("body").style.color = "white";
  document.querySelector("h2").style.background = "red";
}
