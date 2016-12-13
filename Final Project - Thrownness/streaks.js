
function streak()
{
  if((t%10)==0)
  {
  strokeline.push(new Streaks(random(600),700));
  }
  for(var i = 0; i<strokeline.length; i++)
  {
    strokeline[i].displayline();
    strokeline[i].update();
  }
}

var strokeline = [];

function Streaks (x,y)
{
  this.x=x;
  this.y=y;
  this.displayline = function () {
    stroke(255);
    line(this.x,this.y,this.x,this.y+100);
  }
  this.update = function () {
    this.y-=50;
  }
}