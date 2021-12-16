class Bird {
  constructor(brain) {
    this.y = height / 2;
    this.x = 50;

    this.gravity = 1;
    this.lift = -15;
    this.velocity = 0;
    this.size = 16;

    this.score = 0;
    this.fitness = 0;
    if (brain) {
      this.brain = brain.copy();
    } else {
      this.brain = new NeuralNetwork(5, 4, 2);
    }
  }

  draw() {
    stroke(255);
    fill(255, 0, 0, 100);
    ellipse(this.x, this.y, this.size, this.size);
  }

  up() {
    this.velocity += this.lift;
  }

  mutate() {
    this.brain.mutate(0.1);
  }

  think(pipes) {
    // Finds the closest pipe
    let closest = null;
    let closestD = Infinity;
    for (let i = 0; i < pipes.length; i++) {
      let d = pipes[i].x + pipes[i].w - this.x;
      if (d < closestD && d > 0) {
        closest = pipes[i];
        closestD = d;
      }
    }

    // Inputs array to show what inputs are available in the model
    let inputs = [];
    inputs[0] = (this.y / height) * 2;
    inputs[1] = closest.top / height;
    inputs[2] = closest.bottom / height;
    inputs[3] = closest.x / width;
    inputs[4] = this.velocity / 5;
    let output = this.brain.predict(inputs);
    if (output[0] > output[1]) {
      this.up();
    }
  }

  dispose() {
    this.brain.dispose();
  }

  offScreen() {
    return this.y > height || this.y < 0;
  }

  update() {
    this.score++;

    this.velocity += this.gravity;
    this.y += this.velocity;
  }
}