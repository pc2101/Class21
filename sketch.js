var moving, fixed;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
 fixed= createSprite(200, 200, 50, 50);
 moving = createSprite(300,300,100,50)
 fixed.shapeColor= "green"
 moving.shapeColor= "green"

 gameObject1 = createSprite(100, 100, 50, 50);
 gameObject1.shapeColor = "green";
 gameObject2 = createSprite(200, 100, 50, 50);
 gameObject2.shapeColor = "green";
 gameObject3 = createSprite(300, 100, 50, 50);
 gameObject3.shapeColor = "green";
 gameObject4 = createSprite(400, 100, 50, 50);
 gameObject4.shapeColor = "green";

 fixed.velocityY=-2;
 gameObject2.velocityY=2;
}

function draw() {
  background(255,255,255);  
  moving.x= World.mouseX
  moving.y = World.mouseY
  console.log(moving.x-fixed.x)

  if(touching(moving,gameObject1)){
    gameObject1.shapeColor= "red"
    moving.shapeColor= "red"
  } 
  else{
    gameObject1.shapeColor= "green"
    moving.shapeColor= "green" 
  }
  

bounceOff(fixed,gameObject2);

  drawSprites();
}

