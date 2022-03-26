//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function MakeStreetFighter(
  fighterPunch,
  fighterKick,
  fighterPhrase,
  fighterSpecialMove
) {
  this.punch = fighterPunch;
  this.kick = fighterKick;
  this.phrase = fighterPhrase;
  this.specialMove = fighterSpecialMove;
  this.taunt = function () {
    console.log(`You can't handle my ${this.specialMove}`);
  };
  this.winning = function () {
    console.log(`Haha! ${this.phrase}`);
  };
  this.dash = function () {
    console.log(`Whooop, missed me!`);
  };
}

let ryu = new MakeStreetFighter(
  "high",
  "high",
  "Get OVER HERE!",
  "HADDDUUUUUUKKKKEEEENNNN"
);
