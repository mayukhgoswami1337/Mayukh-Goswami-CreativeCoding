/**
* Kevin's notes:  Woah this is cool!  Love the green color and the nested ellipses are great.
More code comments inline...
**/


//consider using longer/more descriptive variable names:
//for example: r -> radius , a -> xTranslation
var r=600;
var x,y,w;
var a=0;

function setup() {
  createCanvas(600,600);

}

//great use of a function here, but you can go further
//think about how you would write this function to take arguments/parameters.  For example,
// instead of referencing your global variable 'r' inside the function, pass it through the function header like this:
// function cirkle(circleRadius)
// also, try to find a way to reduce the number of ellipse calls.  You could easily fold these into a single line inside
// a for loop.
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
