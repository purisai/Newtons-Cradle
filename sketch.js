
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;



function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	/*



	roof=new Roof(420, 100, 500, 20)*/

	roof=new Roof(width/2, height/4, width/7, 20)
	Bd=40
	startBobX=width/2
	startBobY=height/4+500
	bobObject1=new Bob(startBobX-Bd*2,startBobY,Bd)
	bobObject2=new Bob(startBobX-Bd,startBobY,Bd)
	bobObject3=new Bob(startBobX,startBobY,Bd)
	bobObject4=new Bob(startBobX+Bd,startBobY,Bd)
	bobObject5=new Bob(startBobX+Bd*2,startBobY,Bd)

	rope1=new Rope(bobObject1.body,roof.body, -Bd*2,0)
	rope2=new Rope(bobObject2.body,roof.body, -Bd,0)
	rope3= new Rope(bobObject3.body,roof.body,0,0)
	rope4= new Rope(bobObject4.body,roof.body,Bd,0)
	rope5= new Rope(bobObject5.body,roof.body,Bd*2,0)

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

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50, y:-50})
	}
}

