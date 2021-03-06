
let song;
let rain;
var angle = 0;
// var speed = 0.05;

function preload() {
  song = loadSound('music/music.mp3');
  rain = loadSound('music/rain.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(216, 237, 196);
  song.loop(); // song is ready to play during setup() because it was loaded during preload
  noCursor();
}

function draw() {
  background(216, 237, 196);

  for(var x =25; x<= width-25; x+=25){
  for(var y =25; y<= height-25; y+=25){
    line(x-12, y-12, x+2, y+2);
    line(x+12, y-2, x-2, y+12);
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
    push();
    fill(171, 203, 254);
    rectMode(CENTER);
    translate(width / 66, height / 66);
    translate(p5.Vector.fromAngle(millis() / 1200, 70));
    rect(x,y,50,50);
    pop();
    
  } else {
    fill(255);
    ellipse(x,y,50,50);
  }
}
}
}

function mousePressed() {
  if (rain.isPlaying()) {
    // .isPlaying() returns a boolean
    rain.pause(); // .play() will resume from .pause() position
    background(255, 0, 0);
  } else {
    rain.play();
    background(0, 255, 0);
  }


}

