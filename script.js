// global constants
const clueHoldTime = 1000; // how long to hold each clue's light/sound
const cluePauseTime = 333; // how long to pause in between clues
const nextClueWaitTime = 1000; // how long to wait before starting playback of the clue sequence

// Global Variables
var pattern = [2, 2, 4, 3, 2, 1, 2, 4]; // keeps track of the pattern(default pattern)
var progress = 0; // tracks how far the game is into the pattern
var gamePlaying = false; // checks if the game is active
var tonePlaying = false; // checks if the tone is actively playing
var volume = 0.5; // must be between 0.0 and 1.0
var guessCounter = 0; // tracks how far the user is into the pattern

function startGame() {
  //initialize game variables
  pattern = [];
  // creates an array of max size 4-8 with a random pattern
  for (let i = 0; i < Math.floor(Math.random() * 9) + 4; i++) 
  {
    pattern.push(Math.floor(Math.random() * 10) + 1);
  }
  progress = 0;
  gamePlaying = true;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  // swaps the Stop and Start buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 110,
  2: 123.47,
  3: 130.81,
  4: 146.83,
  5: 164.81,
  6: 174.61,
  7: 196.00,
  8: 220.00,
  9: 246.94
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  // check if the guess is correct
  if (pattern[guessCounter] == btn) {
    // continue game
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        // end game
        winGame();
      } else {
        // play sequence with next step added
        progress++;
        playClueSequence();
      }
    } else {
      // user keeps going with their round of guesses
      guessCounter++;
    }
  } else {
    // end game
    loseGame();
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game Over. You won!");
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
