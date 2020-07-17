/* global
*  keyCode
*  LEFT_ARROW
*  RIGHT_ARROW
*  loadImage, createCanvas, background
*  random, line, HSB
*  noStroke, fill, ellipse, stroke
*  windowWidth, windowHeight, image
*  key
*/

let alien, ship1, ship2, ship1Pic, ship2Pic;
let rows = [];
let xCan = 800;
let yCan = 800;

function preload(){
  alien = loadImage("https://cdn.glitch.com/fb3362c7-8e96-4501-923c-3d371f422938%2FCartoon-alien%20(1).svg?v=1595006239809");
  ship1Pic = loadImage("https://cdn.glitch.com/fb3362c7-8e96-4501-923c-3d371f422938%2F219-2191732_15-flat-vector-spaceship-sprites-spaceship-sprites-png.jpg?v=1595007334346");
  ship2Pic = loadImage("https://cdn.glitch.com/fb3362c7-8e96-4501-923c-3d371f422938%2Fsprite-spacecraft-pixel-art-png-favpng-j4PMyPriD0M3YygPNeW918nh6.jpg?v=1595007328133");
}

function setup(){
  createCanvas(xCan, yCan);
  
  ship1 = {
    x: xCan/4 - 25,
    y: yCan - 75,
    w: 50,
  }
  
  ship2 = {
    x: 3*xCan/4 - 25,
    y: yCan - 75,
    w: 50,
  }
  
  rows.push(new row());
}

function draw(){
  background(0);
  
  //Drawing stars 
  for (var i = 0; i < 50; i++) {
    var x = random(windowWidth); 
    var y = random(windowHeight-200);
    noStroke(); 
    fill(255, 255, 0); 
    ellipse(x, y, 2, 2);
  }
  
  stroke(255);
  line(xCan/2, 0, xCan/2, yCan);
  
  //Draw Ships
  image(ship1Pic, ship1.x, ship1.y, ship1.w, ship1.w);
  image(ship2Pic, ship2.x, ship2.y, ship2.w, ship2.w);
  
  //Draw a row of aliens
  for(const r of rows){
    r.updateAliens();
  }
}

function ShootingStar(){
  this.x = random(windowWidth-200);
  this.y = random(windowHeight-400); 
  this.w = 6;
  this.h = 4;   
}

ShootingStar.prototype.draw = function() {
  noStroke();
  fill(255, 255, 0);
  ellipse(this.x, this.y, this.w, this.h);
  if (this.h > 0) {
    this.h -= 0.5;
  }
  this.w += 7;
  this.x += 5;
}

function keyPressed(){
  //when a or d pressed, move ship 1
  //when LEFT_ARROW or RIGHT_ARROW pressed, move ship 2
  if (key == 'a' && ship1>0) ship1.x -= 10;
  if (key == 'd' && ship1<xCan/2-ship1.w) ship1.x += 10;
  
  //when LEFT_ARROW or RIGHT_ARROW pressed, move ship 2
  if (keyCode == LEFT_ARROW && ship2>xCan/2) ship2.x -= 10;
  if (keyCode == RIGHT_ARROW && ship2<xCan-ship2.w) ship2.x += 10;
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
    this.aliens = [];
    let numAliens = random([2, 3, 4])
    for(let i=1; i<=numAliens; i++){
      this.aliens.push(new enemy((xCan/2)/numAliens*i + offset));
    }
  }
  
  updateAliens(){
    for(const a of this.aliens){
      a.updateY();
      image(alien, a.x, a.y, a.w, a.w)
    }
  }
  
  // collide(){
  //   for(const a of this.aliens){
  //     let hit = collideRectCircle();
  //   }
  // }
}