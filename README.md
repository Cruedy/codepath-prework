# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Cassandra Ruedy**

Time spent: **7** hours spent in total

[Link to project](https://liberating-aluminum-puffin.glitch.me)

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [ ] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [ ] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Buttons are broken up into rows of three

## Video Walkthrough (GIF)

[Testing Losing & Winning, no audio](https://github.com/Cruedy/codepath-prework/blob/main/Loss_-win_-no-audio.gif)
<br>
[Testing audio](https://github.com/Cruedy/codepath-prework/blob/main/audio.gif)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   I used w3schools to learn more about stylesheets and javascript. I used pages.mtu.edu to figure out the different frequencies
   of different notes.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   I wanted to do the prework by just reading the instructions and not looking at the code that was provided, so I ended up
   having a lot of smaller errors that took me a while to find. I also had trouble testing the javascript in the project. I
   ended up having to use window alerts to print things out from the functions. This used a large portion of my time because I
   wrote the code on my own, then had to check it side-by-side with the provided code. I also needed to add a lot of extra comments
   to help keep track of what certain variables or blocks of code were doing. When I started adding my additional features, I
   struggled to figure out what I wanted the interface to look like. I would add new features, but then the site would end up
   looking too messy, so I had to keep making adjustments. I wanted the game to be a 3x3 square, so I had to add breaks to create
   rows of three blocks. Also, when I added the Math.random function to make the game choose a different pattern each time it played,
   the sequence didn't play. I realized that Math.random output floating point numbers, so I had to use Math.floor. I also had to read
   up on how to set a range for Math.random. There was also a point when I was recording one of the gifs where the sequence would stop
   playing mid-game, so I went through my javscript code and found some syntax errors in playClueSequence() that I accidentally put in
   when I was testing some other additions that didn't end up working.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
   In high school, web development was actually a part of computer science that I enjoyed doing in my free time. I created a portfolio site
   for videos that I made. I really enjoyed making the site, but now when I go check on the site, I realize that the website was very poorly
   designed. I want to figure out how to actually make a site look well designed. I also want to be able to make the website function more
   smoothly. I also feel like I know a lot about the frontend of sites, but I want to learn more about how the backend/javascript part of how
   websites work.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   I was thinking about adding a ripple effect to the buttons, so that when you pressed a button a ripple would appear from the point in
   the button that you clicked on. I also was considering adding enough buttons to the game so that I could have a full piano keyboard. This
   would be that so in addition to playing the game, you could also play songs. I don't really know much about pianos, but I used a site to
   figure out the frequencies of certain keys on a keyboard so that I could set the frequencies of the keys that I used to nicer sounds.

## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/af9ca0e075bf48639554281d0e257b47)

## License

    Copyright Cassandra Ruedy

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
