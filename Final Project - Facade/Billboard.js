
var b=245,h=181;

function advertboard (vlume) {
  if((billboard[0].x)<(-300))
  {
  var r = round(random(2));
  billboard[0].update(vlume);
  
  if (r===0)
  {
    billboard.push(new Eyes(600,200));
    billboard[2].initialpos(vlume);
  }
  if(r==1)
  {
    billboard.push(new Lips(600,200));
    billboard[2].initialpos(vlume);
  }
  if(r==2)
  {
    billboard.push(new Buy(600,200));
    billboard[2].initialpos(vlume);
  }
  billboard.splice(0,1);
  }
  else
  {
    billboard[0].update(vlume);
    billboard[1].update(vlume);
    
  }
}







function Eyes(x,y) {
  this.x=x;
  this.y=y;
  this.initialpos = function(vlume) {
    this.animate(vlume);
  }
  this.animate = function(vlume) {
  var q = 2*round(map(vlume,0,2,0,10));
  // noStroke();
  // fill(89+20*q,246-25*q,255-30*q);
  
  // rect(this.x+33,this.y+38,245,181);
    for(var i = 0; i<16; i++)
  {
    for(var j = 0; j<16; j++)
    {
      noStroke();
      fill(spectrum[i*j]<150?spectrum[i*j]+random(100):spectrum[i*j],240,230);
      rect((this.x+33)+i*(b/16),(this.y+38)+j*h/16,b/16,(h/16));
    }
  }
    noStroke();
  fill(89+20*q,246-25*q,255-30*q,0.2);
  rect(this.x+33,this.y+38,245,181);
  image(eyes[q],this.x,this.y,300,300);
  }
  this.update = function(vlume) {
    this.x-=0.7;
    this.animate(vlume);
  }

}


function Lips(x,y) {
  this.x=x;
  this.y=y;
  this.initialpos = function(vlume) {
    this.animate(vlume);
  }
  this.animate = function(vlume) {
  var q = 2*round(map(vlume,0,2,0,12));
  // noStroke();
  // fill(89+20*q,246-25*q,255-30*q);
  // rect(this.x+33,this.y+38,245,181);
  for(var i = 0; i<16; i++)
  {
    for(var j = 0; j<16; j++)
    {
      noStroke();
      fill(spectrum[i*j]<150?spectrum[i*j]+random(100):spectrum[i*j],240,230);
      rect((this.x+33)+i*(b/16),(this.y+38)+j*h/16,b/16,(h/16));
    }
  }
    noStroke();
  fill(89+20*q,246-25*q,255-30*q,0.2);
  rect(this.x+33,this.y+38,245,181);
  image(lips[q],this.x,this.y,300,300);
  }
  this.update = function(vlume) {
    this.x-=0.7;
    this.animate(vlume);
  }

}

function Buy(x,y) {
  this.x=x;
  this.y=y;
  this.initialpos = function(vlume) {
    this.animate(vlume);
  }
  this.animate = function(vlume) {
  var q = 2*round(map(vlume,0,2,0,12));
  // noStroke();
  // fill(89+20*q,246-25*q,255-30*q);
  // rect(this.x+33,this.y+38,245,181);
    for(var i = 0; i<16; i++)
  {
    for(var j = 0; j<16; j++)
    {
      noStroke();
      fill(spectrum[i*j]<150?spectrum[i*j]+random(100):spectrum[i*j],240,230);
      rect((this.x+33)+i*(b/16),(this.y+38)+j*h/16,b/16,(h/16));
    }
  }
  noStroke();
  fill(89+20*q,246-25*q,255-30*q,0.2);
  rect(this.x+33,this.y+38,245,181);
  image(buy,this.x,this.y,300,300);
  }
  this.update = function(vlume) {
    this.x-=0.7;
    this.animate(vlume);
  }

}