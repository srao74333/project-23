var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var boxSide1,boxSide2,boxSide3;
var boxSide1body,boxSide2body,boxSide3body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	boxSide1=createSprite(width/2, 647, 200, 20);
	boxSide1.shapeColor = "Red";

	boxSide2=createSprite(500, 603, 20, 100);
	boxSide2.shapeColor = "Red";

	boxSide3=createSprite(300, 603, 20, 100);
	boxSide3.shapeColor = "Red";



	engine = Engine.create();
	world = engine.world;
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true});
 	World.add(world, ground);

	boxSide1body= Bodies.rectangle(width/2, 647, 200, 20, {isStatic:true});
	World.add(world, boxSide1body);

	boxSide2body= Bodies.rectangle(100, 603, 200, 20, {isStatic:true});
	World.add(world, boxSide2body);

	boxSide3body= Bodies.rectangle(100, 603, 200, 20, {isStatic:true});
	World.add(world, boxSide3body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyDown(DOWN_ARROW)) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:false});
	World.add(world, packageBody);
	
    
  }
}



