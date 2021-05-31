
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1=new Bob(300,500,50)
	bobObject2=new Bob(350,500,50)
	bobObject3=new Bob(400,500,50)
	bobObject4=new Bob(450,500,50)
	bobObject5=new Bob(500,500,50)

	rope1=new Rope(bobObject1.body,{x:270,y:100})
	rope2=new Rope(bobObject2.body,{x:330, y:100})
	rope3= new Rope(bobObject3.body,{x:420, y:100})
	rope4= new Rope(bobObject4.body,{x:490, y:100})
	rope5= new Rope(bobObject5.body,{x:560, y:100})

	roof=new Roof(420, 100, 500, 20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();
  drawSprites();
 
}



