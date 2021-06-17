
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground1=new Ground(400,685,800,30)
   stone1=new Stone(100,120,20)
   box1=new Box(700,600,60,320)
   wire=new Wire(stone1.body, {x:100,y:310})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();

  ground1.display();
  stone1.display()
  wire.display()
  box1.display()
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  wire.fly()
}

