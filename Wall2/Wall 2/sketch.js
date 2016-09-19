var a = 40;
//var r = random(10,700);
var h = 20;
var w = 30;
var r; 
//var r = 30;
function setup() {
    createCanvas(800, 800);
    //var r = random(700);
}

function draw() {
//  stroke(random(255),random(255),random(255)); 
    stroke(mouseX,mouseY,random(255)); 
strokeWeight(6);
r=random(255)*3; 
line(a,0,a,r);
arc(a,r+(h/2),w,h,(-0.5*PI),(0.5*PI));
line(a,r+h,a,800);
a=a+40;
r=r+30;


}