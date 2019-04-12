var e1, e2, e3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
  noStroke();
  e1 = new Eye(350, 76, 120);
  e2 = new Eye(274, 225, 80);
  e3 = new Eye(520, 280, 220);
}

function draw() {
  background(0,0,0,0);
  e1.update(mouseX, mouseY);
  e2.update(mouseX, mouseY);
  e3.update(mouseX, mouseY);
  e1.display();
  e2.display();
  e3.display();
}

function Eye(tx, ty, ts) {
  this.x = tx;
  this.y = ty;
  this.size = ts;
  this.angle = 0;

  this.update = function (mx, my) {
    this.angle = atan2(my - this.y, mx - this.x);
  };

  this.display = function () {
    push();
    translate(this.x, this.y);
    fill(255);
    ellipse(0, 0, this.size, this.size);
    rotate(this.angle);
    fill(0);
    ellipse(this.size / 4, 0, this.size / 2, this.size / 2);
    pop();
  };
}