
let song;
var angle = 0;

function preload() {
  song = loadSound('music/music.mp3');
}

function setup() {
  createCanvas(1100, 700);
  song.loop(); // song is ready to play during setup() because it was loaded during preload
  noCursor();
}

function draw() {
  background(255);
  translate(mouseX, mouseY);
  rotate(radians(angle));
  line(-50, -50, 50, 50);
  line(50, -50, -50, 50);
  line(25, -25, -25, 25);
  line(-25, -25, 25, 25);
  angle++;
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
