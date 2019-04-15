'use strict'

let butonSound;
let buttons = [];

function preload() {
	buttonSound = loadSound('../assets/sfx/cameraClick.mp3');
}


function setup() {
	buttons = selectAll ('button');

    for (let i=0; i<buttons.length; i++){
    	buttons[i].mousePressed(playSound);
    }

}

function draw() {
}

function playSound(){
	buttonSound.play();
}