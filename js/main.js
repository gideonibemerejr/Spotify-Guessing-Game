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
    "England",
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
    "Dkvpz",
    "Brazil",
    `<iframe src="https://open.spotify.com/embed/track/4CnVCvv9e5DHrOWXvNbJV1" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`,
    ``,
    ``
  );
// Array of artist objects to access
const artists = [skepta, burna, roddy, vegedream, chambao, dkvpz];

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
  input = document.getElementById("input");

/*----- event listeners -----*/

// Button - 'click' (5)
document.getElementById("button").addEventListener("click", buttonClickHandler);

// Input - 'click'/'select'
input.addEventListener("click", inputClickHandler);

/*----- functions -----*/

// init -- empties playedArtists, randomly select an Artist from artists[],
function init() {
  playedArtists = [];
  result = null;
  score = null;
  artist = getArtist();
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
    mountFourthPage();
    return;
  }
  if (targetButton.id === "continue") {
    mountFifthPage();
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
    case "continue-game":
      mountButton(e.target);
      break;
    case "restart":
      mountButton(e.target);
      break;
    default:
      console.log("wtf");
  }
}

// when input is clicked
function inputClickHandler(e) {
  console.log(e.target);
}

// getArtist -- changes global artist state variable to random artist from the array
function getArtist() {
  return (artist = artists[Math.floor(Math.random() * artists.length)]);
}

/*-- Mounting Function --*/

// mountButton -- change button to the target and render the button
function mountButton(targetButton) {
  button = targetButton;
  render(targetButton);
}

// Functions to run inside render() --*/
function mountSecondPage() {
  console.log("second");
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
  console.log("third");
  textHolder.innerHTML = ``;
  countdownText.style.display = "block";
  button.id = "play";
  button.classList.remove("secondary");
  button.classList.add("primary");
  button.textContent = "Play Game!";
  firstCountdown(mountFourthPage);
  return;
}
// This begins gameplay
function mountFourthPage() {
  console.log("fourth");
  button.id = "continue";
  button.setAttribute("disabled", "");
  button.classList.remove("primary");
  button.classList.add("secondary");
  button.classList.add("disabled");
  button.textContent = "Continue";
  init();
  secondCountdown(removeDisable);
  countdownText.style.display = "none";
  playerHolder.innerHTML = artist.mountSong();
  feedback.style.display = "block";
}

function mountFifthPage() {
  console.log("fifth");
  button.id = "continue-game";
  playerHolder.innerHTML = ``;
  board.innerHTML = `
      <h2>Where is</h2>
      <h1 id="artist__name">${artist.name}</h1>
      <h2>From?</h2>`;
  input.style.display = "flex";
}

// removes the disabled button attribute, disabled class, and "Play Feedback"
function removeDisable() {
  button.removeAttribute("disabled", "");
  button.classList.remove("disabled");
  feedback.style.display = "none";
}
// function mountFirstPage() {
//   return;
// }

/*-- Countdowns --*/

// counts down from 5 and allows user to click button to the guessing screen
function secondCountdown(cb) {
  let count = 5;
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
