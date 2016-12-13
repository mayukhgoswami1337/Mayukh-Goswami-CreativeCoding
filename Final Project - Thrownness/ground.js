var posy = 600;
function ground()
{
  if(t>1990)
  {
    if(posy>0)
    {
    image(gr,-200,posy,900,600);
    posy-=60;
    }
    else
    {
     image(gr,-200,posy,900,600);
    }
  }
}