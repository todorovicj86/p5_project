function setup() {
  createCanvas(400, 300);
  background(0,100,0);

  strokeWeight(4); //debljina linije

  fill(0,170,0);

  rect(width/2-50, height/2-50, 100, 100); //rect(x,y, width, height)
 
 fill(255); //kaze koje boje je sledeci objekat, pa ide pre crtanja objekta

 ellipse(width/2-50+25, height/2-50+30, 20, 20);
 ellipse(width/2-50+70, height/2-50+30, 30, 30);
 line(width/2-30, height/2+30, width/2+30, height/2+30);

   stroke(0); //crna linija
  line(width/2-30, height/2+30, width/2+30, height/2+30)

  noStroke(); //nema okvir
  rect(width/2-30, height/2+18, 10, 10); //zub 1
  rect(width/2+20, height/2+18, 10, 10); // zub 2
 
 stroke(0);
 translate(width/2-60,height/2-60);
fill(255,100,30);
 triangle(0, 0, 0, 60, 60, 0);
 
 
 }

 function draw() {
  
}