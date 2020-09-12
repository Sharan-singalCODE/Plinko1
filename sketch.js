const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world
var groundobj,Div1,Div2,Div3,Div4,Div5,Div6,Div7
var plinko1,plinko2,plinko3,plinko4,plinko5,plinko6,plinko7,plinko8,plinko9,plinko10,plinko11,plinko12,plinko13,plinko14,plinko15,plinko16,plinko17,plinko18,plinko19,plinko20
var particles = []
var plinkos = []
var divisions = []
var divisionHeight = 300
function setup() {
 var canvas = createCanvas(480,800);
   
engine = Engine.create()
world = engine.world;
groundobj = new Ground(240,790,480,20)
Div1 = new Division(470,630,20,300)
Div2 = new Division(400,630,20,300)
Div3 = new Division(330,630,20,300)
Div4 = new Division(260,630,20,300)
Div5 = new Division(190,630,20,300)
Div6 = new Division(120,630,20,300)
Div7 = new Division(50,630,20,300)
//particles = new Particle(200,50)
plinko1 = new Plinko(20,200)
plinko2 = new Plinko(100,200)
plinko3 = new Plinko(200,200)
plinko4 = new Plinko(300,200)
plinko5 = new Plinko(400,200)
plinko6 = new Plinko(70,100)
plinko7 = new Plinko(150,100)
plinko8 = new Plinko(250,100)
plinko9 = new Plinko(350,100)
plinko10 = new Plinko(450,100)
plinko11 = new Plinko(70,300)
plinko12 = new Plinko(150,300)
plinko13 = new Plinko(250,300)
plinko14 = new Plinko(350,300)
plinko15 = new Plinko(450,300)
plinko16 = new Plinko(20,400)
plinko17 = new Plinko(100,400)
plinko18 = new Plinko(200,400)
plinko19 = new Plinko(300,400)
plinko20 = new Plinko(400,400)

}

function draw() {
  background(0,255,255);  
  Engine.update(engine)
  groundobj.display()
  Div1.display()
  Div2.display()
  Div3.display()
  Div4.display()
  Div5.display()
  Div6.display()
  Div7.display()
  plinko1.display()
  plinko2.display()
  plinko3.display()
  plinko4.display()
  plinko5.display()
  plinko6.display()
  plinko7.display()
  plinko8.display()
  plinko9.display()
  plinko10.display()
  plinko11.display()
  plinko12.display()
  plinko13.display()
  plinko14.display()
  plinko15.display()
  plinko16.display()
  plinko17.display()
  plinko18.display()
  plinko19.display()
  plinko20.display()
 // particles.display()
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
  }

  for (var j = 40;j<=width;j=j+50){
     plinkos.push(new Plinko(j,75));
    }

for(var j=15;j<=width-10;j=j+50) {
     plinkos.push(new Plinko(j,175));
    }

   for(var j = 0;j<particles.length;j++){
     particles[j].display()
   }
   for(var k =0;k < divisions.length;k++){
     divisions[k].display()
   }

  drawSprites();
}