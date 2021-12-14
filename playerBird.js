class Player {
    constructor() {
        this.x = 50;
        this.y = height / 2;
        this.size = 16;
        this.gravity = 1;
        this.lift = -15;
        this.velocity = 0;
        this.alive = false;
    }

    draw(){
        stroke(255);
        fill(0,0,255);
        ellipse(this.x, this.y, this.size, this.size);
    }

    up(){
        this.velocity += this.lift;
    }

    update() {
        //this.playerScore++;     
        this.velocity += this.gravity;  
        this.y += this.velocity; 
            
    }
}
