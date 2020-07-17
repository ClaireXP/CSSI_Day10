/* global
  
*/

let alien;
let rows = [];
let xCan = 600;
let yCan = 400;
let ship1 = [];
let ship2;

function preload(){
  alien = loadImage("https://cdn.glitch.com/fb3362c7-8e96-4501-923c-3d371f422938%2FCartoon-alien%20(1).svg?v=1595006239809");
}

function setup(){
  createCanvas(xCan, yCan);
  background(200);
  
  ship1 = {
    
  }
  
  ship2 = {
    
  }
}

function draw(){
  
}

function keyPressed(){
  //when a or d pressed, move ship 1
  
  
  
  
  
  //when LEFT_ARROW or RIGHT_ARROW pressed, move ship 2
  if (keyCode === LEFT_ARROW) { 
  
      ship1 -
  }
  
  if (keyCode === RIGHT_ARROW){
    
    
  }
  
  
  
  
  
  
  
}

class enemy{
  constructor(x, y, x1, y1, x2, y2){
    this.x = x;
    this.y = y;
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.w = 50;
  }
}

class row{
  constructor(){  
    let aliens = [];
    for(let i=0; i<random([2, 3, 4]); i++){
      aliens.push(new enemy(width/2));
    }
  }
}