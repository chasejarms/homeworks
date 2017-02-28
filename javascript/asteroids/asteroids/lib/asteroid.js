const Util = require('./utils.js');
const MovingObject = require('./moving_object.js');

const Asteroid = function(options) {
  options.color = "grey";
  options.radius = options.radius || 10;
  options.vel = this.randomVec(5);

  MovingObject.call(this, options);
};



Util.inherits(Asteroid, MovingObject);
