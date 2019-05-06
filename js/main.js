/*----- constants -----*/

// Create an Artist Class that initializes the following properties:
// name -- artist's name
// song -- song link for Spotify play button
// emoji -- country that the artist is from
// Spotify artist url -- link to spotify information for the artist
class Artist {
  constructor(name, country, spotify) {
    this.name = name;
    this.country = country;
    this.spotify = spotify;
  }
  get song() {
    return this.mountSong();
  }
  mountSong() {
    return this.spotify;
  }
}

const skepta = new Artist("Skepta", "England", "spotify:track:1ATVSVN4kc8S2XE7FdyJi8"),
  burna = new Artist("Burna Boy", "Nigeria",""),
  roddy = new Artist("Roddy Ricch", "USA",""),
  vegedream = new Artist("Vegedream", "France", ""),
  chambao = new Artist("Chambao", "Spain", ""),
  dkvpz = new Artist("Dkvpz", "Brazil", ""),



// mountSong method?
// get the Artist.song (song link for Spotify play button)
// change the href in the Spotify Play Button to Artist.song
// change feedback to "Make sure you listen to the whole song"
// show disabled

// promptGuess?
// after 20 seconds change the feedback to ask where are they from?
// enable controls

/*----- app's state (variables) -----*/

// result, score, artistName, track, button[id]

/*----- cached element references -----*/
// Game "Board"
// The Artist
// The Audio Player
// Feedback
// Input
// Button
// #First
// #Second
// #Play
// #Continue Playing
// #Restart

/*----- event listeners -----*/

// Button - 'click' (5)
// Input - 'click'/'select'

/*----- functions -----*/

// init -- randomly select first artist

// countdown -- counts user down from 5 and runs mountSong

// buttonClickHandler

// render -- shows song iframe and artist's name + press play feedback

// mountSong -- method to return this.song

// Counter -- counts down and then runs promptGuess

// promptGuess -- function to remove board and ask for guess
