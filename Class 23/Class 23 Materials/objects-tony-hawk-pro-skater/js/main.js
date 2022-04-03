//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

function MakeProSkater(chName, chStance, chSponsor, chMove) {
  this.characterName = chName;
  this.stance = chStance;
  this.sponser = chSponsor;
  this.specialMove = chMove;
  this.flip = function () {
    console.log("Kickflip!!!");
  };
  this.taunt = function () {
    console.log(`Don't make me use my ${this.specialMove}`);
  };
  this.grab = function () {
    console.log("MELONNNN GRABBB");
  };
}

let kareemCampbell = new MakeProSkater(
  "Kareem",
  "Goofy",
  "Element",
  "Ghetto Bird"
);
