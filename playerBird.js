class Player {
    constructor(x,y) {
        this.pos = createVector(x,y)
        this.size = 16;
        this.velocity = 0;
      //this.playerScore = 0;
    }

    draw(){
        stroke(255);
        fill(0,0,255);
        ellipse(this.x, this.y, this.size, this.size);
    }

    update() {
        //this.playerScore++;       
        this.y += this.velocity;
          
    }
}
