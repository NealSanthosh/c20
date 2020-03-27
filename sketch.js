
var r;


function setup(){
  createCanvas(800,400);
  
  r = 10;

}


function draw(){
  background(World.mouseX,World.mouseY,World.mouseX / World.mouseY); 

  fill("blue");
  ellipse(World.mouseX,World.mouseY, r*2, r*2);

  drawSprites();
}