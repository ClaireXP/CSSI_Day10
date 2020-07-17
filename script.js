/* global
*  keyCode
*  LEFT_ARROW
*  RIGHT_ARROW
*  loadImage, createCanvas, background
*  random
*/

let alien;
let rows = [];
let xCan = 600;
let yCan = 400;
let ship1, ship2;

function preload(){
  alien = loadImage("https://cdn.glitch.com/fb3362c7-8e96-4501-923c-3d371f422938%2FCartoon-alien%20(1).svg?v=1595006239809");
  ship1 = loadImage("https://cdn.glitch.com/fb3362c7-8e96-4501-923c-3d371f422938%2F219-2191732_15-flat-vector-spaceship-sprites-spaceship-sprites-png.jpg?v=1595007334346");
  ship2 = loadImage("https://cdn.glitch.com/fb3362c7-8e96-4501-923c-3d371f422938%2Fsprite-spacecraft-pixel-art-png-favpng-j4PMyPriD0M3YygPNeW918nh6.jpg?v=1595007328133");
}

function setup(){
  createCanvas(xCan, yCan);
  background(200, 200, 200);
  
  ship1 = {
    x: xCan/4 - 50,
    y: yCan - 75,
    w: 50,
  }
  
  ship2 = {
    x: xCan/4 - 50,
    y: yCan - 75,
    w: 50,
  }
}

function draw(){
  
}

function keyPressed(){
  //when a or d pressed, move ship 1
  //when LEFT_ARROW or RIGHT_ARROW pressed, move ship 2
  if (keyCode === 'A') { 
  
      ship1.x -= 10;
  }
  
  if (keyCode === 'D'){
      
      ship1.x += 10;
    
  }
  
  //when LEFT_ARROW or RIGHT_ARROW pressed, move ship 2
  if (keyCode === LEFT_ARROW) { 
  
      ship2.x -= 10;
  }
  
  if (keyCode === RIGHT_ARROW){
       
      ship2.x += 10;
    
  }
  
}

class enemy{
  constructor(x){
    this.x = x;
    this.y = 0;
    this.w = 50;
    this.vel = 5;
  }
  
  updateY(){
    this.y += this.vel;
  }
}

class row{
  constructor(offset){  
    let aliens = [];
    let numAliens = random([2, 3, 4])
    for(let i=1; i<=numAliens; i++){
      aliens.push(new enemy((xCan/2)/numAliens*i + offset));
    }
    
    rows.push(aliens);
  }
}