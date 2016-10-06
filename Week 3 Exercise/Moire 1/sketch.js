var r=600;
var x,y,w;
var a=0;

function setup() {
  createCanvas(600,600);

}
function cirkle() {
    noFill();
  strokeWeight(8);
  ellipse(300,300,r+250,r+250);
  ellipse(300,300,r+200,r+200);
  ellipse(300,300,r+150,r+150);
  ellipse(300,300,r+100,r+100);
  ellipse(300,300,r+50,r+50);
  ellipse(300,300,r,r);
  ellipse(300,300,r-50,r-50);
  ellipse(300,300,r-100,r-100);
  ellipse(300,300,r-150,r-150);
  ellipse(300,300,r-200,r-200);
  ellipse(300,300,r-250,r-250);
  ellipse(300,300,r-300,r-300);
  ellipse(300,300,r-350,r-350);
  ellipse(300,300,r-400,r-400);
  ellipse(300,300,r-450,r-450);
  ellipse(300,300,r-500,r-500);
  ellipse(300,300,r-550,r-550);
  ellipse(300,300,r-590,r-590);
  
}
function draw() {
  background(100,200,50);
 cirkle();
 translate(a,0);
 cirkle();
  a+=1;
  if(a>900)
  {
    a=-300;
  }
  
}