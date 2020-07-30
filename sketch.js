
var v, vx,  vy;


function setup() {


  
  angleMode(DEGREES);
  createCanvas(400,400);
 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,0,255); 
  hr = hour();
  mn = minute();
sc = second();
  


  hrAngle = map(hr, 0,24,0,360);
  mnAngle = map(mn, 0,60,0,360);
  scAngle = map(sc, 0,60,0,360);



  /* v = p5.Vector.fromAngle(scAngle, 30);
   vx = v.x;
   vy = v.y;

  stroke(255,0,0);
  strokeWeight(23);

 
  line(200,100,vx,vy);
  */
   // and extract its x and y components.
   let v2 = p5.Vector.fromAngle(radians(mnAngle), 80);
   let vx2 = v2.x;
   let vy2 = v2.y;
 
   push();
   translate(width / 2, height / 2);
   noFill();
   //stroke(150);
   //line(0, 0, 30, 0);
   stroke(15, 125,13);
   strokeWeight(13);
   line(0, 0, vx2, vy2);
   pop();



   let v3 = p5.Vector.fromAngle(radians(hrAngle), 50);
   let vx3 = v3.x;
   let vy3= v3.y;
 
   push();
   translate(width / 2, height / 2);
   noFill();
   //stroke(150);
   //line(0, 0, 30, 0);
   stroke(135, 125,193);
   strokeWeight(13);
   line(0, 0, vx3, vy3);
   pop();



   let v = p5.Vector.fromAngle(radians(scAngle), 90);
   let vx = v.x;
   let vy = v.y;
 
   push();
   translate(width / 2, height / 2);
   noFill();
   //stroke(150);
   //line(0, 0, 30, 0);
   stroke(135, 15,193);
   strokeWeight(13);
   line(0, 0, vx, vy);
   pop();
  


  drawSprites();
}