
function visuallips () {
  colorMode(HSB,255);
  fftvalue = 64;
  var leng = round(sqrt(spectrum.length));
  for(var i = 0; i<(leng);i++)
  {
    for(var j = 0; j<(leng);j++)
    {
      var colormap = round(map(i*j,0,spectrum.length,0,255));
      //console.log(colormap);
      noStroke();
      fill(spectrum[colormap],240,240);
      rect(i*width/sqrt(spectrum.length),j*height/sqrt(spectrum.length),width/sqrt(spectrum.length),height/sqrt(spectrum.length));
    }
  }
  var r = round(map(level,0,1,0,12));
  image(lips[r],(width/2)-150,(height/2)-150,300,300);
}