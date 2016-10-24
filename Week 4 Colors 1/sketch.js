var a,b; 

function setup() {
  createCanvas(1000,500);
   rectMode('CENTER');
  for(var x=0;x<20;x++)
  {
    if(x%2==0)
    {
      a=0;
      b=178;
    }
    else
    {
      a=178;
      b=0;
    }
    for(var y=0;y<10;y++)
    {
      fill(a,b,random(255));
      noStroke();
      rect((50*x),(50*y),50,50);
      fill(b,random(255),a);
      noStroke();
      rect((50*x),(50*y),25,25);
    }
  }
}

function draw() {
 
}