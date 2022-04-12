let r = 1;
let g = 1;
let b = 1;

let vp = 1;
let hp = 1;

function setup() {
  createCanvas(300, 300);
  background(220);
  frameRate(30);
  noStroke();
  rectMode(CENTER);
}

function draw() {
  r = random(10, 15);
  g = random(1, 5);
  b = random(1, 10);
  stroke(5);
  noFill();
  //fill(r * hp, g * hp, b * hp);
  
  rect(50 * hp, 50 * vp, 100, 100);
  
  r = random(0, 100);
  g = random(0, 100);
  b = random(150, 255);
  fill(r, g, b, 40);
  circle(50 * hp, 50 * vp, 85);
  circle(50 * hp, 50 * vp, 55);
  circle(50 * hp, 50 * vp, 25);
  
  hp = hp + 2;
  if(hp > 7){
    vp = vp + 2;
    hp = 1;
  }
  

}