function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);
  text('Press the mouse to toggle automatic memory management', width / 2, 50);
  text(`Memory Mode: ${tensorMode()}`, width / 2, 100);
  const t1 = createTensor(0);
  ten.scope(() => {
    const t2 = createTensor(0); // not returned, so cleaned up automatically
    const t3 = createTensor(0);
    return t3;
  });
  const n = ten.memory().numTensors;
  text(`# of Tensors: ${n}`, width / 2, 150);
}

function mousePressed() {
  if (tensorMode() === AUTO) {
    tensorMode(MANUAL);
  } else {
    tensorMode(AUTO);
  }
}