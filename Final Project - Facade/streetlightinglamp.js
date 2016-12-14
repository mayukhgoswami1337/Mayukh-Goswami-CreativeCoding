
function Lightingthestreets (vlume) {
  streetlighting[0].posupdate(vlume);
  if(streetlighting[0].x<-200)
  {
    streetlighting.push(new Streetlamp(600,294));
    streetlighting[1].initialpos(vlume);
    streetlighting.splice(0,1);
  }
}



function Streetlamp (x,y) {
  this.x = x;
  this.y = y;
  this.initialpos = function (vlume) {
    var i = round(map(vlume,0,1,0,15));
    image(streetlamp[i],this.x,this.y,206,151);
  }
  this.posupdate = function(vlume) {
    this.x-=0.9;
    var i = round(map(vlume,0,1,0,15));
    image(streetlamp[i],this.x,this.y,206,151);
    
  }
}

