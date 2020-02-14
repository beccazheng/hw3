var ballY = 0;
var ballSpeed = 5;

var ballY2 = 1;
var ballSpeed2 = 5;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(200,100,100);
  
  ellipse(150, ballY, 50);
  ellipse(200, ballY2, 50);

  ballY = ballY + ballSpeed;
  ballY2 = ballY2 + ballSpeed2;
  
  // bounce the first ball
  if (ballY > height) {
    ballSpeed = -ballSpeed;
  }
  
  if (ballY == 0) {
    ballSpeed = -ballSpeed;
  }
  
  // bounce the second ball
  if (ballY2 > height) {
    ballSpeed2 = -ballSpeed2;
  }
  
  if (ballY2 == 1) {
    ballSpeed2 = -ballSpeed2;
  }
}
