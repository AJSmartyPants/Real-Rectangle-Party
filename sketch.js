var fixedRect, movingRect;
var ball, wall, otherw;
function setup() {
  createCanvas(400, 400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  ball = createSprite(200, 100, 30, 30);
  wall = createSprite(100, 100, 10, 50);
  otherw = createSprite(300, 100, 10, 50);
  ball.velocityX = 5;
}

function draw() {
  background("pink");  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  //console.log(movingRect.x - fixedRect.x);
  
  bounceOff(ball, wall);
  bounceOff(ball, otherw);

  if (touching(movingRect, fixedRect)){
    movingRect.shapeColor = "purple";
    fixedRect.shapeColor = "yellow";
  } else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }



  drawSprites();
}
