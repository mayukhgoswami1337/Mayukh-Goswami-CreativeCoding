var fftvalue = 1024;
var value = 1,b1,b2,b3,b4;
function setup() {
  createCanvas(windowWidth,windowHeight);
    song.play();
  amp = new p5.Amplitude();
  fft = new p5.FFT(0.8,fftvalue);
    rot = 0;
  step = 30;
  rectMode(CENTER);
  b1 = color(0,50);
  b2=b1;
  b3=b1;
  b4=b1;
}

function draw() {
   level = amp.getLevel();
  spectrum = fft.analyze();
  colorMode(RGB);
  if(value == 1)
  {
    fftvalue = 1024;
    
    visuallips();
  }
  else if(value == 2)
  {
    prequelspiral();
  }
    else if(value == 3)
  {
    beziercurves();
  }
  else if(value == 4)
  {
    trigo();
  }
  var s = "Press 1,2,3,4 to cycle through visuals and click mouse button to make changes";
    text(s,width*0.3,height*0.8,500,50);
  // noStroke();
  // fill(b1);
  // rect(width*0.1,height*0.75,100,100);
  // fill(b2);
  // rect(width*0.3,height*0.75,100,100);
  // fill(b3);
  // rect(width*0.5,height*0.75,100,100);
  // fill(b4);
  // rect(width*0.7,height*0.75,100,100);
}


function keyTyped() {
  if (key === '1') {
    value = 1;
  } else if (key === '2') {
    value = 2;
  }
  else if (key === '3') {
    value = 3;
  }
  else if (key === '4') {
    value = 4;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked()
{
  clicker++;
  if(clicker>6)
  {
    clicker=1;
  }
}
