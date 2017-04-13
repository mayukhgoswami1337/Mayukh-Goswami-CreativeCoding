/**
 * Kevin's comments: see below. 
 */

//while techncally correct, you should declare and assign values to your
//variables on one line like this:
//var a = 20, b=0;
// or another way of writing this would be:
// var a=20;
// var b=0;
var a,b;
a=20; b=0;

function setup() {
  createCanvas(600,600);
  background(0);
}

function draw() {
  
  fill(255);

  rect(a,0,20,300);
  //another way to add asign values is:
  // a += 40;
  a=a+40;
  rect(b,300,20,300);
  b=b+40;
  
  
}
