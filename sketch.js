var car1, car2
var coin
var coinNumber = 0;
var fuel
var car1Img,car2Img
var coinImg
var backgroundImg
var bg
var fuel
var fuelImg
var fuelNumber = 0;
var x
var y 
var play = 1;
var end = 0;
var gameState = play

function setup() {
  createCanvas(800,800);
  bg = createSprite(400,400);
  bg.addImage(backgroundImg)

  coin = createSprite(60,60,10,10);
  coin.addImage(coinImg);
  coin.scale = 0.1
  
 
  car1 = createSprite(300,600,40,40);
  car1.addImage(car1Img)
  car2 = createSprite(600,600,40,40);
  car2.addImage(car2Img)


  fuel = createSprite(750,60,40,40)
  fuel.scale = 0.2
  fuel.addImage(fuelImg);
  
  bg.velocityY = 5;
  fuelGroup = createGroup();
  
}
function preload(){
 coinImg = loadImage("assets/coin.png")
 car1Img = loadImage("assets/carimg.png")
 car2Img = loadImage("assets/car2img.png")
 backgroundImg= loadImage("assets/background.jpg")
 fuelImg = loadImage("assets/fuelcan.png")
}

function draw() {
  background(255,255,255) 

if(gameState===play){
  spawnFuel();

  if(car1.isTouching(coin)){
    coinNumber = coinNumber + 1;
  }
  
  if (bg.y > 400){
   bg.y = height/2;
 }
 bg.velocityY = 5;
 
 
 if(keyDown("A")){
   car1.x = car1.x + -8;
 }
 if(keyDown("D")){
   car1.x = car1.x + 8;
  
 }
 if(fuelGroup.isTouching(car1)){
   fuelGroup.destroyEach();
   fuelNumber = fuelNumber +1;
 }
   drawSprites();
   textSize(25)
   text(coinNumber,100,68)
   
   textSize(25)
   text(fuelNumber,710,75)
   
}else if(gameState === end){
  textSize(40)
  text("GAMEOVER",450,450)
}
 
}
function spawnFuel(){
if(frameCount % 60 === 0){
fuelTank = createSprite(x,y,50,50)
fuelTank.velocityY = Math.round(random(8,14))
fuelTank.velocityX = Math.round(random(-10,10))
fuelTank.addImage(fuelImg)
fuelTank.scale = 0.2
 fuelGroup.add(fuelTank)
 
}

x = 450
y = 0

}