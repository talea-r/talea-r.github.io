
let song;
var angle = 0;

function preload() {
  song = loadSound('music/music.mp3');
}

function setup() {
  createCanvas(900, 600);
  song.loop(); // song is ready to play during setup() because it was loaded during preload
  fill(53, 0, 12);
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
