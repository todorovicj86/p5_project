var positionX = 0;
var positionY = 0;

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(200);

  positionX = mouseX;
  positionY = mouseY;

  nacrtajTelo(positionX, positionY);
  nacrtajOci();
  nacrtajKapu();

  if (mouseIsPressed) {
    nacrtajUsta(true);
  } else {
    nacrtajUsta(false);
  }
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