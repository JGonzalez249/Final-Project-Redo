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
        return false;
      }
    }
    return true;
  }

  up() {
    this.velocity += this.lift;
  }

  collide(pipes){
    if (this.y < pipes[i].top || this.y > height - pipes[i].bottom) {
      if (this.x > pipes[i].x && this.x < pipes[i].x + pipes[i].w) {
        console.log('player hit pipe')
        this.alive = false;
        return false;
      }
    }
    this.alive = true;
    return true;
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
    if(this.y > height || this.y < 0){
      console.log("Dead Offscreen")

    }
  }
  update() {
    if(!this.alive) return;
    
    this.velocity += this.gravity;
    this.y += this.velocity;
  }
}
