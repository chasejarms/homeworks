const MovingObject = function(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
};

// MovingObject.prototype.move = function() {
//   this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
// };

// MovingObject.prototype.isCollidedWith = function(otherMovingObject) {
//
// };

MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.centerX,
    this.centerY,
    this.radius,
    this.color,
    0,
    2*Math.PI
  );

  ctx.fill();
};

module.exports = MovingObject;
