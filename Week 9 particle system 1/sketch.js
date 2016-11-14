var particle = []; //particle array
var acceleration=0.5; //gravity at the centre of the canvas
var constant1=250,constant2=250,a=7,b=5,t=0,c1,c2;
function setup() {
  createCanvas(700,700);
  c1=constant1*sin(t);
  c2=constant2*cos(t);
  //populating particles
  for(var i=0; i<1000; i++)
  {
  particle[i] = {
  x:random(-400,400),
  y:random(-400,400),
  vx:random(5),
  vy:random(5),
  ax:0,
  ay:0,


  size:random(1,4),
  show:function(){
    noStroke();
    // fill(3*this.c1,4*this.c2,(this.c1+this.c2));
    fill(c1,c2,((c1+c2)/2));
    ellipse(this.x,this.y,this.size,this.size);
  },
  update:function(){
  this.ax=acceleration*(-1)*this.x/(sqrt(this.x*this.x+this.y*this.y));
  this.ay=acceleration*(-1)*this.y/(sqrt(this.x*this.x+this.y*this.y));
  this.vx+=this.ax;
  this.vy+=this.ay;
  this.x+=this.vx;
  this.y+=this.vy;
  }
};
particle[i].show();
}
  
}

function draw() {
  background(0);
  translate(width/2,height/2);
  t+=0.5;
  c1=constant1*sin(t);
  c2=constant2*cos(t);
  //painting on canvas
    for(var j=0; j<1000;j++){
  particle[j].update();
  particle[j].show();}
}