
function splintering1()
{
  if((t%20)===0)
  {
  splinterarray.push(new Splintered(random(400),700,round(random(6))));
  }
  for(var i = 0; i<splinterarray.length; i++)
  {
    splinterarray[i].displaysplinter();
    splinterarray[i].update();
  }
}

var splinterarray = [];

function Splintered (x,y,r)
{
  this.x=x;
  this.y=y;
  this.r = r;

  this.displaysplinter = function () {
    image(splinter[this.r],this.x,this.y,200,200);
  }
  this.update = function () {
    this.y-=10;
  }
}