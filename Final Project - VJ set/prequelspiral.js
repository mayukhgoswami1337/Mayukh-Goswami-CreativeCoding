function prequelspiral()
{
  background(0);
  colorMode(RGB);
    var beta = level*1000/width;
  step = 3;
  var weight = (10*(1 - beta) + 30*(beta));
  strokeWeight(weight);
  var max = 0.5*clicker*Math.max(width, height);
  translate(width/2, height/2);
  
  push();
  rotate(rot/2);
  for (var i = 0; i < max; i+=step) {
    var alpha = 255*(i+3*step)/(3*max);
    stroke(255, 0, 0, alpha);
    fill(255, 0, 0, alpha);
    spiral(0, 0, weight, i, i+step, 2);
  }
  pop();
  
  push();
  rotate(rot);
  for (i = 0; i < max; i+=step) {
    var alpha = 255*(i+3*step)/(3*max);
    stroke(0, 255, 0, alpha);
    fill(0, 255, 0, alpha);
    spiral(0, 0, weight, i, i+step, 2);
  }
  pop();
  
  push();
  rotate(rot*2);
  for (i = 0; i < max; i+=step) {
    var alpha = 255*(i+3*step)/(3*max);
    stroke(0, 0, 255, alpha);
    fill(0, 0, 255, alpha);
    spiral(0, 0, weight, i, i+step, 2);
  }
  pop();
  rot+=level*100/15000;
}


function spiral(x,y,w,beg,end,inc) {
  push();
  translate(x, y);
  var x1 = beg * cos(beg / inc);
  var y1 = beg * sin(beg / inc);
  var xlast, ylast;
  var lr = w/4;
  for (var r = beg + inc; r <= end; r += inc) {
    xlast = x1*3;
    ylast = y1*2;
    x1 = r * cos(r / inc);
    y1 = r * sin(r / inc);
    line(x1, y1, xlast, ylast);
    rect(x1, y1, lr, lr);
    rect(xlast, ylast, lr, lr);
  }
  pop();
}