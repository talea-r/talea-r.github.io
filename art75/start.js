
let song;

function preload() {
  song = loadSound('music/music.mp3');
}

function setup() {
  createCanvas(10, 10);
  song.loop(); // song is ready to play during setup() because it was loaded during preload
  background(0, 0, 0, 0);
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
