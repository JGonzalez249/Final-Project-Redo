class Player {
  constructor() {
    this.x = 50;
    this.y = height / 2;

    this.size = 16;
    this.gravity = 0.2;
    this.lift = -8;
    this.velocity = 0;
    this.alive = true;
  }

  draw() {
    stroke(255);
    fill(0, 0, 255);
    ellipse(this.x, this.y, this.size, this.size);
  }

  hits(pipes) {
    if (this.y < pipes.top || this.y > height - pipes.bottom) {
      if (this.x > pipes.x && this.x < pipes.x + pipes.w) {
        console.log("player hit pipe");
        return true;
      }
    }
    return false;
  }

  up() {
    this.velocity += this.lift;
  }
  reset() {
    this.x = 50;
    this.y = height / 2;
    this.gravity = 0.2;
    this.lift = -8;
    this.velocity = 0;
    this.alive = true;
  }
  offScreen() {
    this.alive = false;
    //console.log("Dead Offscreen")
    return this.y > height || this.y < 0;
  }
  update() {
    if(!this.alive) return;
    
    this.velocity += this.gravity;
    this.y += this.velocity;
  }
}
