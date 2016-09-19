var a,b;
a=20; b=0;

function setup() {
  createCanvas(600,600);
  background(0);
}

function draw() {
  
  fill(255);

  rect(a,0,20,300);
  a=a+40;
  rect(b,300,20,300);
  b=b+40;
  
  
}