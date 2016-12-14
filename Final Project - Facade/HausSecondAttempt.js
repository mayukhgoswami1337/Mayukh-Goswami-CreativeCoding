
var forehaus = [];

function foreground (vlume) {
  if((forehaus[0].x)<(-300))
  {
  var r = round(random(10));
    forehaus.splice(0,1);
  //forehaus[0].update(vlume); <------------------------
  
  // if(r===0)
  // {
  //   forehaus.push(new Haus1(600,0));
  //   forehaus[2].initialpos(vlume);
  // }
  if(r===0 || r==1)
  {
    forehaus.push(new Haus2(600,0));
    forehaus[1].initialpos(vlume);
    console.log(r);
  }
  else if(r==2)
  {
    forehaus.push(new Haus3(600,0));
    forehaus[1].initialpos(vlume);
      console.log(r);
  }
  else if(r==3)
  {
    forehaus.push(new Haus4(600,0));
    forehaus[1].initialpos(vlume);
      console.log(r);
  }
  else if(r==4)
  {
    forehaus.push(new Haus5(600,0));
    forehaus[1].initialpos(vlume);
      console.log(r);
  }
  else if(r==5)
  {
    forehaus.push(new Haus6(600,0));
    forehaus[1].initialpos(vlume);
      console.log(r);
  }
  else if(r==6)
  {
    forehaus.push(new Haus7(600,0));
    forehaus[1].initialpos(vlume);
      console.log(r);
  }
  else if(r==7)
  {
    forehaus.push(new Haus8(600,0));
    forehaus[1].initialpos(vlume);
      console.log(r);
  }
  else if(r==8)
  {
    forehaus.push(new Haus9(600,0));
    forehaus[1].initialpos(vlume);
      console.log(r);
  }
  else if(r==9)
  {
    forehaus.push(new Haus9(600,0));
    forehaus[1].initialpos(vlume);
      console.log(r);
  }

  }
  else
  {
    forehaus[0].update(vlume);
    if(forehaus.length < 2)
    {
     forehaus.push(new Haus9(600,0));
    forehaus[1].initialpos(vlume); 

    }
    else
    {
    forehaus[1].update(vlume); 
    }
  }
}

function Haus1(x,y) {
  this.x=x;
  this.y=y;
  this.initialpos = function(vlume) {
    this.animate(vlume);
  }
  this.animate = function(vlume) {
  var q = 2*round(map(vlume,0,2,0,10));

  fill(89+20*q,230,255-3*q);
  noStroke();
  rect(this.x+37,this.y+42,40,225);
  rect(this.x+90,this.y+30,165,270);
  image(haus[0],this.x,this.y,300,300);
  }
  this.update = function(vlume) {
    this.x-=0.6;
    this.animate(vlume);
  }

}



function Haus2(x,y) {
  this.x=x;
  this.y=y;
  this.initialpos = function(vlume) {
    this.animate(vlume);
  }
  this.animate = function(vlume) {
  var q = 2*round(map(vlume,0,2,0,10));
  noStroke();
  fill(89+20*q,230,255-3*q);
  rect(this.x+60,this.y+30,200,580);
  image(haus[2],this.x,this.y,300,600);
  }
  this.update = function(vlume) {
    this.x-=0.6;
    this.animate(vlume);
  }

}





function Haus3(x,y) {
  this.x=x;
  this.y=y;
  this.initialpos = function(vlume) {
    this.animate(vlume);
  }
  this.animate = function(vlume) {
  var q = 2*round(map(vlume,0,2,0,10));
  noStroke();
  fill(89+20*q,230,255-3*q);
  rect(this.x+60,this.y+30,200,580);
  image(haus[2],this.x,this.y,300,600);
  }
  this.update = function(vlume) {
    this.x-=0.6;
    this.animate(vlume);
  }

}

function Haus4(x,y) {
  this.x=x;
  this.y=y;
  this.initialpos = function(vlume) {
    this.animate(vlume);
  }
  this.animate = function(vlume) {
  var q = 2*round(map(vlume,0,2,0,10));
  noStroke();
    fill(89+20*q,230,255-3*q);
  rect(this.x+50,this.y+72,200,580);
  rect(this.x+47,this.y+37,80,300);
  rect(this.x+37,this.y+330,80,200);
  rect(this.x+28,this.y+520,80,200);
  rect(this.x+143,this.x+40,30,40);
  rect(this.x+179,this.x+55,30,40);
  rect(this.x+212,this.x+67,30,40);
  image(haus[3],this.x,this.y,300,600);
  }
  this.update = function(vlume) {
    this.x-=0.6;
    this.animate(vlume);
  }

}

function Haus5(x,y) {
  this.x=x;
  this.y=y;
  this.initialpos = function(vlume) {
    this.animate(vlume);
  }
  this.animate = function(vlume) {
  var q = 2*round(map(vlume,0,2,0,10));
  noStroke();
  fill(89+20*q,230,255-3*q);
  rect(this.x+56,this.y+94,195,580);
  rect(this.x+40,this.y+450,22,200);
  rect(this.x+30,this.y+550,22,200);
  rect(this.x+240,this.y+370,22,150);
  rect(this.x+250,this.y+525,22,200);
  image(haus[4],this.x,this.y,300,600);
  }
  this.update = function(vlume) {
    this.x-=0.6;
    this.animate(vlume);
  }

}

function Haus6(x,y) {
  this.x=x;
  this.y=y;
  this.initialpos = function(vlume) {
    this.animate(vlume);
  }
  this.animate = function(vlume) {
  var q = 2*round(map(vlume,0,2,0,10));
  noStroke();
  fill(89+20*q,246,255-3*q);
  rect(this.x+52,this.y+57,195,580);

  rect(this.x+240,this.y+90,20,300);
  rect(this.x+240,this.y+320,40,300);
  rect(this.x+235,this.y+525,42,200);
  image(haus[5],this.x,this.y,300,600);
  }
  this.update = function(vlume) {
    this.x-=0.6;
    this.animate(vlume);
  }

}

function Haus7(x,y) {
  this.x=x;
  this.y=y;
  this.initialpos = function(vlume) {
    this.animate(vlume);
  }
  this.animate = function(vlume) {
  var q = 2*round(map(vlume,0,2,0,12));
  noStroke();
  fill(89+20*q,246,255-3*q);
  rect(this.x+46,this.y+57,200,580);
  rect(this.x+240,this.y+430,35,300);
  rect(this.x+235,this.y+525,40,200);
  rect(this.x+30,this.y+78,15,200);
  rect(this.x+20,this.y+280,15,350);
  image(haus[6],this.x,this.y,300,600);
  }
  this.update = function(vlume) {
    this.x-=0.6;
    this.animate(vlume);
  }

}

function Haus8(x,y) {
  this.x=x;
  this.y=y;
  this.initialpos = function(vlume) {
    this.animate(vlume);
  }
  this.animate = function(vlume) {
  var q = 2*round(map(vlume,0,2,0,10));
  noStroke();
  fill(89+20*q,246,255-3*q);
 rect(this.x+52,this.y+57,195,580);

  rect(this.x+240,this.y+90,20,300);
  rect(this.x+240,this.y+320,40,300);
  rect(this.x+235,this.y+525,42,200);
  image(haus[7],this.x,this.y,300,600);
  }
  this.update = function(vlume) {
    this.x-=0.6;
    this.animate(vlume);
  }

}

function Haus9(x,y) {
  this.x=x;
  this.y=y;
  this.initialpos = function(vlume) {
    this.animate(vlume);
  }
  this.animate = function(vlume) {
  var q = 2*round(map(vlume,0,2,0,12));
  noStroke();
  fill(89+20*q,246,255-3*q);
  rect(this.x+52,this.y+57,195,580);
  rect(this.x+240,this.y+90,20,300);
  rect(this.x+240,this.y+320,40,300);
  rect(this.x+235,this.y+525,42,200);
  image(haus[8],this.x,this.y,300,600);
  }
  this.update = function(vlume) {
    this.x-=0.6;
    this.animate(vlume);
  }
}

function Haus10(x,y) {
  this.x=x;
  this.y=y;
  this.initialpos = function(vlume) {
    this.animate(vlume);
  }
  this.animate = function(vlume) {
  var q = 2*round(map(vlume,0,2,0,10));
  noStroke();
  fill(89+20*q,246,255-3*q);
  rect(this.x+50,this.y+72,200,580);

  rect(this.x+47,this.y+37,80,300);

  rect(this.x+37,py+330,80,200);

  rect(this.x+28,this.y+520,80,200);

  rect(this.x+143,this.x+40,30,40);

  rect(this.x+179,this.x+55,30,40);

  rect(this.x+212,this.x+67,30,40);
  image(haus[9],this.x,this.y,300,600);
  }
  this.update = function(vlume) {
    this.x-=0.6;
    this.animate(vlume);
  }

}