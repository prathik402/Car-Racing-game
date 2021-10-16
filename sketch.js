var car1, car2
var obstacle
var obstacleImg
var coin
var coinNumber1 = 0;
var coinNumber2 = 0;
var fuel
var car1Img,car2Img
var coinImg
var backgroundImg
var bg
var fuel
var fuelImg
var fuelNumber1 = 0;
var fuelNumber2 = 0;
var x
var y 
var car1Lives = 3;
var car2Lives = 3;
var life 
var lifeImg
var play = 1;
var end = 0;
var gameState = play
var restart
var restartImg

function preload(){
  coinImg = loadImage("assets/coin.png")
  car1Img = loadImage("assets/carimg.png")
  car2Img = loadImage("assets/car2img.png")
  backgroundImg= loadImage("assets/background.jpg")
  fuelImg = loadImage("assets/fuelcan.png")
  obstacleImg = loadImage("assets/obstacleSprite.png")
  lifeImg = loadImage("assets/heartSprite.png")
  restartImg = loadImage("assets/restart.png")
 }
function setup() {
  createCanvas(windowWidth,windowHeight);
  bg = createSprite(1000,400);
  bg.addImage(backgroundImg)
  bg.scale = 1.9


  coin = createSprite(60,60,10,10);
  coin.addImage(coinImg);
  coin.scale = 0.1
  
 
  car1 = createSprite(300,600,width/2 ,40);
  car1.addImage(car1Img)
  car2 = createSprite(600,600,40,40);
  car2.addImage(car2Img)


  fuel = createSprite(1750,60,40,40)
  fuel.scale = 0.2
  fuel.addImage(fuelImg);
  life = createSprite(1000,50)
  life.addImage(lifeImg)
  life.scale = 0.2
  
  restart = createSprite(400,600)
  restart.addImage(restartImg)
  restart.scale = 0.5

  coinGroup = createGroup();
  fuelGroup = createGroup();
  obstacleGroup = createGroup();
  
}


function draw() {
  background(255,255,255) 

if(gameState===play){
  restart.visible = false;
  
  car1.visible = true;
  car2.visible= true;
  bg.visible=true;
  spawnFuel();
  spawnCoins();
  spawnObstacles();

  for(var a = 0; a < coinGroup.length; a++ ){
    if(car1.isTouching(coinGroup[a])){
      coinNumber1 = coinNumber1 + 1;
      coinGroup[a].destroy();
    }
  }
  for(var a = 0; a < coinGroup.length; a++ ){
    if(car2.isTouching(coinGroup[a])){
      coinNumber2 = coinNumber2 + 1;
      coinGroup[a].destroy();
    }
  }
  
  if (bg.y > 800){
  bg.y = height/2;
 }
 bg.velocityY = 5;
 console.log(bg.y);
 
 if(keyDown("A")){
   car1.x = car1.x + -8;
 }
 if(keyDown("D")){
   car1.x = car1.x + 8;
  
 }
 if(keyDown("LEFT_ARROW")){
  car2.x = car2.x + -8;
}
if(keyDown("RIGHT_ARROW")){
  car2.x = car2.x + 8;
 
}
 if(fuelGroup.isTouching(car1)){
   fuelGroup.destroyEach();
   fuelNumber1 = fuelNumber1 +1;
 }
 if(fuelGroup.isTouching(car2)){
  fuelGroup.destroyEach();
  fuelNumber2 = fuelNumber2 +1;
}
if(obstacleGroup.isTouching(car1)){
  obstacleGroup.destroyEach();
  car1Lives = car1Lives - 1;
  
}
if(obstacleGroup.isTouching(car2)){
  obstacleGroup.destroyEach();
  car2Lives = car2Lives - 1;
  
}
if(car1Lives === 0){
  gameState = end
}
if(car2Lives === 0){
  gameState = end
}

drawSprites();  

   
   textSize(25)
   textStyle(BOLD);
   fill("Red")
   text(coinNumber1,100,68)
   
   textSize(25)
   textStyle(BOLD);
   fill("Red")
   text(fuelNumber1,1710,75)
   textSize(25)
   textStyle(BOLD);
   fill("Orange")
   text(fuelNumber1,1710,100)

   textSize(25)
   textStyle(BOLD);
   fill("Orange")
   text(coinNumber2,100,100)

   textSize(25)
   textStyle(BOLD);
   fill("Red")
   text(car1Lives,950,50)

   textSize(25)
   textStyle(BOLD);
   fill("Orange")
   text(car2Lives,950,80)
   

   
}else if(gameState === end){
  text("GAMEOVER",300,450)
  background("lightblue") 
  textSize(40)
  restart.visible = true;
  bg.visible = false;
  car1.visible = false;
  car2.visible = false;
  coinGroup.destroyEach();
  fuelGroup.destroyEach();
  
  life.visible = false; 
  textSize(25)
  textStyle(BOLD);
   fill("Red")
   text(coinNumber1,100,68)
   
   textSize(25)
   textStyle(BOLD);
   fill("Red")
   text(fuelNumber1,1710,75)
   textSize(25)
   textStyle(BOLD);
   fill("Orange")
   text(fuelNumber1,1710,100)

   textSize(25)
   textStyle(BOLD);
   fill("Orange")
   text(coinNumber2,100,100)
   coin = createSprite(60,60,10,10);
   coin.addImage(coinImg);
   coin.scale = 0.1
   fuel = createSprite(1750,60,40,40)
   fuel.scale = 0.2
   fuel.addImage(fuelImg);

  
 
  drawSprites();
  
}
if(mousePressedOver(restart)){
  reset();
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
 fuel.lifetime = 800
}

x = 450
y = 0

}
function spawnCoins(){
if(frameCount % 60 === 0){
 coin = createSprite(Math.round(random(50,750)),0,50,50)
 coin.velocityY = Math.round(random(5,8)) 
 //coin.velocityX = Math.round(random(-10,10))
 coin.addImage(coinImg)
coinGroup.add(coin)
coin.lifetime = 800
coin.scale = 0.15
}
}
function spawnObstacles(){
if(frameCount % 100 === 0){
  obstacle = createSprite(Math.round(random(50,750)),0)
  obstacle.velocityY = Math.round(random(6,10))
  obstacle.addImage(obstacleImg)
  obstacleGroup.add(obstacle)
  obstacle.lifetime = 800
  obstacle.scale = 0.2
}
}
function reset(){
  gameState = play;
  

}
