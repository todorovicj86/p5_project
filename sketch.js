function setup() {
	createCanvas(400, 300);
	 
 }

 function draw() {
	background(200);

	strokeWeight(2);

	fill(0,170,0);
	rect(mouseX-50, mouseY-50, 100, 100);

	fill (255);
	ellipse(mouseX-50+25, mouseY-50+30, 20, 20)
	ellipse(mouseX-50+70, mouseY-50+30, 30, 30)

	stroke(0);
	line(mouseX-30, mouseY+30, mouseX+30, mouseY+30)

	noStroke();
	rect(mouseX-30, mouseY+18, 10, 10);
	rect(mouseX+20, mouseY+18, 10, 10);

	stroke(0);
	translate(mouseX-60,mouseY-60);
	fill(255,100,30);
	triangle(0, 0, 0, 60, 60, 0);

}