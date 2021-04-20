const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score=0;

function preload(){
    polygon_img=loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1600,700);
    engine = Engine.create();
    world = engine.world;

    polygon=Bodies.circle(50,200,20);
    World.add(world,polygon);

    ground = new Ground(800,height,1600,40);

    stand=new Ground(780,400,280,10);

    box1=new Box(660,360,30,40);
    box2=new Box(690,360,30,40);
    box3=new Box(720,360,30,40);
    box4=new Box(750,360,30,40);
    box5=new Box(780,360,30,40);
    box6=new Box(810,360,30,40);
    box7=new Box(840,360,30,40);
    box8=new Box(870,360,30,40);
    box9=new Box(900,360,30,40);

    box10=new Box(690,320,30,40);
    box11=new Box(720,320,30,40);
    box12=new Box(750,320,30,40);
    box13=new Box(780,320,30,40);
    box14=new Box(810,320,30,40);
    box15=new Box(840,320,30,40);
    box16=new Box(870,320,30,40);

    box17=new Box(720,280,30,40);
    box18=new Box(750,280,30,40);
    box19=new Box(780,280,30,40);
    box20=new Box(810,280,30,40);
    box21=new Box(840,280,30,40);
    
    box22=new Box(750,240,30,40);
    box23=new Box(780,240,30,40);
    box24=new Box(810,240,30,40);

    box25=new Box(780,200,30,40);

    slingshot=new SlingShot(this.polygon,{x:200,y:300});

}

function draw(){
    if(getBackgroundImg)
      background(backgroundColor);
    Engine.update(engine);
    ground.display();
    stand.display();
    textSize(30);
    text("Score: "+score,750,40)

    fill("skyblue");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();

    fill("lightpink");
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();

    fill("lightgreen");
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    
    fill("lemonchiffon");
    box22.display();
    box23.display();
    box24.display();

    fill("lightgray");
    box25.display();

    imageMode(CENTER)
    image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
    // polygon.display();
    slingshot.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();
    getBackgroundImg()
}

  function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
  }

  function mouseReleased(){
    slingshot.fly();
  }

  function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body);
    }
}

async function getBackgroundImg(){
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON=await response.json();
  var datetime=responseJSON.datetime;
  var hour=datetime.slice(11,13);
  console.log(hour);
  if(hour>=6 && hour<=18){
    var backgroundColor="skyblue";
  }
  else{
    var backgroundColor="black";
  }
}