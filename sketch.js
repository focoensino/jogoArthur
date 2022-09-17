const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;


let engine;
let world;
var ground
var rope
var fruit_con
var bgImg
var coelhoImg
var coelho
function preload(){
  bgImg = loadImage("./assts/bg.png")
  fruitImg  = loadImage("./assts/candy.png")
  coelhoImg = loadImage("./assts/per1.png")

  bk_snog = loadSound("assts/sound1.mp3")
  sad_sound = loadSound('assts/sad.wav')
  cut_sound = loadSound('assts/rope_cut.mp3')
  eating_sound = loadSound('assts/eating_sound.mp3')
  air = loadSound('assts/air.wav')
  
 blink = loadAnimation('assts/per1.png')
 eat = loadAnimation('assts/bocaaber.png', 'assts/per1.png') 

sad = loadAnimation('assts/per2.png')
eat.looping = false
}


function setup() 
{
  createCanvas(500,700);
  imageMode(CENTER)
  coelho = createSprite(250,610,40,40)
  coelho.addImage(coelhoImg)
  coelho.scale =0.3
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
 ground = new Ground(200,690,600,20)
 rope = new Rope(6,{x:245,y:30})
 var fruitOptions ={
  density:0.001

 }
  fruit = Bodies.circle(300,300,15,fruitOptions)
  Composite.add(rope.body, fruit)

  fruit_con= new Link(rope,fruit)
//butom1
  button = createImg("assts/tes.png")
  button.position(230, 5)
button.size(50, 50)
button.mouseClicked(drop)
//butom2
button2 = createImg("assts/tes.png")
button2.position(430, 200)
button2.size(50, 50)
button2.mouseClicked(drop2)

//butom3
button3 = createImg("assts/tes.png")
button3.position(430, 20)
button3.size(50, 50)
button3.mouseClicked(drop3)

//butom
mutebtm = createImg("assts/mute.png")
mutebtm .position(450, 20)
mutebtm .size(50, 50)
mutebtm .mouseClicked(mute)






  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}

function draw() 
{
  background(51);
image(bgImg,  width/2, height/2 ,500, 700)
  
  Engine.update(engine);
ground.show()
rope.show()
image(fruitImg, fruit.position.x, fruit.position.y,60,60)  
drawSprites()


}

  function drop(){
    cut_sound.play()
  rope.break()
    fruit_con.corta()
    fruit_con = null
  }

  function drop2(){
    cut_sound.play()
  rope2.break()
    fruit_con_2.corta()
    fruit_con_2 = null
  }

  function drop3(){
    cut_sound.play()
  rope3.break()
    fruit_con_3.corta()
    fruit_con_3 = null
  }

function mute (){
  if (bk_song.isPLaying()){
    bk_song.stop()
    }else{
      bk_song.play()
    }

  }























