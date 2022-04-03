// Create your first objects
// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter06.md

// Creating an object

const pen = {
  type: "ballpoint",
  color: "blue",
  brand: "Bic",
};

console.log(pen.type);  // "ballpoint"
console.log(pen.color); // "blue"
console.log(pen.brand); // "Bic"

// Tasks
// Adding character experience

const aurora = {
  health: 130,
  strength: 35,
  xp: 0,
};

function Aurora(health, strength, xp) {
  this.auhealth = health;
  this.austrength = strength;
  this.xp = xp;
  this.describe = function () {
    console.log(
      `Aurora has ${this.health} health points. ${this.strength} as strength and ${this.xp} XP points`
    );
  };
}

// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;

console.log(aurora.describe());
