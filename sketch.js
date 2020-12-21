
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground
var score=0;
var GameState,invisble;
var PLAY,END;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  PLAY=1;
  GameState=PLAY;
  END=0;
  
  FoodGroup=NewGroup();
  obstacleGroup=NewGroup();
    
  //creating monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_runnng);
  monkey.scale=0.1;
  
  ground=createSprite(250,405,1000,10);
  ground.x=ground.width/2;
  //ground.debug=true
  
  invisible=createSprite(250,407,1000,10);
  invisible.x=ground.width/2;
  
  }


function draw() {
  background("white")
  
  if(GameState===PLAY){
    
    //reset the ground
    if(ground.x<0){
      ground.x=ground.width/2;
    }
    
  if(invisible.x<0){
    invisible.x = invisible.width/2;
    }
    invisible.velocityX=-5;
    
    if(keyDown)
    
  
  
  
  

  
}






