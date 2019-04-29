
let song;
var angle = 0;
var speed = 0.05;

function preload() {
  song = loadSound('music/music.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(171, 203, 254);
  song.loop(); // song is ready to play during setup() because it was loaded during preload
  noCursor();
}

function draw() {
  // background(255);
  // translate(mouseX, mouseY);
  // rotate(radians(angle));
  // line(-50, -50, 50, 50);
  // line(50, -50, -50, 50);
  // line(25, -25, -25, 25);
  // line(-25, -25, 25, 25);
  // angle+= 3;

  var l0 = map(mouseX, 0, width, 10, 300);

  background(255);

  translate(width/2, height/2);
  rotate(angle)
  for(var i=0; i,5; i++) {
    push();
    rotate(i+TWO_PI/5);
    translate(0, l0);
    ellipse(0, 0, 20, 20);
    pop();
  }

  angle += speed;
}

function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.pause(); // .play() will resume from .pause() position
    background(255, 0, 0);
  } else {
    song.play();
    background(0, 255, 0);
  }

}
