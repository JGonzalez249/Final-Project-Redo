
# How to use:
- Use this link to access the project: https://jgonzalez249.github.io/Final-Project-Redo/
- Use slider under program to speed up for newer generations
- Press S to save run and use it in the next model.

# What is used?
- p5js
- p5js.collide2d library for better collisions
- tensorFlow.js for the ML

# Final-Project-Redo
 -Massive ML Failure in Unity
<p>This was supposed to be a Unity ML project but problems early into the project force me to try again due to incompatiblities and missing dependencies with the Unity Editor, Python, and ML-Agents packages, once I got it set up, ML training was taking place, however, problems with Colliders within the engine made the first hundreds of generations flawed. Needed to redo the level in order to fix the problems with walls and the goal for the agent. Eventually, first week ended with some training, however, the brain model was not improving.</p> 

<p>The second week saw errors building due to minor version incompatiblities interfering with port 5004 in Unity due to Python and the ML-Agents packages in Unity not playing nice with each other. Fortunately, I knew the cause of the issues, however, when attempting to fix it, I unknownly made things worse for myself when I tried to get the correct packages during the middle of the second week that would make the project open on Safe Mode and I could not fix the issue in the editor or vscode. On November 29th, my Unity project was toast, I needed to start over, I tried many times to start over with new local repositories. I tried to make it work but the same problems started to creep up (I suspect issues with Windows 11 and some incompatiblities with the newer slightly more unstable OS) and I decided to quickly change directions into something more simple.</p>

 -Quick change to p5js and tensorFlow
<p>Using what I already knew about p5js, I decided to try ml5js (later switcing to tensorFlow), since it looked like a good substitute for a ML project. It required me to learn a bit of ml5js and tensorFlow but I wanted to try it, I didn't know what to make but I at least wanted try to something instead of nothing. Of course, I ran into minor issues but nothing insurmountable. Eventually, I would create something to show but github is currently not playing nice with current the project in this repository, especially since it had the previous Unity project nested in another folder. Needed to fix the problems but current hardware issues with my ISP provided modem/router combination makes updating this repo a time consuming affair due to insufficent bandwidth with my mobile data.</p>

<p> I used many tutorials in order to make this project, as I had no idea how ML worked in processing. Originally, I wanted to use a previous project for the AI to learn, to play Asteroids, but decided for something simpler instead which was a Flappy Bird clone but with the AI playing instead of the player. Eventually, I got it to work, however, I feel like I could definitely improve the brain model. There is also some memory leak problems that needs to be addressed.</p>

# Tutorials and Rsources Used
- TensorFlow Examples from Github (https://github.com/tensorflow/tfjs-examples)

- Quick Start on what TensorFlow js is and can do (https://www.youtube.com/watch?v=Y_XM3Bu-4yc)

- Used for introduction of Tensors by The Coding Train (https://www.youtube.com/watch?v=D-XzAeVvMkg)

- The tutorial used mostly for this project, credit goes to the Coding Train (https://www.youtube.com/watch?v=cdUNkwXx-I4)

- For memory management and leaks, The Coding Train (https://www.youtube.com/watch?v=FbSlrm2GmC8)