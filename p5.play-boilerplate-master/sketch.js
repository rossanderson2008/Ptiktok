
var hr, mn, sc

function setup() {
  createCanvas(800,400);
  
  angleMode(DEGREES)  
}

function draw() {
  background(255,255,255);
  translate(200,200)
  rotate(-90)  
  drawSprites();
  scAngle= map(sc, 0, 60, 0, 360)
  mnAngle= map(mn, 0, 60, 0, 360)
  hrAngle= map(hr%12, 0, 12, 0, 360)
  
  hr=hour()
  mn=minute()
  sc=second()


  push()
  rotate(scAngle)
  stroke("red")
  strokeWeight(5)
  line(0,0,100,0)
  pop()

  push()
  rotate(mnAngle)
  stroke("blue")
  strokeWeight(5)
  line(0,0,70,0)
  pop()

  push()
  rotate(hrAngle)
  stroke("green")
  strokeWeight(5)
  line(0,0,50,0)
  pop()

  stroke(255,0,255);
  point(0,0)
   //drawing the arcs
    strokeWeight(10);
     noFill();
     //Seconds
      stroke(255,0,0);
      arc(0,0,300,300,0,scAngle);
       //Minutes
        stroke(0,0,255); 
       arc(0,0,280,280,0,mnAngle);
        //Hour
         stroke(0,255,0);
         arc(0,0,260,260,0,hrAngle);
}