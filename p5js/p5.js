
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
  for(var x =25; x<= width-25; x+=25){
  for(var y =25; y<= height-25; y+=25){
    rotate(radians(angle));
    line(x-3, y-3, x+3, y+3);
    line(x+3, y-3, x-3, y+3);
    pop();
  }
  }
  push();
  translate(mouseX, mouseY);
  rotate(radians(angle));
  line(-50, -50, 50, 50);
  line(50, -50, -50, 50);
  angle+= 3;
  pop();

  for(var x =75; x<= width-75; x+=75){
  for(var y =75; y<= height-75; y+=75){

    if(mouseX >= x-26 && mouseX <= x+26 && mouseY<= y+26 && mouseY >= y-26) {
    fill(255,228,225);
    rectMode(CENTER);
    rect(x,y,50,50);
    
  } else {
    fill(255);
    ellipse(x,y,50,50);
  }
}
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
