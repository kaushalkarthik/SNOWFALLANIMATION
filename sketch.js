var bg;
var bgImg;
var snow1;


function preload(){
  bgImg = loadImage("snow3.jpg");
}



function setup() {
  createCanvas(1200,800);
  bg = createSprite(700,350,800,400);
  bg.addImage(bgImg);
  bg.scale=1.5

  snow1=new Snow(700,400,40,40)
  snow1.scale=0.1
}

function draw() {
  background(255,255,255);  
  fill("black")
  text(mouseX+","+mouseY,mouseX,mouseY)

  drawSprites();
}