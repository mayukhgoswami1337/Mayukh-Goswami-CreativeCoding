
var circleRadii= [];

var x,y;



//circleRadii [] CIRCLE = new circleRadii[100];

function setup() {
  createCanvas(600,600);
  
}

function draw() {
  background(0);
    for(var i = 0;i<5;i++)
    {
      circleRadii[i] = {
        radius: 20,
        displaycircle: function() {
          stroke(255);
          noFill();
          x=(width/2)+random(-3,3);
          y=(height/2)+random(-3,3);
          ellipse(x,y,20,20);
        }
      }
      circleRadii[i].displaycircle(); 
    }
   
}