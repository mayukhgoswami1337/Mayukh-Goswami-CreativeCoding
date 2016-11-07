var a,b,c=0; //a,b are variables to use as parameter for pacman's ghost function
//c = loopig variable to control the movement of the ghost's lower half

var syze=0;//size adjusting variable to use in scale()



function setup(){
  createCanvas(700,700);
}
function draw() {
  background(200);
  patternpass();

}

function patternpass()
{
  
  translate(width/2,height/2);
  //fill(0);
  rotate(radians(frameCount%360));
  scale(syze/360);
  syze+=1;
  if(syze>347)
  {
    syze=0;
  }
  
  for(var i =0; i < 8; i++){
    //outer pattern
    push();
    rotate(TWO_PI * i / 8);
    x=frameCount % (width/2);
    ghostmoving(x,0,c); 
    pop();
    //inner pattern
    push();
    rotate(TWO_PI * i / 8);
    x=frameCount % (width/2)/8;
    ghostmoving(x,0,c); 
    pop();
  
  //ghost lower half animation counter  
  c+=0.125;
  if(c>15)
  { 
    c=0;
  }
  }

}


//pacman ghost animation 

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