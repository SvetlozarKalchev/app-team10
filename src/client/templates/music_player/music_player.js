import { Template } from 'meteor/templating'

Template.music_player.events({
  // Event that start song playback. It's not real playback.
  // Just a function that increments the song progress bar over time.
  'click .play-song'(event) {
    var progressBar = document.getElementsByTagName('progress')[0];

    // Read the current progress bar value
    var currentBarValue = parseInt(progressBar.getAttribute('value'));

    var incrementProgressBar = setInterval(function() {
      // Increment the bar value and set it in the HTML
      currentBarValue+=5;
      progressBar.setAttribute('value', currentBarValue);
    }, 2000)
  }
})
