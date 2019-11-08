function Blob(x, y, radius) {
  this.pos = createVector(x,y);
  this.r = radius;

  this.update = function() {
    var vel = createVector(mouseX, mouseY);
    vel.sub(this.pos);
    vel.setMag(3);
    this.pos.add(vel);
  };

  this.show = function() {
    fill(255);
    ellipse(this.pos.x , this.pos.y, this.r*2, this.r*2);
  };

}