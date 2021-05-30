 var Engine = Matter.Engine;
 var World = Matter.World;
 var Events = Matter.Events;
 var Bodies = Matter.Bodies;

var snow = [];
var snow2 = [];
var backgroundImg;
var boy,boyImg;
function preload() {
  backgroundImg = loadImage("snow1.jpg")
 
}

function setup() {
  createCanvas(800, 800);
 
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  



  Engine.run(engine);
	
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
 ground.display();


   if(frameCount%20===0){
     snow.push(new Snow(random(width/2-800, width/2+800), 30,30));
    
   }
 
  for (var j = 0; j < snow.length; j++) {
   
     snow[j].display();
   }
   
   if(frameCount%20===0){
     snow2.push(new Snow(random(width/2-800,width/2+800),50,50));
   }

   for(var i = 0; i < snow2.length; i++){
     snow2[i].display();
   }
      
}
