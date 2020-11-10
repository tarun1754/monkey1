
var monkey , monkey_running;
var banana ,banana1,bananaImage, obstacle,obstacle1, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 300);
  monkey=createSprite(50,200,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  ground=createSprite(200,235,400,10)
  FoodGroup=createGroup();
  obstacleGroup=createGroup();
  score = 0;
}


function draw() {
  background ("white");
  text("Score: "+ score, 350,10);
  monkey.velocityY=4;
  if(keyDown("space")){
    monkey.velocityY=-4;
  }
  if(monkey.isTouching(FoodGroup)){
     score=score+1;
     }
    if(monkey.isTouching(obstacleGroup)){
     obstacleGroup.destoryGroup();
     FoodGroup.destoryGroup();
     banana.lifetime=-1;
     obstacles.lifetime=-1;
     }
  monkey.collide(ground);
  banana1();
  obstacle1();
  drawSprites();
  
}
function banana1(){
    if (frameCount % 80 === 0) {
    banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(40,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 450;
    banana.setCollider("circle",0,0,40);
    FoodGroup.add(banana);
  }
}
function obstacle1(){
    if (frameCount % 250 === 0) {
    obstacle = createSprite(600,120,40,10);
    obstacle.y = Math.round(random(211,211));
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    obstacle.lifetime = 450;
    
    obstacleGroup.add(obstacle);
  }
}
