const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	 
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,685,800,20);
	tree = new Tree(650,450,80,500);
	boy = new Boy(175,550,50,50);
	stone = new Stone(157,550,20,20);
	mango1 = new Mango(600,320,20,20);
	mango2 = new Mango(570,220,20,20);
	mango3 = new Mango(700,300,20,20);
	mango4 = new Mango(630,200,20,20);
	mango5 = new Mango(720,230,20,20);
	mango6 = new Mango(660,375,20,20);
	chain= new Chain(stone.body,boy.body);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  boy.display();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  chain.display();
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX, y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}