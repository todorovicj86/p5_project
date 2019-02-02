var positionX = 0;
var positionY = 0;
var canvas;
var speedX=1;
var speedY=0;
var targetPositionX;
var targetPositionY;

var punteggio=0;

var speedFactor=2;
function setup() {
 //createCanvas(300,400);
 canvas = createCanvas(windowWidth,windowHeight);
 updateTarget();
}

function draw() {
 background(200);
 updatePosition();
 checkTarget();
 drawtarget();
 nacrtajScore()
 nacrtajTelo(positionX, positionY);
 nacrtajOci();
 nacrtajKapu();
 
 if (mouseIsPressed) {
   nacrtajUsta(true);
 } else {
   nacrtajUsta(false);
 }

 function nacrtajScore(){
  textSize(32);
  text("SCORE: "+punteggio, 40, 40);
}

}

function updatePosition(){
 positionX = positionX+speedX*speedFactor;
 positionY = positionY+speedY*speedFactor;
}


function updateTarget(){
 targetPositionX=random(width);
 targetPositionY=random(height);
}
function checkTarget(){
 var distanceX=targetPositionX-positionX;
 var distanceY=targetPositionY-positionY;

 if ((distanceX<50&&distanceX>-50)&&(distanceY<50&&distanceY>-50)){
   updateTarget();
   punteggio++;
   speedFactor+=punteggio/3;
 }
}
function drawtarget(){
 fill(255,0,0);
 ellipse(targetPositionX,targetPositionY, 20,20);
}
function nacrtajTelo(x, y) {
 strokeWeight(4);
 fill(0,170,0);
 rect(x - 50, y - 50, 100, 100);
}

function nacrtajKapu() {
 push();
 stroke(0);
 translate(positionX - 60, positionY - 60);
 fill(255,100,30);
 triangle(0, 0, 0, 60, 60, 0);
 pop();
}

function nacrtajOci() {
 fill(255);
 ellipse(positionX - 50 + 25, positionY - 50 + 30, 20, 20)
 ellipse(positionX - 50 + 70, positionY - 50 + 30, 30, 30)
}

function nacrtajUsta(zatvorena) {
 if (zatvorena) {
   stroke(0);
   line(positionX - 30, positionY + 30, positionX + 30, positionY + 30)
 } else {
   noStroke();
   fill(255, 0, 0);
   rect(positionX - 30, positionY + 13, 60, 20);
 }

 fill(255);
 noStroke();
 rect(positionX - 30, positionY + 18, 10, 10);
 rect(positionX + 20, positionY + 18, 10, 10);
}

function keyPressed() {
 if (keyCode === LEFT_ARROW) {
    speedX=-1;
    speedY=0;
 }else if(keyCode === RIGHT_ARROW){
    speedX=1;
    speedY=0;
 }else if(keyCode === UP_ARROW){
    speedX=0;
    speedY=-1;
 }else if(keyCode === DOWN_ARROW){
    speedX=0;
    speedY=1;
 }
 else if(keyCode === SPACE){
   speedFactor=0;
}
}
window.onresize = function() {
 canvas.size(windowWidth, windowHeight);
};




