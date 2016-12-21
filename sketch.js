
function setup() {
  createCanvas(500, 600);
  background(50);
  stroke(255);
  strokeWeight(4);

  var tLine = new Timeline(20,50);
  tLine.show();
  tLine.showLen();
}

function draw() {

}

function mouseClicked() {

    line(mouseX,mouseY,width/2,height/2);

}
