
const TOTAL = 500;
let birds = [];
let savedBirds = [];
let pipes = [];
let counter = 0;
let slider;

let player;
let highScore;
let generationScore;


function setup() {
  createCanvas(600, 400);
  //canvas.parent('canvas__container');
  slider = createSlider(1, 10, 1);
  tf.setBackend('cpu'); //Amount of data is so small that it should not affect cpu
  for (let i = 0; i < TOTAL; i++) {
    birds[i] = new Bird();
  }
  player = new Player(50, height / 2);
}

function draw() {
  for (let n = 0; n < slider.value(); n++) {
    if (counter % 30 == 0) {
      pipes.push(new Pipe());
    }
    counter++;

    for (let i = pipes.length - 1; i >= 0; i--) {
      pipes[i].update();

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

    if (birds.length === 0) {
      counter = 0;
      nextGeneration();
      generationScore ++;
      pipes = [];
    }

  }

  
  background(0);
  
  for (let bird of birds) {
    bird.draw();
  }
  
  for (let pipe of pipes) {
    pipe.draw();
  }
  
  player.draw();
  player.update();
}

function keyPressed() {
  if (key == ' ') {
    playerBird.up();
    console.log("SPACE");
  }
}

function saveBestBird(){
  let json = {}
  json = bestBird.brain;

  saveJson(json, 'BirdBrainModel.json')
}

// function getBrainData(json){
//   let birdBrain = NeuralNetwork.deserialize(json)
//   bestBird.brain = birdBrain;
// }
