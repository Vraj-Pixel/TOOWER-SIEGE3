
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var box1;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   
	ground = new Ground(400,690,2000,20);
	box1 = new Box(480,443,40,60);
	box2 = new Box(530,443,40,60);
	box3 = new Box(580,443,40,60);
	box4 = new Box(630,443,40,60)
	box5 = new Box(680,443,40,60)
	box6 = new Box(730,443,40,60)

	box7 = new Box(505,375,40,60)
	box8 = new Box(555,375,40,60)
	box9 = new Box(605,375,40,60)
	box10 = new Box(655,375,40,60)
	box11 = new Box(705,375,40,60)

    box12 = new Box(530,310,40,60)
	box13 = new Box(580,310,40,60)
	box14 = new Box(630,310,40,60)
	box15 = new Box(680,310,40,60)

    box16 = new Box(555,245,40,60)
	box17 = new Box(605,245,40,60)
	box18 = new Box(655,245,40,60)
  
    box19 = new Box(580,180,40,60)
	box20 = new Box(630,180,40,60)

	box21 = new Box(605,115,40,60)

	box22 = new Ground(605,500,340,40);
 
	ball = new Ball()
	sling = new Slingshot(ball.body,{x:150,y:200})
    
	//box1 = Bodies.rectangle(width/2,550,width,10,{isStatic:true});
	//World.add(world, box1);
	//Engine.run(engine);
  
}


function draw() {

  Engine.update(engine)

  rectMode(CENTER);
  background("red");
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  box21.display()
  box22.display();

  ball.display()
  sling.display()
}
 
function keyPressed () {

if (keyCode === UP_ARROW) {

Matter.Body.applyForce(ball.body,ball.body.position,{x:350,y:-350})

   }

}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}
 

function mouseReleased(){
    sling.fly();
}

function keyPressed(){

if(keyCode == 32){
    
sling.attach()

}

}