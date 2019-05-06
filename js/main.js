/*----- constants -----*/

// name -- artist's name

// Create an Artist Class that initializes the following properties:
class Artist {
  constructor(name, country, link) {
    this.name = name;
    // country -- country that the artist is from
    this.country = country;
    // link -- song link for Spotify play button
    this.link = link;
  }
  get song() {
    return this.mountSong();
  }
  mountSong() {
    return this.link;
  }
}

const skepta = new Artist(
    "Skepta",
    "England",
    `<iframe src="https://open.spotify.com/embed/track/1ATVSVN4kc8S2XE7FdyJi8" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`
  ),
  burna = new Artist(
    "Burna Boy",
    "Nigeria",
    `<iframe src="https://open.spotify.com/embed/track/3FskQrDXcY24ur2fCvz35O" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`
  ),
  roddy = new Artist(
    "Roddy Ricch",
    "USA",
    `<iframe src="https://open.spotify.com/embed/track/3wLtYwtqvKK2ewelSVPeDK" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`
  ),
  vegedream = new Artist(
    "Vegedream",
    "France",
    `<iframe src="https://open.spotify.com/embed/track/1m0UFnuTktOkksvjbF9z0m" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`
  ),
  chambao = new Artist(
    "Chambao",
    "Spain",
    `<iframe src="https://open.spotify.com/embed/track/2HwoPy0HkKLQaJ6ONv1pmy" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`
  ),
  dkvpz = new Artist(
    "Dkvpz",
    "Brazil",
    `<iframe src="https://open.spotify.com/embed/track/4CnVCvv9e5DHrOWXvNbJV1" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`
  );

const artists = [skepta, burna, roddy, vegedream, chambao, dkvpz];

let playedArtists = [];

// mountSong method?
// get the Artist.song (song link for Spotify play button)
// TODO: change the href in the Spotify Play Button to Artist.song
// TODO: change feedback to "Make sure you listen to the whole song"
// TODO: show disabled

// promptGuess?
// after 20 seconds change the feedback to ask where are they from?
// enable controls

/*----- app's state (variables) -----*/

let result, score, artist, button;

/*----- cached element references -----*/
// Game "Board"
const playerHolder = document.getElementById("content"),
  textHolder = document.getElementById("board"),
  // The Artist title
  artistTitle = document.getElementById("artist__name"),
  // The Audio Player
  player = document.querySelector("iframe"),
  countdownText = document.getElementById("countdown"),
  // Feedback
  feedback = document.getElementById("feedback"),
  // Input
  input = document.getElementById("input"),
  // Buttons (different states toggled with ids )
  // #first -- first continue button shown with rules but before flags
  firstButton = document.getElementById("first"),
  // #second -- second continue button shown with flags but before countdown
  secondButton = document.getElementById("second"),
  // #play -- stops countdown and starts game on click
  playButton = document.getElementById("play"),
  // #continue
  continueButton = document.getElementById("continue"),
  // #restart
  restartButton = document.getElementById("restart");

/*----- event listeners -----*/

// Button - 'click' (5)
document.getElementById("button").addEventListener("click", buttonClickHandler);

// Input - 'click'/'select'
input.addEventListener("click", inputClickHandler);

//iframe - 'click'

/*----- functions -----*/
// init -- empties playedArtists, randomly select an Artist from artists[], mounts song, make button
function init() {
  playedArtists = [];
  result = null;
  score = null;
  artist = getArtist();
  artist.mountSong;
  render();
}

// render -- takes in artist, trackLink, button,  shows song iframe,  and artist's name + press play feedback
function render() {
  // playerHolder.innerHTML = artist.song;
  if (button == firstButton) {
    console.log(button);
    console.log(firstButton);
    textHolder.innerHTML = `
      <ul>
        <li>USA</li>
        <li>Brazil</li>
        <li>UK</li>
        <li>France</li>
        <li>Nigeria</li>
      </ul>
    `;
  }
  if (button == secondButton) {
    alert("worked!");
  }
}
// countdown -- counts user down from 5 and runs mountSong
function buttonClickHandler(e) {
  if (e.target == firstButton) {
    button = e.target;
    render();
    console.log(button);
    button.id = "second";
  }
  if (e.target == secondButton) {
    button = e.target;
    render();
    console.log(button);
  }
}
// when input is clicked
function inputClickHandler(e) {
  console.log(e.target);
}

// getArtist -- return artist
function getArtist() {
  return (artist = artists[Math.floor(Math.random() * artists.length)]);
}

// mountSong -- method to return this.song

// Counter -- counts down and then runs promptGuess

// promptGuess -- function to remove board and ask for guess
