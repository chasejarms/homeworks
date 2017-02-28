Function.prototype.inherits = function(parent) {
  // let Surrogate = function() {};
  // Surrogate.prototype = parent.prototype;
  // this.prototype = new Surrogate();
  // this.prototype.constructor = this; //????
  this.prototype = Object.create(parent.prototype);
  this.prototpe.constructor = this;
};

function MovingObject () {}
MovingObject.prototype.sayYouAreMoving = function() {
  console.log("I'm moving");
};

function Ship () {
  MovingObject.call(this);
}
Ship.inherits(MovingObject);

function Asteroid () {
  MovingObject.call(this);
}
Asteroid.inherits(MovingObject);


let s = new Ship;
