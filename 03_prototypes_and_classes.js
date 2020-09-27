// NEW WAY  "ES6 Class syntax"
class FancySmileyFace { // superclass
  constructor: (centerX, centerY) => {
    this.centerX = centerX;
  },
  draw: () => {}
  speak: (message) => { }
  play: () => {}
}
class SpecialSmileyFace extends FancySmileyFace { // subclass
  specialPower: () => {
    // do superpowered stuff here
  }
}

// OLD WAY 
var SmileyFace = function() {}
SmileyFace.prototype.draw = function() {}
SmileyFace.prototype.speak = function(message) {}

var SubSmileyFace = function() {};
SubSmileyFace.prototype

// WITH BOTH WE MAKE INSTANCES LIKE THIS:
var smileyBob = new SmileyFace(3, 9);
var smileyRobert = new FancySmileyFace(3, 9);

// IF WE DO NOT USE new WITH THE OLD WAY WE CAN STILL DO IT THE HARD WAY
var smileyBobHardWay = SmileyFace.call({}, 3, 9); smileyBobHardWay.__proto__ = SmileyFace;
