var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground=new Ground(400,680,800,10)
  dustbin1=new Dustbin(600,660,90,10)
  dustbin2=new Dustbin(550,617,10,90)
  dustbin3=new Dustbin(650,617,10,90)
  paper1=new paper(145,670,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

ground.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();
paper1.display();
  drawSprites();

 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:13,y:-13});
	}
}
