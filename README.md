# Spotify-Guessing-Game

v1.0 Players listen to songs from Spotify and guess where the artists are from

## Wireframes and Pseudocode

I used [Figma](https://www.figma.com) to design the UI for ths game. Check out the wireframes, UI, and stylesheet [here](https://www.figma.com/file/COOHN795moEejfb30q6sgKbO/SpotifyGuessingGames_SGGW?node-id=0%3A1).

### User Journey

As a user, I want to be able to learn the rules then start playing the game. I should be able to listen to the song and then have an easy way of guessing what country the artist is from. I want to know if I got the guess correct or incorrect and be able to continue playing the game. After I've guessed all available trivia I want to know how many I've gotten correct and have the option to play again.

### Game Play "Engine"

#### Initialize

1. Attach event listeners - "Next" Button and "Play" button.
2. On first time "Next" button is clicked hide rules and show countries, on second click:

   - Init all state variables - hide rules, set result to null, and score to 0, song to null.

3. Render

#### Post "Countdown"

1. When the "Play" button is clicked: if in "Countdown", clear "Countdown"

2. After the "Countdown" (either way):

   - Randomly pick song to display
   - Show the selection buttons
   - Update Score
   - Render

### Pseudocode

#### HTML

```html
<!DOCTYPE html>
<!-- Display the Game Title (Static Text)  -->
<!-- 1 Display the Game "Board" (Main or Section) -->
    <!-- The Artist's name (Dynamic Text) -->
    <!-- The Track (Spotify audio player) -->
    <!-- Feedback -->
    <!-- Display User input -->
<!-- 1 Display the Game "Board" -->
<!-- Footer (Text) -->
```

#### CSS

##### Reusable Variables

```css
/* Background Gradient */
/* Primary Color */
/* Inter UI font or Proxima Nova */
```

##### 

```css
/* 
Elements to Style:
    // h1
    // h2.artist__name
    // iframe
    // h2.feedback
    // input[radio buttons]
    // button#{multipleids}
*/
```

#### JS

```
/*----- constants -----*/

// Create an Artist Class that initializes the following properties:
    // name -- artist's name
    // song -- song link for Spotify play button
    // emoji -- country that the artist is from
    // Spotify artist url -- link to spotify information for the artist

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
```
