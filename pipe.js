class Pipe {
  constructor() {
    this.spacing = 100;
    this.top = random(height / 6, (3 / 4) * height);
    this.bottom = height - (this.top + this.spacing);
    this.x = width;
    this.w = 45;
    this.speed = 3;
    this.highlight = false;
    this.playerHighlight = false;
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

  hitsPlayer(player) {
    if (player.y < this.top || player.y > height - this.bottom) {
      if (player.x > this.x && player.x < this.x + this.w) {
        player.alive = false;
        this.playerHighlight = true;
        return true;
      }
    }
    player.alive = true;
    this.playerHighlight = false;
    return false;
  }

  draw() {
    fill(255);
    if (this.highlight === true) {
      fill(255, 0, 0);
    }

    if (this.playerHighlight === true) {
      fill(0, 0, 255);
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