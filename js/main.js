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
    "spotify:track:1ATVSVN4kc8S2XE7FdyJi8"
  ),
  burna = new Artist("Burna Boy", "Nigeria", ""),
  roddy = new Artist("Roddy Ricch", "USA", ""),
  vegedream = new Artist("Vegedream", "France", ""),
  chambao = new Artist("Chambao", "Spain", ""),
  dkvpz = new Artist("Dkvpz", "Brazil", "");

const artists = [skepta, burna, roddy, vegedream, chambao, dkvpz];

const playedArtists = [];

console.log(artists);
// mountSong method?
// get the Artist.song (song link for Spotify play button)
// TODO: change the href in the Spotify Play Button to Artist.song
// TODO: change feedback to "Make sure you listen to the whole song"
// TODO: show disabled

// promptGuess?
// after 20 seconds change the feedback to ask where are they from?
// enable controls

/*----- app's state (variables) -----*/

let result, score, artist, trackLink, button;

/*----- cached element references -----*/
// Game "Board"
const board = document.getElementById("board"),
  // The Artist title
  artistTitle = document.getElementById("artist__name"),
  // The Audio Player
  audioPlayer = document.querySelector("iframe"),
  // Feedback
  feedback = document.getElementById("feedback"),
  // Input
  input = document.getElementById("input"),
  // Button (different states toggled with ids )
  // #first -- first continue button show with rules
  firstButton = document.getElementById("first"),
  // #second -- second contin
  secondButton = document.getElementById("second"),
  // #play
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

/*----- functions -----*/

// init -- empties playedArtists, randomly select an Artist from artists[], mounts song

// render -- takes in artist & trackLink shows song iframe,  and artist's name + press play feedback

// countdown -- counts user down from 5 and runs mountSong
function buttonClickHandler(e) {
  console.log(e.target.id);
}
function inputClickHandler(e) {
  console.log(e.target);
}

// getArtist -- return artist

// mountSong -- method to return this.song

// Counter -- counts down and then runs promptGuess

// promptGuess -- function to remove board and ask for guess
