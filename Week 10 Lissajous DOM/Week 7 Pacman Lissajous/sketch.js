var x,y,a=7,b=5,t=0,c=0; 
//x,y are the coordinates of the shape. a,b are lissajous constants. t is frame count and c is a counter for the ghost animation
var constant1=500,constant2=500;
//constant1 and constant2 determine the size of the lissajous pattern
var slider;
function setup() {
  createCanvas(700,700);
  //background(0);
  slider = createSlider(0,100,50,10);
  slider.position(width/2, 10);
  slider.style('width', '80px'); 
}

function draw() {
 background(0);

  translate(width/2,height/2);
  //setting the x and y coordinates using lissajous equation
  x=constant1*sin(a*t);
  y=constant2*cos(b*t);
  //scaling down the ghost
  scale(map(slider.value(),0,100,0,1));
  // scale(slider.value());
  //calling the ghost function
  ghostmoving(x,y,c,x,y); 
  t+=0.005;
  //fixing the variable for ghost animation
  c+=1;
  if(c>15)
  { 
    c=0;
  }
}




function eyesmovingright(a,b)
{
  fill(255);
  noStroke();
  rect(a-10,b+30,20,10);
  rect(a-20,b+40,40,30);
  rect(a-10,b+70,20,10);
  fill(0);
  if(mouseX>(a+30))
  {
    if(mouseY>(b+60))
    {
      rect(a,b+50,20,20);
    }
    else
    {
      rect(a,b+40,20,20);
    }
  }
  else
  {
    if(mouseY>(b+60))
    {
      rect(a-20,b+50,20,20);
    }
    else
    {
      rect(a-20,b+40,20,20);
    }
    
  }
}


function eyesmovingleft(a,b)
{
  fill(255);
  noStroke();
  rect(a+40,b+30,20,10);
  rect(a+30,b+40,40,30);
  rect(a+40,b+70,20,10);
  fill(0);
  if(mouseX>(a+30))
  {
    if(mouseY>(b+60))
    {
      rect(a+50,b+50,20,20);
    }
    else
    {
      rect(a+50,b+40,20,20);
    }
  }
  else
  {
    if(mouseY>(b+60))
    {
      rect(a+30,b+50,20,20);
    }
    else
    {
      rect(a+30,b+40,20,20);
    }
    
  }
}


function ghostmoving(a,b,c,x,y)
{ 
  fill(3*x,4*y,(x+y));
  noStroke();
  rect(a,b,30,10);
  rect(a-20,b+10,70,10);
  rect(a-30,b+20,90,10);
  rect(a-40,b+30,110,30);
  rect(a-50,b+60,130,50);
  eyesmovingright(a,b); 
  eyesmovingleft(a,b)
  fill(3*x,4*y,(x+y));
  noStroke();
//phase 1 ghost animation
 if(c<8)
 {
  rect(a-50,b+110,20,10);
  rect(a-50,b+120,10,10);
  rect(a-20,b+110,30,10);
  rect(a-10,b+120,20,10);
  rect(a+20,b+110,30,10);
  rect(a+20,b+120,20,10);
  rect(a+60,b+110,20,10);
  rect(a+70,b+120,10,10);
}
  else
  {
  rect(a-50,b+110,40,10);
  rect(a-40,b+120,20,10);
  rect(a,b+110,30,10);
  rect(a+10,b+120,10,10);
  rect(a+40,b+110,40,10);
  rect(a+50,b+120,10,10);
  }


}