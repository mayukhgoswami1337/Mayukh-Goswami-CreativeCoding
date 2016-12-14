function background1 () {
  if(backgr1[0].x < -600)
  {
    backgr1.push(new Background1(600,200));
    backgr1.splice(0,1);
    backgr1[1].update();
  }
  else
  {

    for(var i = 0; i<backgr1.length;i++)
    {
      backgr1[i].update();
    }
  }
}

function Background1 (x,y) {
  this.x=x;
  this.y=y;
  this.r=round(random(2));
  this.initiate=function() {
    //this.r = random(2);
    image(bg1[this.r],this.x,this.y,585,255);
  }
  this.update = function() {
    this.x-=0.5;
    image(bg1[this.r],this.x,this.y,585,255);
  }
}



//failed attempt

// function bg1_initialize()
// {
//   //r[0] = random(2);
//   background1[0] = new Background1(10,200);
//   background1[0].update();
//   //r[1] = random(2);
//   background1[1] = new Background1(600,200);
//   background1[1].update();
// }

// function Background1(x,y,r)
// {
//   this.x=x;
//   this.y=y;
//   this.randomchoice = random(2);
//   this.update = function () {
//     image(bg1[this.randomchoice],this.x,this.y,598,249);
//     this.x-=0.3;
//   }
// }

// function bg1_update() {
//   if(background1[0].x < -600)
//   {
    
//     background1.splice(0,1);
//     background1.push(new Background1(600,200));
//     background1[0].update();
//   }
//   else {
//     background1[0].update();
//     background1[1].update();
//   }
// }













