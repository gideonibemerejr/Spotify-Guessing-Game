// Initialize
// 1. Attach event listeners - "Next" Button and "Play" button
// 2. On first time "Next" button is clicked hide rules and show countries, on second   click:
// --- Init all state variables - hide rules, set result to null, and score to 0, song to null
// 3. Render
// 4. Perform Countdown
// 5. When the "Play" button is clicked: if in countdown, clear count down
// 6. After the countdown(either way)
//   - Randomly pick song to display
//     - Show the selection buttons
//       - Update Score
//         - Render

/*----- constants -----*/

// Artist Class that initializes the following properties:
class Artist {
  constructor(name, country, link, bg, tc) {
    // name -- artist's name
    this.name = name;
    // country -- country that the artist is from
    this.country = country;
    // link -- song link for Spotify play button
    this.link = link;
    // background gradient
    this.bg = bg;
    // text color
    this.tc = tc;
  }
  // mountSong -- method to return this.song
  mountSong() {
    return this.link;
  }
}
// Artists featured in the game
const skepta = new Artist(
    "Skepta",
    "UK",
    `<iframe src="https://open.spotify.com/embed/track/1ATVSVN4kc8S2XE7FdyJi8" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
    ``,
    ``
  ),
  burna = new Artist(
    "Burna Boy",
    "Nigeria",
    `<iframe src="https://open.spotify.com/embed/track/3FskQrDXcY24ur2fCvz35O" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
    ``,
    ``
  ),
  roddy = new Artist(
    "Roddy Ricch",
    "USA",
    `<iframe src="https://open.spotify.com/embed/track/3wLtYwtqvKK2ewelSVPeDK" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
    ``,
    ``
  ),
  vegedream = new Artist(
    "Vegedream",
    "France",
    `<iframe src="https://open.spotify.com/embed/track/1m0UFnuTktOkksvjbF9z0m" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
    ``,
    ``
  ),
  chambao = new Artist(
    "Chambao",
    "Spain",
    `<iframe src="https://open.spotify.com/embed/track/2HwoPy0HkKLQaJ6ONv1pmy" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
    ``,
    ``
  ),
  dkvpz = new Artist(
    "DKVPZ",
    "Brazil",
    `<iframe src="https://open.spotify.com/embed/track/4CnVCvv9e5DHrOWXvNbJV1" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
    ``,
    ``
  );
// Array of artist objects to access
let artists = [skepta, burna, roddy, vegedream, chambao, dkvpz];

// Array where artist objects will be stored in order to mark them as played
let playedArtists = [];

// Done: mountSong method?
// TODO: get the Artist.song (song link for Spotify play button)
// TODO: change the href in the Spotify Play Button to Artist.song
// TODO: change feedback to "Make sure you listen to the whole song"
// TODO: show disabled

// TODO: promptGuess?
// after 20 seconds change the feedback to ask where are they from?
// enable controls

/*----- app's state (variables) -----*/

let result, score, artist, button, player, timerId;

/*----- cached element references -----*/
// Game "Board"
const playerHolder = document.getElementById("content"),
  textHolder = document.getElementById("board"),
  // The Audio Player
  countdownText = document.getElementById("countdown"),
  // Feedback
  feedback = document.getElementById("feedback"),
  // Input
  input = document.getElementById("input"),
  mainButton = document.querySelector("button"),
  scoreCard = document.querySelector("footer > p");
/*----- event listeners -----*/

// Button - 'click' (5)
mainButton.addEventListener("click", buttonClickHandler);

// Input - 'click'/'select'
input.addEventListener("click", inputClickHandler);

/*----- functions -----*/

// init -- empties playedArtists, randomly select an Artist from artists[],
init();

function init() {
  playedArtists = [];
  result = null;
  score = null;
}

// Counter -- counts down and then runs promptGuess

// promptGuess -- function to remove board and ask for guess

// render -- takes in artist, trackLink, button,  shows song iframe,  and artist's name + press play feedback
function render(targetButton) {
  if (targetButton.id === "first") {
    mountSecondPage();
    return;
  }
  if (targetButton.id === "second") {
    mountThirdPage();
    return;
  }
  if (targetButton.id === "play") {
    clearInterval(timerId);
    mountGame();
    return;
  }
  if (targetButton.id === "continue") {
    mountFifthPage();
    return;
  }
  if (targetButton.id === "continue-game") {
    remountGame();
    return;
  }
  if (targetButton.getAttribute("aria-label") === artist.country) {
    result = true;
    score += 1;
    mountCorrect();
    return;
  }
  if (targetButton.id === "restart") {
    mountEndGame();
    return;
  }
  if (targetButton.getAttribute("aria-label") !== artist.country) {
    result = false;
    score += 0;
    mountIncorrect();
    return;
  }
}

// Click handlers for .addEventListeners above
function buttonClickHandler(e) {
  switch (e.target.id) {
    case "first":
      mountButton(e.target);
      break;
    case "second":
      mountButton(e.target);
      break;
    case "play":
      mountButton(e.target);
      break;
    case "continue":
      mountButton(e.target);
      break;
    case "restart":
      mount;
      break;
    case "continue-game":
      if (artists <= 1) {
        mountButton(restartGame());
      } else {
        mountButton(e.target);
        break;
      }

    default:
      console.log("wtf");
  }
}

// when input is clicked
function inputClickHandler(e) {
  mountButton(e.target);
}

function arrayRemove(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      array.splice(i, 1);
      playedArtists.push(artist);
    }
  }
}
/*-- MOUNTING FUNCTIONS --*/

// mountButton -- change button to the target and render the button
function mountButton(targetButton) {
  button = targetButton;
  console.log(targetButton);
  render(targetButton);
}

// Functions to run inside render() --*/
function mountSecondPage() {
  textHolder.innerHTML = `
      <ul>
        <li>USA</li>
        <li>Brazil</li>
        <li>UK</li>
        <li>France</li>
        <li>Nigeria</li>
        <li>Spain</li>
      </ul>
    `;
  button.id = "second";
}

function mountThirdPage() {
  textHolder.innerHTML = ``;
  countdownText.style.display = "block";
  button.id = "play";
  button.classList.remove("secondary");
  button.classList.add("primary");
  button.textContent = "Play Game!";
  firstCountdown(mountGame);
  return;
}
// This begins gameplay
function mountGame() {
  button.id = "continue";
  button.setAttribute("disabled", "");
  button.classList.remove("primary");
  button.classList.add("secondary");
  button.classList.add("disabled");
  button.textContent = "Continue";
  init();
  artist = getArtist();
  arrayRemove(artists, artist);
  console.log(playedArtists);
  secondCountdown(enableButton);
  countdownText.style.display = "none";
  playerHolder.innerHTML = artist.mountSong();
  feedback.style.display = "block";
}

function remountGame() {
  board.textContent = ``;
  button.id = "continue";
  button.setAttribute("disabled", "");
  button.classList.remove("primary");
  button.classList.add("secondary");
  button.classList.add("disabled");
  button.textContent = "Continue";
  artist = getArtist();
  arrayRemove(artists, artist);
  console.log(playedArtists);
  secondCountdown(enableButton);
  countdownText.style.display = "none";
  playerHolder.innerHTML = artist.mountSong();
  feedback.style.display = "block";
}

function mountFifthPage() {
  button.textContent = "Continue Playing?";
  playerHolder.innerHTML = ``;
  board.innerHTML = `
      <h2>Where is</h2>
      <h1 id="artist__name">${artist.name}</h1>
      <h2>From?</h2>`;
  input.style.display = "grid";
  button.style.display = "none";
}

function mountCorrect() {
  mainButton.style.display = "block";
  mainButton.id = "continue-game";
  input.style.display = "none";
  board.innerHTML = `
  <h1 id="artist__name">Correct!</h1>
  <h2>${artist.name} is from ${artist.country}</h2>`;
  scoreCard.textContent = `${score} out of 6 correct`;
}

function mountIncorrect() {
  mainButton.style.display = "block";
  mainButton.id = "continue-game";
  input.style.display = "none";
  board.innerHTML = `
  <h1 id="artist__name">Oops!</h1>
  <h2>${artist.name} is from ${artist.country}</h2>`;
  scoreCard.textContent = `${score} out of 6 correct`;
}

function mountEndGame() {
  mainButton.textContent = "Play Again";
  board.innerHTML = ``;
  board.innerHTML = `
  <h1 id="artist__name">Game Over</h1>
  <h2>Nice!</h2>
  <h2>You got ${score} correct out of ${playedArtists.length} songs</h2>`;
  artists = playedArtists;
  mainButton.id = "second";
}

function restartGame() {
  console.log("working");
  mainButton.id = "restart";
  return mainButton;
}
/*-- Countdowns --*/

// counts down from 5 and allows user to click button to the guessing screen
function secondCountdown(cb) {
  let count = 1;
  timerId = setInterval(function() {
    count--;
    if (count) {
      return;
    } else {
      clearInterval(timerId);
      cb();
    }
  }, 1000);
}

// counts down from five and starts the game
function firstCountdown(cb) {
  let count = 5;
  countdownText.textContent = count;
  timerId = setInterval(function() {
    count--;
    if (count) {
      countdownText.textContent = count;
    } else {
      clearInterval(timerId);
      cb();
    }
  }, 1000);
}

/*-- UTILITY FUNCTIONS --*/

// enableButton -- removes the disabled button attribute, disabled class, and hides the feedback element enabling the user to // continue to the guessing page.
function enableButton() {
  button.removeAttribute("disabled", "");
  button.classList.remove("disabled");
  feedback.style.display = "none";
}

// getArtist -- changes global artist state variable to random artist from the array
function getArtist() {
  return (artist = artists[Math.floor(Math.random() * artists.length)]);
}
