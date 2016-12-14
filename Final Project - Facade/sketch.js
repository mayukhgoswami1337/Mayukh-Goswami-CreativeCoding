


function setup() {
  createCanvas(600,600);
  song.play();
  amp = new p5.Amplitude();
  fft = new p5.FFT(0.8,64);
    spectrum = fft.analyze();
  streetlighting[0] = new Streetlamp(300,294);
  streetlighting[0].initialpos(0);
    
  forehaus[0] = new Haus5(0,0);
  forehaus[0].initialpos(0);
  forehaus[1] = new Haus7(500,0);
  forehaus[1].initialpos(0);
  
  
  billboard[0] = new Eyes(100,200);
  billboard[0].initialpos(0);
  billboard[1] = new Lips(500,200);
  billboard[1].initialpos(0);
  background2[0] = new Back2(0,330);
  background2[1] = new Back2(600,330);
  //bildung_initialize();
  backgr1.push(new Background1(0,200));
  backgr1.push(new Background1(600,200));
}

function draw() {
  //background(100);
  colorMode(HSB,255);
  noStroke();
  fill(200);
  rect(0,0,600,600);
  vlume = amp.getLevel();
  spectrum = fft.analyze();
  var diameter = 1500/spectrum.length;
  
  for(var j = 0; j<spectrum.length ; j++)
  {
    noStroke();
    fill(spectrum[spectrum.length - j],0,spectrum[spectrum.length - j]);
    ellipse(300,500,(spectrum.length - j)*diameter,(spectrum.length - j)*diameter);
  }
  // for(var i=0; i<spectrum.length;i++)
  // {
  //   noStroke();
  //   //fill(255-30*x,246-25*x,89+20*x);
 
  // for(var i=0; i<spectrum.length;i++)
  // {
  //   noStroke();
  //   //fill(255-30*x,246-25*x,89+20*x);
  //   //ellipse(random(600),random(600),0.5,0.5);
  //   //fill(0);
  //   //rect((i*(1.5*600/1024)),0,600*1.5/1024,3*spectrum[i]);
  //   fill(0,0,200);
  //   rect(i*(600/1024),0,600/1024,3*spectrum[i]);
  // }
  image(bg3,0,359,600,89);
  backg2();
  background1();
  //bildung_update();
  foreground (vlume);
  advertboard(vlume);
  walk_animate();
  
  noStroke();
  fill('#1a1a1a');
  rect(0,445,600,300);
  Lightingthestreets(vlume);
}

function walk_animate()
{
  animation(walk,300,400);
}
//ellipse(random(600),random(600),0.5,0.5);
  //   //fill(0);
  //   //rect((i*(1.5*600/1024)),0,600*1.5/1024,3*spectrum[i]);
  //   fill(0,0,200);
  //   rect(i*(600/1024),0,600/1024,3*spectrum[i]);
  // }
//   image(bg3,0,359,600,89);
//   backg2();
//   background1();
//   //bildung_update();
//   foreground (vlume);
//   advertboard(vlume);

//   walk_animate();
  
//   noStroke();
//   fill('#1a1a1a');
//   rect(0,445,600,300);
//   Lightingthestreets(vlume);
// }

function walk_animate()
{
  animation(walk,300,400);
}
