var car1, car2
var coin
var coinNumber
var fuel
var car1Img,car2Img
var coinImg

function setup() {
  createCanvas(800,800);
  coin = createSprite(60,60,10,10);
  coin.addImage(coinImg);
  coin.scale = 0.1
  

  car1 = createSprite(300,600,40,40);
  car1.addImage(car1Img)

  car2 = createSprite(600,600,40,40);
  car2.addImage(car2Img)
  

}
function preload(){
 coinImg = loadImage("assets/coin.png")
 car1Img = loadImage("assets/carimg.png")
 car2Img = loadImage("assets/car2img.png")
}

function draw() {
  background(255,255,255);  
 textSize(16)
 text(coinNumber,100,60)
 coinNumber = 0;

 if(car1.isTouching(coin)){
   coinNumber = coinNumber + 1;
 }

  drawSprites();
}