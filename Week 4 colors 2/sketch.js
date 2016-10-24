function setup() {
  createCanvas(1000,500);
  background(5,2,178);
  for(var x=0;x<30;x++)
  {
    fill(3*random(100),0,150);
    noStroke();
    rect(random(1000),random(500),random(100),random(100));
  }
}

function draw() {
  
}