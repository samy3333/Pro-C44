
var player;
var enemy1, enemy2, enemy3;
var ghost;
var king;

function preload(){
kingimg=loadImage("king1.png")
Bg= loadImage("ground.jpg");

}

function setup(){
createCanvas(1200, 620);
king= createSprite(440, 400);
king.addImage("King", kingimg);
king.scale= 0.3
}

function draw(){
background(Bg);
drawSprites()
textSize(30);
fill("white");
text("Keep pressing the right arrow key", 300, 300);

}