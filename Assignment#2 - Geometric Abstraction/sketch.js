var a,b,c,d,e,f,r;
r=200;

function setup() {
  createCanvas(600,600);
}

function draw() {
  noStroke();
 fill("#886d4f");
 rect(0,0,600,273.205);
 fill("#120d09");
 rect(0,273.205,600,273.205);
 fill("#b5956f");
 triangle(42.25,0,157.75,0,100,100);
 fill("#b5956f");
 triangle(242.25,0,357.75,0,300,100);
 fill("#b5956f");
 triangle(442.25,0,557.75,0,500,100);
 fill("#4a3225");
 quad(100,100,200,273.205,100,446.41,0,273.205);
 fill("#4a3225");
 quad(300,100,400,273.205,300,446.41,200,273.205);
 fill("#4a3225");
 quad(500,100,600,273.205,500,446.41,400,273.205);
 fill("#120608");
 triangle(42.25,546.41,157.75,546.41,100,446.41);
 fill("#120608");
 triangle(242.25,546.41,357.75,546.41,300,446.41);
 fill("#120608");
 triangle(442.25,546.41,557.75,546.41,500,446.41);
 
 
 //circle1
 //arc1
 fill("#ffc257");
 arc(300,100,200,200,(-PI/3),(PI/3));
 fill("#ffc742");
 arc(300,100,(5*r/6),(5*r/6),(-PI/3),(PI/3));
 fill("#fdc109");
 arc(300,100,(4*r/6),(4*r/6),(-PI/3),(PI/3));
 fill("#feb300");
 arc(300,100,(3*r/6),(3*r/6),(-PI/3),(PI/3));
 fill("#ff9800");
 arc(300,100,(2*r/6),(2*r/6),(-PI/3),(PI/3));
 fill("#ff5900");
 arc(300,100,(r/6),(r/6),(-PI/3),(PI/3));
 
 //arc2
  fill("#fc4f2d");
 arc(300,100,200,200,(-2*PI/3),(-PI/3));
 fill("#ff3129");
 arc(300,100,(5*r/6),(5*r/6),(-2*PI/3),(-PI/3));
 fill("#fe1e28");
 arc(300,100,(4*r/6),(4*r/6),(-2*PI/3),(-PI/3));
 fill("#f90a0d");
 arc(300,100,(3*r/6),(3*r/6),(-2*PI/3),(-PI/3));
 fill("#ec0400");
 arc(300,100,(2*r/6),(2*r/6),(-2*PI/3),(-PI/3));
 fill("#ea0605");
 arc(300,100,(r/6),(r/6),(-2*PI/3),(-PI/3));
  //arc3
 fill("#ffc257");
 arc(300,100,200,200,(2*PI/3),(-2*PI/3));
 fill("#ffc742");
 arc(300,100,(5*r/6),(5*r/6),(2*PI/3),(-2*PI/3));
 fill("#fdc109");
 arc(300,100,(4*r/6),(4*r/6),(2*PI/3),(-2*PI/3));
 fill("#feb300");
 arc(300,100,(3*r/6),(3*r/6),(2*PI/3),(-2*PI/3));
 fill("#ff9800");
 arc(300,100,(2*r/6),(2*r/6),(2*PI/3),(-2*PI/3));
 fill("#ff5900");
 arc(300,100,(r/6),(r/6),(2*PI/3),(-2*PI/3));
 //arc4
  fill("#fc4f2d");
 arc(300,100,200,200,(PI/3),(2*PI/3));
 fill("#ff3129");
 arc(300,100,(5*r/6),(5*r/6),(PI/3),(2*PI/3));
 fill("#fe1e28");
 arc(300,100,(4*r/6),(4*r/6),(PI/3),(2*PI/3));
 fill("#f90a0d");
 arc(300,100,(3*r/6),(3*r/6),(PI/3),(2*PI/3));
 fill("#ec0400");
 arc(300,100,(2*r/6),(2*r/6),(PI/3),(2*PI/3));
 fill("#ea0605");
 arc(300,100,(r/6),(r/6),(PI/3),(2*PI/3));
 
 
  //circle2
 //arc1
 fill("#e73f01");
 arc(200,273.205,200,200,(-PI/3),(PI/3));
 fill("#c33102");
 arc(200,273.205,(5*r/6),(5*r/6),(-PI/3),(PI/3));
 fill("#b23300");
 arc(200,273.205,(4*r/6),(4*r/6),(-PI/3),(PI/3));
 fill("#9e2e06");
 arc(200,273.205,(3*r/6),(3*r/6),(-PI/3),(PI/3));
 fill("#7c1e02");
 arc(200,273.205,(2*r/6),(2*r/6),(-PI/3),(PI/3));
 fill("#491500");
 arc(200,273.205,(r/6),(r/6),(-PI/3),(PI/3));
 //arc2
 fill("#fcaf2f");
 arc(200,273.205,200,200,(-2*PI/3),(-PI/3));
 fill("#fea517");
 arc(200,273.205,(5*r/6),(5*r/6),(-2*PI/3),(-PI/3));
 fill("#ff8f05");
 arc(200,273.205,(4*r/6),(4*r/6),(-2*PI/3),(-PI/3));
 fill("#fb8200");
 arc(200,273.205,(3*r/6),(3*r/6),(-2*PI/3),(-PI/3));
 fill("#e67100");
 arc(200,273.205,(2*r/6),(2*r/6),(-2*PI/3),(-PI/3));
 fill("#d96704");
 arc(200,273.205,(r/6),(r/6),(-2*PI/3),(-PI/3));
  
  //arc3
  fill("#abbc32");
 arc(200,273.205,200,200,(2*PI/3),(-2*PI/3));
 fill("#84b619");
 arc(200,273.205,(5*r/6),(5*r/6),(2*PI/3),(-2*PI/3));
 fill("#87ae39");
 arc(200,273.205,(4*r/6),(4*r/6),(2*PI/3),(-2*PI/3));
 fill("#56b86d");
 arc(200,273.205,(3*r/6),(3*r/6),(2*PI/3),(-2*PI/3));
 fill("#5db164");
 arc(200,273.205,(2*r/6),(2*r/6),(2*PI/3),(-2*PI/3));
 fill("#90a754");
 arc(200,273.205,(r/6),(r/6),(2*PI/3),(-2*PI/3)); 
 //arc4
 fill("#477129");
 arc(200,273.205,200,200,(PI/3),(2*PI/3));
 fill("#38683e");
 arc(200,273.205,(5*r/6),(5*r/6),(PI/3),(2*PI/3));
 fill("#26542d");
 arc(200,273.205,(4*r/6),(4*r/6),(PI/3),(2*PI/3));
 fill("#305237");
 arc(200,273.205,(3*r/6),(3*r/6),(PI/3),(2*PI/3));
 fill("#29422f");
 arc(200,273.205,(2*r/6),(2*r/6),(PI/3),(2*PI/3));
 fill("#1c382c");
 arc(200,273.205,(r/6),(r/6),(PI/3),(2*PI/3));
 


  //circle3
 //arc1
 fill("#abbc32");
 arc(400,273.205,200,200,(-PI/3),(PI/3));
 fill("#84b619");
 arc(400,273.205,(5*r/6),(5*r/6),(-PI/3),(PI/3));
 fill("#87ae39");
 arc(400,273.205,(4*r/6),(4*r/6),(-PI/3),(PI/3));
 fill("#56b86d");
 arc(400,273.205,(3*r/6),(3*r/6),(-PI/3),(PI/3));
 fill("#5db164");
 arc(400,273.205,(2*r/6),(2*r/6),(-PI/3),(PI/3));
 fill("#90a754");
 arc(400,273.205,(r/6),(r/6),(-PI/3),(PI/3));
 
 //arc2
 fill("#fcaf2f");
 arc(400,273.205,200,200,(-2*PI/3),(-PI/3));
 fill("#fea517");
 arc(400,273.205,(5*r/6),(5*r/6),(-2*PI/3),(-PI/3));
 fill("#ff8f05");
 arc(400,273.205,(4*r/6),(4*r/6),(-2*PI/3),(-PI/3));
 fill("#fb8200");
 arc(400,273.205,(3*r/6),(3*r/6),(-2*PI/3),(-PI/3));
 fill("#e67100");
 arc(400,273.205,(2*r/6),(2*r/6),(-2*PI/3),(-PI/3));
 fill("#d96704");
 arc(400,273.205,(r/6),(r/6),(-2*PI/3),(-PI/3));
  //arc3
  fill("#e73f01");
 arc(400,273.205,200,200,(2*PI/3),(-2*PI/3));
 fill("#c33102");
 arc(400,273.205,(5*r/6),(5*r/6),(2*PI/3),(-2*PI/3));
 fill("#b23300");
 arc(400,273.205,(4*r/6),(4*r/6),(2*PI/3),(-2*PI/3));
 fill("#9e2e06");
 arc(400,273.205,(3*r/6),(3*r/6),(2*PI/3),(-2*PI/3));
 fill("#7c1e02");
 arc(400,273.205,(2*r/6),(2*r/6),(2*PI/3),(-2*PI/3));
 fill("#491500");
 arc(400,273.205,(r/6),(r/6),(2*PI/3),(-2*PI/3)); 
 //ar44
 fill("#477129");
 arc(400,273.205,200,200,(PI/3),(2*PI/3));
 fill("#38683e");
 arc(400,273.205,(5*r/6),(5*r/6),(PI/3),(2*PI/3));
 fill("#26542d");
 arc(400,273.205,(4*r/6),(4*r/6),(PI/3),(2*PI/3));
 fill("#305237");
 arc(400,273.205,(3*r/6),(3*r/6),(PI/3),(2*PI/3));
 fill("#29422f");
 arc(400,273.205,(2*r/6),(2*r/6),(PI/3),(2*PI/3));
 fill("#1c382c");
 arc(400,273.205,(r/6),(r/6),(PI/3),(2*PI/3));
 
 
 
  //circle4
 //arc1
 fill("#334c8e");
 arc(100,446.41,200,200,(-PI/3),(PI/3));
 fill("#3a477c");
 arc(100,446.41,(5*r/6),(5*r/6),(-PI/3),(PI/3));
 fill("#23497a");
 arc(100,446.41,(4*r/6),(4*r/6),(-PI/3),(PI/3));
 fill("#00346a");
 arc(100,446.41,(3*r/6),(3*r/6),(-PI/3),(PI/3));
 fill("#072851");
 arc(100,446.41,(2*r/6),(2*r/6),(-PI/3),(PI/3));
 fill("#011828");
 arc(100,446.41,(r/6),(r/6),(-PI/3),(PI/3));
 //arc2
 fill("#9faa99");
 arc(100,446.41,200,200,(-2*PI/3),(-PI/3));
 fill("#889e9c");
 arc(100,446.41,(5*r/6),(5*r/6),(-2*PI/3),(-PI/3));
 fill("#7d8e96");
 arc(100,446.41,(4*r/6),(4*r/6),(-2*PI/3),(-PI/3));
 fill("#69818f");
 arc(100,446.41,(3*r/6),(3*r/6),(-2*PI/3),(-PI/3));
 fill("#607d9b");
 arc(100,446.41,(2*r/6),(2*r/6),(-2*PI/3),(-PI/3));
 fill("#686c7e");
 arc(100,446.41,(r/6),(r/6),(-2*PI/3),(-PI/3));
  //arc3
  fill("#e77165");
 arc(100,446.41,200,200,(2*PI/3),(-2*PI/3));
 fill("#cf6267");
 arc(100,446.41,(5*r/6),(5*r/6),(2*PI/3),(-2*PI/3));
 fill("#c0656c");
 arc(100,446.41,(4*r/6),(4*r/6),(2*PI/3),(-2*PI/3));
 fill("#b57583");
 arc(100,446.41,(3*r/6),(3*r/6),(2*PI/3),(-2*PI/3));
 fill("#a1657f");
 arc(100,446.41,(2*r/6),(2*r/6),(2*PI/3),(-2*PI/3));
 fill("#96758a");
 arc(100,446.41,(r/6),(r/6),(2*PI/3),(-2*PI/3));
 //arc4
 fill("#b20018");
 arc(100,446.41,200,200,(PI/3),(2*PI/3));
 fill("#7d0005");
 arc(100,446.41,(5*r/6),(5*r/6),(PI/3),(2*PI/3));
 fill("#67001d");
 arc(100,446.41,(4*r/6),(4*r/6),(PI/3),(2*PI/3));
 fill("#4e183c");
 arc(100,446.41,(3*r/6),(3*r/6),(PI/3),(2*PI/3));
 fill("#4c1044");
 arc(100,446.41,(2*r/6),(2*r/6),(PI/3),(2*PI/3));
 fill("#130a40");
 arc(100,446.41,(r/6),(r/6),(PI/3),(2*PI/3));
 
 
  //circle5
 //arc1
 fill("#334c8e");
 arc(300,446.41,200,200,(-PI/3),(PI/3));
 fill("#3a477c");
 arc(300,446.41,(5*r/6),(5*r/6),(-PI/3),(PI/3));
 fill("#23497a");
 arc(300,446.41,(4*r/6),(4*r/6),(-PI/3),(PI/3));
 fill("#00346a");
 arc(300,446.41,(3*r/6),(3*r/6),(-PI/3),(PI/3));
 fill("#072851");
 arc(300,446.41,(2*r/6),(2*r/6),(-PI/3),(PI/3));
 fill("#011828");
 arc(300,446.41,(r/6),(r/6),(-PI/3),(PI/3));
 //arc2
 fill("#a50801");
 arc(300,446.41,200,200,(-2*PI/3),(-PI/3));
 fill("#960102");
 arc(300,446.41,(5*r/6),(5*r/6),(-2*PI/3),(-PI/3));
 fill("#7d0004");
 arc(300,446.41,(4*r/6),(4*r/6),(-2*PI/3),(-PI/3));
 fill("#6d0303");
 arc(300,446.41,(3*r/6),(3*r/6),(-2*PI/3),(-PI/3));
 fill("#5b0203");
 arc(300,446.41,(2*r/6),(2*r/6),(-2*PI/3),(-PI/3));
 fill("#3b0200");
 arc(300,446.41,(r/6),(r/6),(-2*PI/3),(-PI/3));
  //arc3
  fill("#334c8e");
 arc(300,446.41,200,200,(2*PI/3),(-2*PI/3));
 fill("#3a477c");
 arc(300,446.41,(5*r/6),(5*r/6),(2*PI/3),(-2*PI/3));
 fill("#23497a");
 arc(300,446.41,(4*r/6),(4*r/6),(2*PI/3),(-2*PI/3));
 fill("#00346a");
 arc(300,446.41,(3*r/6),(3*r/6),(2*PI/3),(-2*PI/3));
 fill("#072851");
 arc(300,446.41,(2*r/6),(2*r/6),(2*PI/3),(-2*PI/3));
 fill("#011828");
 arc(300,446.41,(r/6),(r/6),(2*PI/3),(-2*PI/3));
 //arc4
 fill("#b20018");
 arc(300,446.41,200,200,(PI/3),(2*PI/3));
 fill("#7d0005");
 arc(300,446.41,(5*r/6),(5*r/6),(PI/3),(2*PI/3));
 fill("#67001d");
 arc(300,446.41,(4*r/6),(4*r/6),(PI/3),(2*PI/3));
 fill("#4e183c");
 arc(300,446.41,(3*r/6),(3*r/6),(PI/3),(2*PI/3));
 fill("#4c1044");
 arc(300,446.41,(2*r/6),(2*r/6),(PI/3),(2*PI/3));
 fill("#130a40");
 arc(300,446.41,(r/6),(r/6),(PI/3),(2*PI/3));
 
   //circle6
 //arc1
 fill("#e77165");
 arc(500,446.41,200,200,(-PI/3),(PI/3));
 fill("#cf6267");
 arc(500,446.41,(5*r/6),(5*r/6),(-PI/3),(PI/3));
 fill("#c0656c");
 arc(500,446.41,(4*r/6),(4*r/6),(-PI/3),(PI/3));
 fill("#b57583");
 arc(500,446.41,(3*r/6),(3*r/6),(-PI/3),(PI/3));
 fill("#a1657f");
 arc(500,446.41,(2*r/6),(2*r/6),(-PI/3),(PI/3));
 fill("#96758a");
 arc(500,446.41,(r/6),(r/6),(-PI/3),(PI/3));
 //arc2
 fill("#9faa99");
 arc(500,446.41,200,200,(-2*PI/3),(-PI/3));
 fill("#889e9c");
 arc(500,446.41,(5*r/6),(5*r/6),(-2*PI/3),(-PI/3));
 fill("#7d8e96");
 arc(500,446.41,(4*r/6),(4*r/6),(-2*PI/3),(-PI/3));
 fill("#69818f");
 arc(500,446.41,(3*r/6),(3*r/6),(-2*PI/3),(-PI/3));
 fill("#607d9b");
 arc(500,446.41,(2*r/6),(2*r/6),(-2*PI/3),(-PI/3));
  fill("#686c7e");
 arc(500,446.41,(r/6),(r/6),(-2*PI/3),(-PI/3));
  //arc3
 fill("#334c8e");
 arc(500,446.41,200,200,(2*PI/3),(-2*PI/3));
 fill("#3a477c");
 arc(500,446.41,(5*r/6),(5*r/6),(2*PI/3),(-2*PI/3));
 fill("#23497a");
 arc(500,446.41,(4*r/6),(4*r/6),(2*PI/3),(-2*PI/3));
 fill("#00346a");
 arc(500,446.41,(3*r/6),(3*r/6),(2*PI/3),(-2*PI/3));
 fill("#072851");
 arc(500,446.41,(2*r/6),(2*r/6),(2*PI/3),(-2*PI/3));
 fill("#011828");
 arc(500,446.41,(r/6),(r/6),(2*PI/3),(-2*PI/3));
 //arc4
 fill("#b20018");
 arc(500,446.41,200,200,(PI/3),(2*PI/3));
 fill("#7d0005");
 arc(500,446.41,(5*r/6),(5*r/6),(PI/3),(2*PI/3));
 fill("#67001d");
 arc(500,446.41,(4*r/6),(4*r/6),(PI/3),(2*PI/3));
 fill("#4e183c");
 arc(500,446.41,(3*r/6),(3*r/6),(PI/3),(2*PI/3));
 fill("#4c1044");
 arc(500,446.41,(2*r/6),(2*r/6),(PI/3),(2*PI/3));
 fill("#130a40");
 arc(500,446.41,(r/6),(r/6),(PI/3),(2*PI/3)); 
 
}