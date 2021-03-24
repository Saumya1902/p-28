const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy, m,s;
var launchingForce=100;



function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	  world = engine.world;
    

  //Create the Bodies Here.
  
  ground = new Ground(400,690,800,50);
  stoneObj=new stone(235,420,30);
   
  mango1 = new mango(700,375,50,50);
	mango2 = new mango(600,300,50,50);
	mango3 = new mango(650,340,50,50);
	mango4 = new mango(560,300,50,50);
	mango5 = new mango(470,340,50,50);
	mango6 = new mango(760,340,50,50);
	mango7 = new mango(780,390,50,50);
   
  slingshot = new SlingShot(stoneObj.body,{x:100, y:500});

  tree = new Tree(650,450,500,500);
	boy = new Boy(170,600,200,250);

}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.run(engine);
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  boy.display();
  ground.display();
  slingshot.display()
  stoneObj.display();

  detectcollision(stoneObj,mango1);
  detectcollision(stoneObj,mango2);
  detectcollision(stoneObj,mango3);
  detectcollision(stoneObj,mango4);
  detectcollision(stoneObj,mango5);
  detectcollision(stoneObj,mango6);
  detectcollision(stoneObj,mango7);

  drawSprites();
 
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stoneObj.body,{x:100,y:500});
    slingshot.attach(stoneObj.body);
  }
}

function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function detectcollision(lstone,lmango){
  m=lmango.body.position;
  s=lstone.body.position;

  var distance=dist(s.x,s.y,m.x,m.y);
    if(distance<=lmango.r+lstone.r) 
    {
        Matter.Body.setStatic(lmango.body,false);
    }
}