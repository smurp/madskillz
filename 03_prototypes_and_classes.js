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

// new REALLY DOES THIS
var smileyBobHardWay = SmileyFace.call({__proto__: SmileyFace}, 3, 9);;

var Flower = function(x, y, height){
  // this = {}
  this.x = x;
  this.y = y;
  this.height = height;
}

goodFlower = new Flower(3, 9, 12); // same as...
goodFlower = Flower.call({__proto__: Flower}, 3, 9, 12);;
goodFlower2 = new Flower(3, 9, 12); // same as...
goodFlower == goodFlower2 // false

// without new
brokenFlower = Flower(2,8,11); // same as....
brokenFlower = Flower.call(window, 2, 8, 11);
brokenFlower2 = Flower(2,8,11);
brokenFlower == brokenFlower2 // true
brokenFlower == window // true



class Flower {
  constructor: (x, y, height) {
    this.x = x;
    this.y = y;
    this.height = height;
  }
}

class Tulip extends Flower {
  constuctor: (x, y, height) {
    super(x, y, height*x);
  }
}
