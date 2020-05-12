const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,ground2;
var part1,part2,part3;
var ball1;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(400,300,800,20);
    ground2 = new Ground(500,120,250,20);
    ground3 = new Ground(420,180,180,20);
    ball1 = new Ball(550,150,35,35);
    ball2 = new Ball(600,50,35,35);
    ball3 = new Ball(470,130,35,35);

    part1 = new Part(125,388,100);
    part2 = new Part(126,372,72);
    part3 = new Part(146,352,60);
   
    // slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(230);
    Engine.update(engine);
    //strokeWeight(4);
    
    fill("white")
  ellipse(130,365,55);
  // rect(80,378,100,15);
  // rect(90,362,80,15);

   ball1.display();
   ball2.display();
   part1.display();
   part2.display();
   part3.display();
  
  ball3.display();
 

    
    // slingshot.display();    
}
