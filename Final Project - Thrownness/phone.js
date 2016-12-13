var phonecounter = 19;
function phone() {
  
  image(phonepic[phonecounter],400,400,100,200);
  if(p>90)
  {
    if(phonecounter>0)
    {
    p=0;
    phonecounter--;
    }
    else
    {
      p=0;
    }
  }
}