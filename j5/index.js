let cursor;

function setup (){
// full screen canvas
 createCanvas (windowWidth, windowHeight);

cursor = loadImage('css/images/dolphin.gif');

noCursor();
console.log()
}

function draw(){

	clear();

	image(cursor, mouseX - 80, mouseY - 80, cursor.width / 3, cursor.height / 3);
}