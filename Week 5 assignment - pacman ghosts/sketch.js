var a,b,c=0;
var x,y,ax=0.1,ay=0.1,t=0;
x=100,y=100;

function setup() {
createCanvas(1300,600);  
}

function draw() {
  background(255);
  
  pacman(mouseX,mouseY,c);
  

//ghost
  if(c%3===0)
  {
    if((mouseX>x)&&(ax<0))
    {
      ax=1;
    }
    if((mouseX<x)&&(ax>0))
    {
      ax=-1;
    }
    if((mouseY>y)&&(ay<0))
    {
      ay=1;
    }
    if((mouseY<y)&&(ay>0))
    {
      ay=-1;
    }
  }
  x=x+ax; 
  y=y+ay;
  ghostmoving(x,y,c); 
  t+=1; 
  c+=1;
  if(c>15)
  { 
    c=0;
  }
}

function pacman(a,b,c)
{
  fill('#FFD91D');
  noStroke();


 arc(a,b,100,100,PI/5,(9*PI/5));
 fill(0);
  ellipse(a,b-20,10,10);
    

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


function ghostmoving(a,b,c)
{ 
  fill('#FF2338');
  noStroke();
  rect(a,b,30,10);
  rect(a-20,b+10,70,10);
  rect(a-30,b+20,90,10);
  rect(a-40,b+30,110,30);
  rect(a-50,b+60,130,50);
  eyesmovingright(a,b); 
  eyesmovingleft(a,b)
  fill('#FF2338');
  noStroke();
//phase 1
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