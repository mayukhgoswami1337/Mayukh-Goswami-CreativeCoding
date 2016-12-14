
function beziercurves ()
{
  background(0);
  fill(0, 20);
  rect(0,0,width,height);
  strokeWeight(1); 
  var maxX = 180/width*100*level;
  var maxY = 180/height*100*level;
  var len  = level*100/4;
 
  translate(width/2, height/2);
  for (var i = 0; i < 360; i+=10) 
  {
    var x1 = sin(radians(i)) * maxX;
    var y1 = cos(radians(i)) * maxY;
 
    var x2 = sin(radians(i+len)) * maxX;
    var y2 = cos(radians(i+len)) * maxY;
 
    push();
    translate(x1, y1);
    rotate(radians(-i+num));
    
    stroke(75, 75, 75);
    bezier(x1, y1, x2, y2, x1, y1*2*clicker, x2*clicker, y2*clicker);
    
    stroke(150, 150, 150);
    bezier(x1-25, y1-5, x2-15, y2-10, x1, y1*clicker, x2*clicker, y2*clicker);
    
    
    stroke(255, 255, 255);
    bezier(x1+30, y1+10, x2+40, y2+10, x1, y1*clicker, x2*clicker, y2*clicker);
    
    stroke(100, 100, 100);
    bezier(x1+55, y1-35, x2-75, y2-30, x1, y1*2*clicker, x2*clicker, y2*clicker);
    pop();
  }
  num += 0.1;
}