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
      vel.div(velReg);
    }
    this.pos.add(vel);
  };

  this.show = function() {
    fill(255);
    ellipse(this.pos.x , this.pos.y, this.r*2, this.r*2);
  };

}