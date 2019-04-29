
let song;
var angle = 0;
// var speed = 0.05;

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
  background(171, 203, 254);
  push();
  translate(mouseX, mouseY);
  rotate(radians(angle));
  line(-50, -50, 50, 50);
  line(50, -50, -50, 50);
  angle+= 3;
  pop();

    if(mouseX >= 48 && mouseX <=102 && mouseY<= 102 && mouseY >= 48) {
    fill(0);
    rectMode(CENTER);
    rect(75,75,50,50);
    
  } else {
    fill(255)
    ellipse(75,75,50,50);
  }

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
