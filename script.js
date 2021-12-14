const TOTAL = 250;
let birds = [];
let savedBirds = [];
let pipes = [];
let counter = 0;
let slider;
let resetButton;

let player;

function setup() {
  createCanvas(600, 400);
  //canvas.parent('canvas__container');
  slider = createSlider(1, 10, 1);
  resetButton = createButton("Reset Player");
  
  resetButton.mousePressed(resetGame)
  tf.setBackend("cpu"); //Amount of data is so small that it should not affect cpu
  for (let i = 0; i < TOTAL; i++) {
    birds[i] = new Bird();
  }
  player = new Player();
}

function draw() {
  for (let n = 0; n < slider.value(); n++) {
    if (counter % 75 == 0) {
      pipes.push(new Pipe());
    }
    counter++;

    for (let i = pipes.length - 1; i >= 0; i--) {
      pipes[i].update();

      if(pipes[i].hits(player)){
        //console.log('player hit pipe')
        player.alive = false;
      }
      // This section cuts pipes and birds from the array
      for (let j = birds.length - 1; j >= 0; j--) {
        if (pipes[i].hits(birds[j])) {
          savedBirds.push(birds.splice(j, 1)[0]);
        }
      }

      if (pipes[i].offscreen()) {
        pipes.splice(i, 1);
      }
    }


    for (let i = birds.length - 1; i >= 0; i--) {
      if (birds[i].offScreen()) {
        savedBirds.push(birds.splice(i, 1)[0]);
      }
    }



    for (let bird of birds) {
      bird.think(pipes);
      bird.update();
    }

    if (birds.length === 0 && !player.alive) {
      counter = 0;
      nextGeneration();
      pipes = [];
      player.reset();
    }
  }

  background(0);

  for (let bird of birds) {
    bird.draw();
  }

  for (let pipe of pipes) {
    pipe.draw();
  }
  if(player.alive){
    player.draw();
    player.update();
  }

}

function keyPressed() {
  if (key == " ") {
    player.up();
    //console.log("SPACE");
  }
}

function resetGame(){
  player.reset();
}

function saveBestBird() {
  let json = {};
  json = bestBird.brain;

  saveJson(json, "BirdBrainModel.json");
}

// function getBrainData(json){
//   let birdBrain = NeuralNetwork.deserialize(json)
//   bestBird.brain = birdBrain;
// }
