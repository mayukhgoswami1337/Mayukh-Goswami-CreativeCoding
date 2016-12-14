function backg2() {
  if(background2[0].x<-585)
  {
    background2[0].x = 600;
    background2[0].update();
  }
  else
  {
    background2[0].update();
  }
  if(background2[1].x<-585)
  {
    background2[1].x = 600;
    background2[1].update();
  }
  else
  {
    background2[1].update();
  }
}

function Back2(x,y) {
  this.x = x;
  this.y = y;
  this.update = function () {
    image(bg2,this.x,this.y,585,142);
    this.x-=0.3;
  }
}


