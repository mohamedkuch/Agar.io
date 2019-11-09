function Blob(x, y, radius) {
  this.pos = createVector(x,y);
  this.r = radius;

  this.update = function() {
    var vel = createVector(mouseX - width/2,mouseY - height/2);
    vel.setMag(3);

    var centerVector = createVector(width/2, height/2);
    var mouseVector = createVector(mouseX, mouseY );

    let distance = centerVector.dist(mouseVector);
    if(distance < this.r){
      let velReg = this.r / distance;
      if(distance < 3)
        velReg = this.r;
      vel.div(velReg);

    }

    this.pos.add(vel);
  };

  this.eats = function(other) {
    var d = p5.Vector.dist(this.pos,other.pos);
    if(d < this.r + other.r){
      var sum = PI * this.r * this.r + PI * other.r * other.r;
      this.r = sqrt(sum / PI);
      return true;
    }else{
      return false;
     }
  }

  this.show = function() {
    fill(255);
    ellipse(this.pos.x , this.pos.y, this.r*2, this.r*2);
  };

}