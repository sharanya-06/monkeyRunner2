var bruno;
var brunoImg;
var invisibleGround,grass,grassImg;
var score = 0;
var bombGroup,bombImg;
var reset,resetImg,gameover,gameoverImg;

var banana,bananaImg,bananaGroup;


function preload(){
      bananaImg = loadImage("banana3.png");
    brunoImg = loadAnimation("Monkey1.jpg","Monkey2.jpg","Monkey3.jpg");
    grassImg = loadImage("grass2.jpg");
    bombImg = loadImage("bomb.png");
    resetImg = loadImage("reset2.png");
    gameoverImg = loadImage("gameover.jpg");

  
   
}
function setup(){
    createCanvas(400,240);
    
   
    
    bruno  = createSprite(40,100,20,50);
   // banana = createSprite(200,100,10,10);
    bruno.addAnimation("monkey",brunoImg);
    bruno.scale=0.5;
   // banana.addImage(bananaImg);
   // banana.scale=0.02;
    

    grass = createSprite(1000,250,400,20);
    grass.addImage(grassImg);
    grass.scale =1.9;
    grass.x = grass.width /2;
    grass.velocityX = -(6 + 3*score/100);

  
    invisibleGround = createSprite(100,225,400,10);
    invisibleGround.visible = false;

    

    gameover = createSprite(200,100);
  gameover.addImage(gameoverImg);
  gameover.scale=0.15;
  gameover.visible=false;
  
  reset = createSprite(200,140);
  reset.addImage(resetImg);
  reset.scale=0.15;
  reset.visible=false;
  
    bombGroup = new Group();
    bananaGroup = new Group();

    score = 0;
}
function draw(){
    background("255");
    text("Score: "+ score, 300,50);

    score = score + Math.round(getFrameRate()/60);
    grass.velocityX = -(6 + 3*score/100);
  

   if(keyDown("space") && bruno.y >= 129) {
        bruno.velocityY = -12;
      }

     
      bruno.depth +=2;
    
      bruno.velocityY = bruno.velocityY + 0.8
      if (grass.x < 10){
          grass.x = grass.width/2;
         }

      bruno.collide(invisibleGround);
      spawnBanana();

      if(bananaGroup.isTouching(bruno)){

      }

      if(bananaGroup.isTouching(bruno)){
        for(var i =0; i<bananaGroup.length; i++){
          if(bananaGroup[i].isTouching(bruno)){
            bananaGroup[i].destroy();
           
          }
         
        }
      }
    
    drawSprites();
}

function spawnBanana() {
  if(frameCount % 60 === 0) {
    banana = createSprite(200,180,10,10);

    banana.x = Math.round(random(200,350));
    banana.addImage(bananaImg);
    banana.scale = 0.02;
    banana.velocityX = -3;
    banana.lifetime = 200;
    banana.depth = bruno.depth;
    bruno.depth = bruno.depth + 1;
    bananaGroup.add(banana);
}

}




