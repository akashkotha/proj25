
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,paper,ground;
var world;
var dustbin_image;

function preload()
{
	
 dustbin_image=loadImage("dustbin.png")
}

function setup() {
	createCanvas(1250, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(200,450,70);
	ground=new Ground(width/2,620,width,20)
	dustbin1=new Dustbin(1200,510,20,200);
	dustbin2=new Dustbin(1000,510,20,200);
	dustbin3=new Dustbin(1100,600,180,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  paper.display();
  image(dustbin_image,1030,420,180,190);
  ground.display();
  

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145});
	}
}



