function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
var ballY = 0;
var ballSpeed = 5;

var ballY2 = 0;
var ballSpeed2 = 5;

var ballZ = 0;
var ballSpeedZ = 5;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(200,100,100);
  
  ellipse(150, ballY, 50);
  ellipse(200, ballY2, 50);
  ellipse(250, ballZ, 50);

  ballY = ballY + ballSpeed;
  ballY2 = ballY2 + ballSpeed2;
  ballZ = ballZ + ballSpeedZ;
  
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
  
  if (ballY2 == 0) {
    ballSpeed2 = -ballSpeed2;
  }
  // bounce the third ball
    if (ballZ > height) {
      ballSpeedZ = -ballSpeedZ;
  }
  
    if (ballZ == 0) {
      ballSpeedZ = -ballSpeedZ;
    }
}
