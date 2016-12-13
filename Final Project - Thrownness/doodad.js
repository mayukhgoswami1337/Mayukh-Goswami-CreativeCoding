
function doodad()
{
  if((t%190)==0)
  {
  doodadarray.push(new Dood(random(400),700,round(random(2))));
  }
  for(var i = 0; i<doodadarray.length; i++)
  {
    doodadarray[i].displaydood();
    doodadarray[i].update();
  }
}

var doodadarray = [];

function Dood (x,y,r)
{
  this.x=x;
  this.y=y;
  this.r = r;

  this.displaydood = function () {
    image(doodads[this.r],this.x,this.y,200,200);
  }
  this.update = function () {
    this.y-=5;
  }
}