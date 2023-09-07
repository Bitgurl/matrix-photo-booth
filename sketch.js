var capture;
var art;
var artX = 100;


function preload() {
  art = loadImage("anxiety.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);

  capture.hide();
  imageMode(CENTER);
  frameRate(3)
}

function draw() {
  makeGrid();
  image(capture, mouseX, mouseY, 100, 100);
  
  image(art, artX, 300, 200, 200);
  
  artX = artX + random(-200,300);

}



function mousePressed() {
  makeGrid();
}

function makeGrid() {
  for (let y = 0; y < height; y += 20) {
    for (let x = 0; x < width; x += 60) {
      fill(random(55), random(225), random(25));

      image(art, mouseX, mouseY, 200, 200);
      rect(x, y, random(20), random(200));
    }
  }
}