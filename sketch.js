const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject,dustbin1,ground;
var world;

function preload()
{
	img = "image/paper.png"
}

function setup() {
	createCanvas(1250, 650);
	rectMode(CENTER);
	
	 

	engine = Engine.create();
	world = engine.world;

	paperObject=new Paper(200,600,70);
	ground=new Ground(width/2,620,width,20);
	dustbin1=new Dustbin(1200,510,20,200);
	dustbin2=new Dustbin(1000,510,20,200);
	dustbin3=new Dustbin(1100,600,200,20);
	
	
	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
  background("white");
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paperObject.display();
   
}

function keyPressed(){
	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});	
	}
}


