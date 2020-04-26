var bullet, weight, speed;
var wall, damage;


function setup() {
  createCanvas(1600,400);
   bullet = createSprite(200, 200, 20, 50);
   bullet.shapeColor = "white";
   bullet.velocityX = 5;

   wall = createSprite(1350 , 200, random(22,83),400);
   wall.shapeColor = (80,80,80);

   weight = random(30,52);
   speed = random(223,321);

}

function draw() {
  background(0,0,0);

  damage = 0.5*weight*speed*speed/wall.width *wall.width*wall.width;
  
  Collided(bullet,wall);
  
  drawSprites();
}

