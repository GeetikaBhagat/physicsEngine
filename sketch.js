const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;

function setup(){
  var canvas = createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;
console.log("hello");
  object = Bodies.rectangle(200,100,50,50);
  World.add(world.object);
  console.log("world");
}

function draw(){
  background(220);
  rectMode(CENTER);
  rect(300,300,10,10);
}