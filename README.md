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
