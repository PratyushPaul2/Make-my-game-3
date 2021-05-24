
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var golemAttack,golemRun,golemDeath;
var wraith1Attack,wraith1Die;
var wraith2Attack,wraith2Die;
var wraith3Attack,wraith3Die;
var bg;
var background1,invisGround;
var score=0;
var enemy;
var eG,pG;
var gameState=1;
var gameOver,enemy;

function preload()
{
	golemRun=loadAnimation("Golem_02_Walking_000.png","Golem_02_Walking_001.png","Golem_02_Walking_002.png","Golem_02_Walking_003.png","Golem_02_Walking_004.png",
	"Golem_02_Walking_005.png","Golem_02_Walking_006.png","Golem_02_Walking_007.png","Golem_02_Walking_008.png",
	"Golem_02_Walking_009.png","Golem_02_Walking_010.png","Golem_02_Walking_011.png","Golem_02_Walking_012.png","Golem_02_Walking_013.png","Golem_02_Walking_014.png",
	"Golem_02_Walking_015.png","Golem_02_Walking_016.png","Golem_02_Walking_017.png");

	golemAttack=loadAnimation("Golem_02_Attacking_000.png","Golem_02_Attacking_001.png","Golem_02_Attacking_003.png","Golem_02_Attacking_004.png",
	"Golem_02_Attacking_005.png","Golem_02_Attacking_006.png","Golem_02_Attacking_007.png","Golem_02_Attacking_008.png","Golem_02_Attacking_009.png",
	"Golem_02_Attacking_010.png","Golem_02_Attacking_011.png");

	golemDeath=loadAnimation("Golem_02_Dying_000.png","Golem_02_Dying_001.png","Golem_02_Dying_002.png","Golem_02_Dying_003.png","Golem_02_Dying_004.png","Golem_02_Dying_005.png",
	"Golem_02_Dying_006.png","Golem_02_Dying_007.png","Golem_02_Dying_008.png","Golem_02_Dying_009.png","Golem_02_Dying_010.png","Golem_02_Dying_011.png","Golem_02_Dying_012.png",
	"Golem_02_Dying_013.png","Golem_02_Dying_014.png");

	wraith1Attack=loadAnimation("Wraith_01_Attack_000.png","Wraith_01_Attack_001.png","Wraith_01_Attack_002.png","Wraith_01_Attack_003.png",
	"Wraith_01_Attack_004.png","Wraith_01_Attack_005.png","Wraith_01_Attack_006.png","Wraith_01_Attack_007.png","Wraith_01_Attack_008.png",
	"Wraith_01_Attack_009.png","Wraith_01_Attack_010.png","Wraith_01_Attack_011.png");

	wraith1Die=loadAnimation("Wraith_01_Dying_000.png","Wraith_01_Dying_001.png","Wraith_01_Dying_002.png","Wraith_01_Dying_003.png","Wraith_01_Dying_004.png",
	"Wraith_01_Dying_005.png","Wraith_01_Dying_006.png","Wraith_01_Dying_007.png","Wraith_01_Dying_008.png","Wraith_01_Dying_009.png",
	"Wraith_01_Dying_010.png","Wraith_01_Dying_011.png","Wraith_01_Dying_012.png","Wraith_01_Dying_013.png","Wraith_01_Dying_014.png");

	wraith2Attack=loadAnimation("Wraith_02_Attack_000.png","Wraith_02_Attack_001.png","Wraith_02_Attack_002.png","Wraith_02_Attack_003.png","Wraith_02_Attack_004.png",
	"Wraith_02_Attack_005.png","Wraith_02_Attack_006.png","Wraith_02_Attack_007.png","Wraith_02_Attack_008.png","Wraith_02_Attack_009.png",
	"Wraith_02_Attack_010.png","Wraith_02_Attack_011.png");

	wraith2Die=loadAnimation("Wraith_02_Dying_000.png","Wraith_02_Dying_001.png","Wraith_02_Dying_002.png","Wraith_02_Dying_003.png","Wraith_02_Dying_004.png",
	"Wraith_02_Dying_005.png","Wraith_02_Dying_006.png","Wraith_02_Dying_007.png","Wraith_02_Dying_008.png","Wraith_02_Dying_009.png",
	"Wraith_02_Dying_010.png","Wraith_02_Dying_011.png","Wraith_02_Dying_012.png","Wraith_02_Dying_013.png","Wraith_02_Dying_014.png");

	wraith3Attack=loadAnimation("Wraith_03_Attack_000.png","Wraith_03_Attack_001.png","Wraith_03_Attack_002.png","Wraith_03_Attack_003.png","Wraith_03_Attack_004.png",
	"Wraith_03_Attack_005.png","Wraith_03_Attack_006.png","Wraith_03_Attack_007.png","Wraith_03_Attack_008.png","Wraith_03_Attack_009.png","Wraith_03_Attack_010.png",
	"Wraith_03_Attack_011.png");

	wraith3Die=loadAnimation("Wraith_03_Dying_000.png","Wraith_03_Dying_001.png","Wraith_03_Dying_002.png","Wraith_03_Dying_003.png","Wraith_03_Dying_004.png",
	"Wraith_03_Dying_005.png","Wraith_03_Dying_006.png","Wraith_03_Dying_007.png","Wraith_03_Dying_008.png","Wraith_03_Dying_009.png",
	"Wraith_03_Dying_010.png","Wraith_03_Dying_011.png","Wraith_03_Dying_012.png","Wraith_03_Dying_013.png","Wraith_03_Dying_014.png");

	bg=loadImage("War2.png");
	gameOverIMG=loadImage("Gameovr-removebg-preview.png");



	
}

function setup() {
	createCanvas(displayWidth+200, displayHeight+100);


	engine = Engine.create();
	world = engine.world;

	background1=createSprite(displayWidth/2+100,(displayHeight+100)/2,displayWidth+200,displayHeight+100);
	background1.addImage(bg);
	//background1.scale=0.78;

	background1.velocityX=-4;

	invisGround=createSprite(displayWidth-540,displayHeight+80,displayWidth+260,20);
	invisGround.visible=false;
	//invisGround.velocityX=-4;

	golem=createSprite(100,displayHeight-10,50,50);
	golem.addAnimation("running",golemRun);
	golem.addAnimation("attack",golemAttack);
	golem.addAnimation("dying",golemDeath);
	golem.scale=0.4;
	golem.debug=true
	golem.setCollider("rectangle", 0,0, 550,250);

	gameOver=createSprite(displayWidth/2+100,displayHeight/2+50,50,50);
	gameOver.addImage(gameOverIMG);
	gameOver.visible=false;
	gameOver.scale=1.5;


	eG=new Group();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  if(gameState===1){
  

  if(background1.x<displayWidth/3){
	  background1.x=displayWidth/2+100;
  }

 

  spawnObstacles();

 if(eG.isTouching(golem)&&keyWentDown("space")){
  score=score+10; 
  eG.destroyEach();
  golem.changeAnimation("attack",golemAttack);
  } else  if(eG.isTouching(golem)&&keyWentUp("space")){
	eG.destroyEach();
	gameState=2;
}

 

  if(keyWentUp("space")){
	golem.changeAnimation("running",golemRun);
  }

  if(golem.x-enemy.x===0){
	  gameState=2;
  }
}
if(gameState===2){
	//golem.changeAnimation("dying",golemDeath);
	fill("red");
	textSize(40);
	text("GAME OVER", 400,400);
	background1.velocityX=0;
	golem.x=100;
	gameOver.visible=true;
	//background1.visible=false;
	//background("black");
	//golem.velocityX=-1;
	golem.visible=false
}
  
  drawSprites();
  fill("red")
  textSize(30);
  text("Your Score: "+score,30,30)
 
}

function spawnObstacles(){
	
	if(frameCount%100===0){
	enemy=createSprite(displayWidth+40, displayHeight, 20,20);
	
	var rand=Math.round(random(1,3));
	
	switch (rand) {
		case 1: enemy.addAnimation("moving",wraith1Attack);
			
			break;
			case 2: enemy.addAnimation("moving",wraith2Attack);
			
			break;
			case 3: enemy.addAnimation("moving",wraith3Attack);
			
			break;
	
		default:
			break;
	}
	enemy.velocityX=-16
	//enemy.debug=true;
	enemy.setCollider("rectangle",0,0,150,150)
	enemy.lifetime=(displayWidth+200)/4+10;
	enemy.scale=0.5;
	eG.add(enemy);
	
}
	
}