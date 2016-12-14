var bildung = [];

function bildung_initialize() {
  var r = int(random(10))%10;
  if(r===0) {
  bildung.push(new Haus1(100,50));
  }
  else if(r==1) {
  bildung.push(new Haus2(100,50));
  }
  else if(r==2) {
  bildung.push(new Haus3(100,50));
  }
  else if(r==3) {
  bildung.push(new Haus4(100,50));
  }
  else if(r==4) {
  bildung.push(new Haus5(100,50));
  }
  else if(r==5) {
  bildung.push(new Haus6(100,50));
  }
  else if(r==6) {
  bildung.push(new Haus7(100,50));
  }
  else if(r==7) {
  bildung.push(new Haus8(100,50));
  }
  else if(r==8) {
  bildung.push(new Haus9(100,50));
  }
  else if(r==9) {
  bildung.push(new Haus10(100,50));
  }
  bildung[0].update();
  
  r = int(random(10))%10;
  if(r===0) {
  bildung.push(new Haus1(600,50));
  }
  else if(r==1) {
  bildung.push(new Haus2(600,50));
  }
  else if(r==2) {
  bildung.push(new Haus3(600,50));
  }
  else if(r==3) {
  bildung.push(new Haus4(600,50));
  }
  else if(r==4) {
  bildung.push(new Haus5(600,50));
  }
  else if(r==5) {
  bildung.push(new Haus6(600,50));
  }
  else if(r==6) {
  bildung.push(new Haus7(600,50));
  }
  else if(r==7) {
  bildung.push(new Haus8(600,50));
  }
  else if(r==8) {
  bildung.push(new Haus9(600,50));
  }
  else if(r==9) {
  bildung.push(new Haus10(600,50));
  }
  bildung[1].update();
}

function bildung_update () {
  if(bildung[0].x < -300)
  {
    bildung[1].update();
    bildung.splice(0,1);
    var r = int(random(10))%10;
  if(r===0) {
  bildung.push(new Haus1(100,50));
  }
  else if(r==1) {
  bildung.push(new Haus2(100,50));
  }
  else if(r==2) {
  bildung.push(new Haus3(100,50));
  }
  else if(r==3) {
  bildung.push(new Haus4(100,50));
  }
  else if(r==4) {
  bildung.push(new Haus5(100,50));
  }
  else if(r==5) {
  bildung.push(new Haus6(100,50));
  }
  else if(r==6) {
  bildung.push(new Haus7(100,50));
  }
  else if(r==7) {
  bildung.push(new Haus8(100,50));
  }
  else if(r==8) {
  bildung.push(new Haus9(100,50));
  }
  else if(r==9) {
  bildung.push(new Haus10(100,50));
  }
  bildung[1].update();
  
  }
  else
  {
    bildung[0].update();
    bildung[1].update();
  }
}



function Haus1(x,y) {
  this.x=x;
  this.y=y;
  this.update = function() {
  noStroke();
  fill(200,0,0);
  rect(this.x+37,this.y+42,40,225);
  rect(this.x+90,this.y+30,165,270);
  image(haus[0],this.x,this.y,300,300);
  this.x-=0.4;
  }
}

function Haus2(x,y) {
  this.x=x;
  this.y=y;
  this.update = function() {
  noStroke();
  fill(200,0,0);
  rect(this.x+37,this.y+42,40,225);
  rect(this.x+90,this.y+30,165,270);
  image(haus[1],this.x,this.y,300,300);
  this.x-=0.4;
  }
}    

function Haus3(x,y) {
  this.x=x;
  this.y=y;
  this.update = function() {
  noStroke();
  fill(200,0,0);
  rect(this.x+60,this.y+30,200,580);
  image(haus[2],this.x,this.y,300,600);
    this.x-=0.4;
}
}

function Haus4(x,y) {
  this.x=x;
  this.y=y;
  this.update = function() {
  noStroke();
  fill(200,0,0);
  rect(this.x+50,this.y+72,200,580);
  fill(0,200,0);
  rect(this.x+47,this.y+37,80,300);

  rect(this.x+37,this.y+330,80,200);

  rect(this.x+28,this.y+520,80,200);

  rect(this.x+143,this.x+40,30,40);

  rect(this.x+179,this.x+55,30,40);

  rect(this.x+212,this.x+67,30,40);
  image(haus[3],this.x,this.y,300,600);
   this.x-=0.4;
}
}

function Haus5(x,y) {
  this.x=x;
  this.y=y;
  this.update = function() {
    noStroke();
  fill(200,0,0);
  rect(this.x+56,this.y+94,195,580);
  fill(0,200,0);
  rect(this.x+40,this.y+450,22,200);
  rect(this.x+30,this.y+550,22,200);
  rect(this.x+240,this.y+370,22,150);
  rect(this.x+250,this.y+525,22,200);
  image(haus[4],this.x,this.y,300,600);
  this.x-=0.4;
}
}

function Haus6(x,y) {
  this.x=x;
  this.y=y;
  this.update = function() {
  noStroke();
  fill(200,0,0);
  rect(this.x+52,this.y+57,195,580);

  rect(this.x+240,this.y+90,20,300);
  rect(this.x+240,this.y+320,40,300);
  rect(this.x+235,this.y+525,42,200);
  image(haus[5],this.x,this.y,300,600);
  this.x-=0.4;
}
}
  

function Haus7(x,y) {
  this.x=x;
  this.y=y;
  this.update = function()  {
    noStroke();
  fill(200,0,0);
  rect(this.x+46,this.y+57,200,580);

  //rect(px+240,py+90,20,300);
  rect(this.x+240,this.y+430,35,300);
  rect(this.x+235,this.y+525,40,200);
  fill(0,200,0);
  rect(this.x+30,this.y+78,15,200);
  rect(this.x+20,this.y+280,15,350);
  image(haus[6],this.x,this.y,300,600);this.x-=0.4;
}
}

function Haus8(x,y) {
  this.x=x;
  this.y=y;
  this.update = function() {
    noStroke();
  fill(200,0,0);
  rect(this.x+52,this.y+57,195,580);

  rect(this.x+240,this.y+90,20,300);
  rect(this.x+240,this.y+320,40,300);
  rect(this.x+235,this.y+525,42,200);
  image(haus[7],this.x,this.y,300,600);this.x-=0.4;
}
}



function Haus9(x,y) {
  this.x=x;
  this.y=y;
  this.update = function()  {
    noStroke();
  fill(200,0,0);
  rect(this.x+52,this.y+57,195,580);

  rect(this.x+240,this.y+90,20,300);
  rect(this.x+240,this.y+320,40,300);
  rect(this.x+235,this.y+525,42,200);
  image(haus[8],this.x,this.y,300,600);this.x-=0.4;
}
}


function Haus10(x,y) {
  this.x=x;
  this.y=y;
  this.update = function() {
  noStroke();
  fill(200,0,0);
  rect(this.x+50,this.y+72,200,580);
  fill(0,200,0);
  rect(this.x+47,this.y+37,80,300);

  rect(this.x+37,this.y+330,80,200);

  rect(this.x+28,this.y+520,80,200);

  rect(this.x+143,this.x+40,30,40);

  rect(this.x+179,this.x+55,30,40);

  rect(this.x+212,this.x+67,30,40);
  image(haus[9],this.x,this.y,300,600);
  this.x-=0.4;
}

}


