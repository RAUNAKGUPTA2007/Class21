var fixedRect, movingRect;
var lib, li;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  lib = createSprite(100,200,80,80);
  lib.shapeColor = "blue";
  li = createSprite(600,50,50,80);
  li.velocityY = 3;
  fixedRect.velocityY = -3;
  movingRect.velocityX = -2;
  lib.velocityX = 2;

}

function draw() {
  background(0,0,0);  
  bounce(fixedRect,li);
  bounce(movingRect,lib);

  
  drawSprites();
}
