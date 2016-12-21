function Timeline(x, y) {
  // var nodes = [];
  this.x = x;
  this.y = y;

  this.len = ((width-this.x)-this.x)*-1

  this.show = function() {
    line(this.x, height-this.y, width-this.x, height-this.y);
  }

  this.showLen = function() {
    console.log(this.len);
  }
  //  var twelfths=[];
  //  for (var i = 0; i<this.len; i+=(len/12)) {
   //
  //  }
  this.mouseOn = function() {
    if (mouseX > this.x && mouseX < width-this.x) {
      if (mouseY == height-this.y) {
        return True;
      }
    }
  }
}
