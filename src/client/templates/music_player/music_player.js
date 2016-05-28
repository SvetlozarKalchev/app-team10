import { Template } from 'meteor/templating'

var isPlaying = false;

var incrementProgressBar

function changeIconToPause() {
  var icon = document.getElementsByClassName('play-button')[0];
  icon.setAttribute('src', 'icons/Pause.png')
}

function changeIconToPlay() {
  var icon = document.getElementsByClassName('play-button')[0];
  icon.setAttribute('src', 'icons/Play.png')
}

Template.music_player.events({
  // Go back to recommended songs page
  'click .back-button'(event) {
    FlowRouter.redirect('/recommended-song')
  },
  // Event that start song playback. It's not real playback.
  // Just a function that increments the song progress bar over time.
  'click .play-song'(event) {
    // Check if a song is playing, so we know which icon to put
    if(!isPlaying) {

      changeIconToPause();

      var progressBar = document.getElementsByTagName('progress')[0];

      // Read the current progress bar value
      var currentBarValue = parseInt(progressBar.getAttribute('value'));

      incrementProgressBar = setInterval(function() {
        // Increment the bar value and set it in the HTML
        currentBarValue+=5;
        progressBar.setAttribute('value', currentBarValue);
      }, 2000)

      isPlaying = true;

    } else {
        changeIconToPlay()
        window.clearInterval(incrementProgressBar);
        isPlaying = false;
    }
  }

});
