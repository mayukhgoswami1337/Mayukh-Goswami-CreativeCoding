
function birdflying()
{
  if((t%330)===0)
  {
  birdarray.push(new Bird(random(500,700),700));
  }
  for(var i = 0; i<birdarray.length; i++)
  {
    birdarray[i].displaysplinter();
    birdarray[i].update();
  }
}

var birdarray = [];

function Bird (x,y,r)
{
  this.x=x;
  this.y=y;
  this.r = r;

  this.displaysplinter = function () {
    animation(bird,this.x,this.y);
  }
  this.update = function () {
    this.y-=50;
    this.x-=10;
  }
}