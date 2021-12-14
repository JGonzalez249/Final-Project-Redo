class Pipe {

  constructor() {
    this.spacing = 150;
    this.top = random(height / 6, 3 / 4 * height);
    this.bottom = height - (this.top + this.spacing);
    this.x = width;
    this.w = 30;
    this.speed = 5;
    this.highlight = false;
  }

  hits(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        this.highlight = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
  }

  hitsPlayer(playerBird){
    if (playerBird.pos.y < this.top || playerBird.pos.y > height - this.bottom) {
      if (playerBird.pos.x > this.x && playerBird.pos.x < this.x + this.w) {
        this.highlight = true;
        playerBird.alive = false;
        return true;
      }
    }
    this.highlight = false;
    playerBird.alive = true;
    return false;
  }

  draw() {
    fill(255);
    if(this.highlight === true) {
      fill(255,0,0);
    }
    rectMode(CORNER);
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height - this.bottom, this.w, this.bottom);
  }

  update() {
    this.x -= this.speed;
  }

  offscreen() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }
}
