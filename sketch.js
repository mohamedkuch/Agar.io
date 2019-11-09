var mainBlob;
var blobsArray = [];

function setup() {
  createCanvas(600, 600);
  mainBlob = new Blob( width/2, height/2 , 64);
  for (var index = 0; index < 10; index++) {
    blobsArray[index] = new Blob( random(width),random(height) , 10);
  }
}


function draw() {
  background(0);

  translate(width/2 - mainBlob.pos.x,height/2 - mainBlob.pos.y)
  mainBlob.show();
  mainBlob.update();
  blobsArray.forEach(element => {
    element.show();
  });



}