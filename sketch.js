var mainBlob;
var blobsArray = [];
var zoom = 1;

function setup() {
  createCanvas(600, 600);
  mainBlob = new Blob( 0 , 0  , 40);
  for (var index = 0; index < 200; index++) {
    var rand_x = random(-width, width);
    var rand_y = random(-height, height);
    blobsArray[index] = new Blob( random(rand_x),random(rand_y) , 10);
  }
}


function draw() {
  background(0);

  translate(width/2 ,height/2 );
  var newZoom = 40 / mainBlob.r;
  zoom = lerp(zoom, newZoom, 0.1);
  scale(zoom);
  translate(-mainBlob.pos.x,-mainBlob.pos.y);

  mainBlob.show();
  mainBlob.update();

  for (var index = blobsArray.length -1 ; index >= 0; index--) {
    blobsArray[index].show();

    if(mainBlob.eats(blobsArray[index])) {
      blobsArray.splice(index,1)
    }

  }




}