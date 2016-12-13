
//Sounds from Morten Barfod Søegaard, www.littlerobotsoundfactory.com


var t = 0;
var k=0;
var q=0;
var p = 0;
var s = "Press LEFT arrow key to answer your work email and RIGHT arrow key to flap your hands";
function setup() {
  createCanvas(600,600);
  strokeline.push(new Streaks(random(600),700));
 // doodadarray.push(new Dood(random(600),900),(0));
 sound_music.play();
}

function draw() {
  
  background('#9dbeea');
  cloudfunction();



  if(t<2000)
  {
    doodad();
    fill(255,120);
    rect(0,0,600,600);
    human();
    splintering1();
    streak();
    birdflying();
    k=1;
  }
  else if(t==2000){
    fill(255,120);
    rect(0,0,600,600);
    k=0.5;
    sound_music.stop();
    sound_lose.play();
  }
  else
  {
    fill(255,120);
    rect(0,0,600,600);
  }

  t++;
  if(k==0.5){
    splatter();
  }
  ground();
  phone();
  //console.log(t);
  text(s,50,50,500,50);
}



function splatter() {
  
  image(splat[q],200,200,200,200);
  q++;
  if(q>21)
  {
    k++;
  }
  
}