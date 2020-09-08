var bullet1 , bullet2 , bullet3 ;
var wall1 , wall2 , wall3;
var thickness1,thickness2,thickness3;
var weight1 , weight2 , weight3;
var speed1 , speed2 , speed3;
function setup() {
  createCanvas(1600,1200);

  bullet1 = createSprite(50,200,50,50);
  bullet2= createSprite(50,600,50,50);
  bullet3 = createSprite(50,1000,50,50);

  wall1 = createSprite(1200,200,20,height/2);
  wall2 = createSprite(1200,600,20,height/2);
  wall3 = createSprite(1200,1000,20,height/2);

  

  bullet1.shapeColor = color(200);
  bullet2.shapeColor = color(200);
  bullet3.shapeColor = color(200);

  wall1.shapeColor = color(80,80,80);
  wall2.shapeColor = color(80,80,80);
  wall3.shapeColor = color(80,80,80);
  
  weight1 = random(55,90);
  weight2 = random(50,95);
  weight3 = random(50,85);

  thickness1 = random(45,89);
  thickness2 = random(5,83);
  thickness3 = random(72,83);

  speed1 = random(190,320);
  speed2 = random(170,321);
  speed3 = random(165,300);
}

function draw() {
  background(0); 
  hascollided1(bullet1,wall1);
  bullet1.velocityX = speed1;
  if (hascollided1(bullet1,wall1)){
      bullet1.velocityX=0;
        var damage=(0.5*weight1*speed1*speed1)/(thickness1*thickness1*thickness1);
       if (damage>=10){
           bullet1.shapeColor=color(225,0,0);
          } 
        if (damage<10){
           bullet1.shapeColor=color(0,225,0);
          }  
  }   
  hascollided2(bullet2,wall2);
  bullet2.velocityX = speed2;
  if (hascollided2(bullet2,wall2)){
    bullet2.velocityX=0;
       var damage=(0.5*weight2*speed2*speed2)/(thickness2*thickness2*thickness2);
     if (damage>=10){
         bullet2.shapeColor=color(225,0,0);
        }
      if (damage<10){
         bullet2.shapeColor=color(0,225,0);
        }  
 }
 hascollided3(bullet3,wall3);
  bullet3.velocityX = speed3;
  if (hascollided3(bullet3,wall3)){
  bullet3.velocityX=0;
     var damage=(0.5*weight3*speed3*speed3)/(thickness3*thickness3*thickness3);
    if (damage>=10){
       bullet3.shapeColor=color(225,0,0);
      }
    if (damage<10){
       bullet3.shapeColor=color(0,225,0);
      }  
     }
     

  drawSprites();
}
function hascollided1(bullet1,wall1){
  bullet1RightEdge=bullet1.x+bullet1.width;
  wall1LeftEdge=wall1.x;
  if (bullet1RightEdge>=wall1LeftEdge){
    return true
  }
  return false
}
function hascollided2(bullet2,wall2){
  bullet2RightEdge=bullet2.x+bullet2.width;
  wall2LeftEdge=wall2.x;
  if (bullet2RightEdge>=wall2LeftEdge){
    return true
  }
  return false
}
function hascollided3(bullet3,wall3){
  bullet3RightEdge=bullet3.x+bullet3.width;
  wall3LeftEdge=wall3.x;
  if (bullet3RightEdge>=wall3LeftEdge){
    return true
  }
  return false
}

