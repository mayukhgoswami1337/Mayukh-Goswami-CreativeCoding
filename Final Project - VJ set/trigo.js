function trigo ()
{
  background(238);
  translate(width/2,height/2);
  noStroke();
  colorMode(HSB,255);
    z = round(map(level,0,1,0,64));
  num = round(map(level,0,1,500,600));
  frms = round(map(level,0,1,100,200));
  var h = height/2;
  for (var i = 0; i < z; i++) {
    var change = color(spectrum[i],240,230);
    f = (i % 2 === 0) ? 238: change;

    drawThing(h - (h*.95 / z * i), f, i);
  }

  theta += TWO_PI / frms;
  //if (frameCount<frms) saveFrame("img/image-###.gif");
}

function drawThing(diam, col, n) {
  fill(col);
  beginShape();
  var d = 0;
  for (var i = 0; i < num; i++) {
    var offSet = PI / z * n;
    var angle = TWO_PI / num * i;
    var s = 2 + 1 * sin(sq(offSet) + theta + angle * 4.0);
    d = 0.25 + 0.2 * pow(s, 0.8);
    d += 0.08 * pow(0.5 + 0.5 + cos(4 * angle), 1.0);
    var x = cos(clicker*angle) * d * diam;
    var y = sin(clicker*angle) * d * diam;
    vertex(x, y);
  }
  endShape(CLOSE);
}

