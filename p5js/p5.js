var angle = 0;

let song;

function preload() {
  song = loadSound('../art75/music/music.mp3');
}

function setup() {
  createCanvas(900, 600);
  song.loop(); // song is ready to play during setup() because it was loaded during preload
  fill(0);
}

function draw() {
	background(255);
	translate(mouseX, mouseY);
	rotate(radians(angle));
	line(-50, -50, 50, 50);
	line(50, -50, -50, 50);
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
