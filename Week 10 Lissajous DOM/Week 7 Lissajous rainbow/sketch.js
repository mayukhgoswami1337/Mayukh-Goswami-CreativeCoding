var x,y,a=7,b=5,t=0;
//x,y are coordinates that follow lissajous pattern
//a,b are lissajous constants that determine the shape of the pattern.
//t is the frame count
var constant1=250,constant2=250;
//constant1 and constant2 determine the size of the pattern

function setup() {
  createCanvas(600,600);
  //background(0);
}

function draw() {
 

  translate(width/2,height/2);
  //beginShape();
  //assigning lissajous equation to the coordinates x,y
  x=constant1*sin(a*t);
  y=constant2*cos(b*t);
  noStroke();
  fill(3*x,4*y,(x+y));
  //fill(255);
  //ellipse(x,y,(x-y)/2,(x-y)/2);
  ellipse(x,y,5,5);
  //vertex(x,y);
 // endShape();
  t+=0.1;
}