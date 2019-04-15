let song;

function setup() {
  song = loadSound('sound/music.mp3');
  createCanvas(10, 10);
  background(0, 0, 0, 0);
}

function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
    background(255, 0, 0);
  } else {
    song.play();
    background(0, 255, 0);
  }
}
