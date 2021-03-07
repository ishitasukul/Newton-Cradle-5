
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobDiameter= bobDiameter;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	ground= new Ground (400,100,600,60);
	bob1= new Bob (150,550);
	bob2= new Bob (274,550);
	bob3= new Bob (398,550);
	bob4= new Bob (522,550);
	bob5= new Bob (646,550);
	

	 rope1= new Rope (bob1.body,ground.body,-248,0);
	 rope2= new Rope(bob2.body,ground.body,-124,0);
	 rope3= new Rope(bob3.body,ground.body,0,0);
	 rope4= new Rope(bob4.body,ground.body,124,0);
	 rope5= new Rope(bob5.body,ground.body,248,0);

  // World.gravity;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("turquoise");


  ground.display();
  

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  
  drawSprites();
 
}



function keyPressed(){
	if (keyDown(UP_ARROW)){
	  Matter.Body.applyForce(bob1.body,bob1.body.position, {x:-350, y:-400});
	}
  
}