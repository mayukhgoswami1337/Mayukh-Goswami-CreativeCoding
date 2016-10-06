function setup() {
  createCanvas(600,600);
}
var a=0,b=-50;
var x,y;
var c;

function draw() {
  background(255);
//    scale(a);
 sirkle(0,0);
 sirkle1(0,0);
 //sirkle(0,0,(a-10));
//  ellipse(300,300,b,b);
  b+=10;
  
}

function sirkle(x,y){
  ellipse(x,y,a,a);
  a+=10;
  if(a>700)
  {
    a=0;
  }
}
function sirkle1(x,y){
  if(b>0)
  {
  ellipse(x,y,b,b);
  }
  b+=10;
  if(b>700)
  {
   b=-50;
  }
}