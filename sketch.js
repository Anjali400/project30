const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine, world;
var Ground;
var Particles,divisions;
var divisionHeight=300;
function setup(){
    var canvas = createCanvas(500,400);
    engine = Engine.create();
    world = engine.world;
Ground=new ground(width/2,380,500,10)
   Particles=new particles(100,100,20,20)
   divisions=new Divisions(100,100,10,10)
}

function draw(){
    background(0);
    Engine.update(engine);
    Ground.display()
    Particles.display()
   divisions.display()
   var Particles=[]
    if(frameCount%60===0){
      Particles.push=new particles(random(width/2-10,width/2+10),10,10)
      
    }
    
     for (var j=0;j<this.Particles.length;j++){
       Particles[j].display();
    }
    for (var k=0;k<width;k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
}
}