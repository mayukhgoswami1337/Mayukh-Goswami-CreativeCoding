
function human()
{
  if(value == 255)
  {
     animation(type1,300,300);
     p++;
    if((t%37)===0)
    {
      sound_press.play();
    }
  }
  else if(value == 100)
  {
     animation(flap1,300,300);
  }
  else
  {
     animation(fall1,300,300);
  }

}


function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    value = 255;


  } else if (keyCode === RIGHT_ARROW) {
    value = 100;
  }
}
function keyReleased() {
  if (value > 0) {
    value = 0;
  } 
//return false; // prevent any default behavior
}