
function cloudfunction()
{
  if(t<1100)
  {
    if((t%180)===0)
    {
    cloudarray.push(new Cloud123(random(400),700,round(random(3))));
    }
    for(var i = 0; i<cloudarray.length; i++)
    {
      cloudarray[i].displaycloud();
      cloudarray[i].update();
    }
  }
  else
  {
    for(var j = 0; j<cloudarray.length; j++)
    {
      cloudarray[j].displaycloud();
      cloudarray[j].update();
    }  
  }
}

var cloudarray = [];

function Cloud123 (x,y,r)
{
  this.x=x;
  this.y=y;
  this.r = r;

  this.displaycloud = function () {
    image(cloud[this.r],this.x,this.y,200,200);
  }
  this.update = function () {
    this.y-=1;
  }
}