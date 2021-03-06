
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope3,rope4,rope5;
var roofObject;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rope1 = new rope(bobObject1.body,roofObject.body,-bobDiameter*2,0)
	rope2 = new rope(bobObject2.body,roofObject.body,-bobDiameter*2,0)
	rope3 = new rope(bobObject3.body,roofObject.body,-bobDiameter*2,0)
	rope4 = new rope(bobObject4.body,roofObject.body,-bobDiameter*2,0)
	rope5 = new rope(bobObject5.body,roofObject.body,-bobDiameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();


  drawSprites();
 
}



