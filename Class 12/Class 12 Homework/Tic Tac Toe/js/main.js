document.getElementById("pink").onclick = turnPink;
document.getElementById("orange").onclick = turnOrange;
document.getElementById("blue").onclick = turnBlue;
document.getElementById("green").onclick = turnGreen;
document.getElementById("yellow").onclick = turnYellow;
document.getElementById("purple").onclick = turnPurple;
document.getElementById("red").onclick = turnRed;
document.getElementById("grey").onclick = turnGrey;
document.getElementById("cyan").onclick = turnCyan;
document.getElementById("reset").onclick = clearBox;

function turnPink() {
  document.querySelector("#pink").style.backgroundColor = "rgba(241,63,247,1)";
  document.querySelector("#pink-text").style.color = "white";
}

function turnOrange() {
  document.querySelector("#orange").style.backgroundColor = "orange";
  document.querySelector("#orange-text").style.color = "white";
}

function turnBlue() {
  document.querySelector("#blue").style.backgroundColor = "blue";
  document.querySelector("#orange-text").style.color = "white";
}

function turnGreen() {
  document.querySelector("#green").style.backgroundColor = "green";
  document.querySelector("#orange-text").style.color = "white";
}

function turnYellow() {
  document.querySelector("#yellow").style.backgroundColor = "yellow";
}

function turnPurple() {
  document.querySelector("#purple").style.backgroundColor = "purple";
}

function turnRed() {
  document.querySelector("#red").style.backgroundColor = "red";
  document.querySelector("#orange-text").style.color = "white";
}

function turnGrey() {
  document.querySelector("#grey").style.backgroundColor = "grey";
  document.querySelector("#orange-text").style.color = "white";
}

function turnCyan() {
  document.querySelector("#cyan").style.backgroundColor = "cyan";
}
