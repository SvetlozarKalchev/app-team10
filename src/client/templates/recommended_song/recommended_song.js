import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './recommended_song.html'

var isDropDownOpen = false;
var isMoreMusicInfoMenuOpen = false;

Session.set('favorites', new Array());

Template.recommended_song.events({
  //add redirect to explore page
  'click .explore'(event){
    FlowRouter.redirect('/genre-selection');
  },

  'click .my_music'(event){
    FlowRouter.redirect('/explore');
  },

  'click .playlist_icon'(event){
    FlowRouter.redirect('/music-player');
  },

  'click .user_icon'(event){
    FlowRouter.redirect('/user-info');
  },

  'click .play_all_icon'(event){
    FlowRouter.redirect('/music-player');
  },

  'click .play_all'(event){
    FlowRouter.redirect('/music-player');
  },

  'click .menu_icon'(event){

    var menu = document.getElementById('drop_down_content');

    if(isDropDownOpen) {
      menu.style.display = 'none';

    } else {
      menu.style.display = 'block'
    }

    isDropDownOpen = !isDropDownOpen;
  },

  'click .heart_icon'(event) {
    event.stopPropagation();
    // Get the chosen song by extracting the song name and title from
    // the HTML element that got clicked.
    var favoritesList = Session.get('favorites');

    var musicBox = event.target.parentElement.parentElement;
    var songName = musicBox.childNodes[1].firstElementChild.innerHTML;

    console.log(songName);
    favoritesList.push(songName);
    Session.set('favorites', favoritesList);

    alert(`Added ${event.target.innerHTML} to favorites`);
  },

  'click .more_info_icon'(event){
    var moreInfo = document.getElementById('more_info_content');

    if(isMoreMusicInfoMenuOpen) {
      moreInfo.style.display = 'none';

    } else {
      moreInfo.style.display = 'block';
    }

    isMoreMusicInfoMenuOpen = !isMoreMusicInfoMenuOpen;
  },

  'click .music_box'(event){
    var musicInfo = document.getElementById('more_info_content').style.display='none';

    // Get the chosen song by extracting the song name and title from
    // the HTML element that got clicked.
    Session.set('chosenSong', event.target.innerHTML);

    FlowRouter.redirect('/music-player')
  },

  'click .search_content'(event){
    document.getElementById('more_info_content').style.display='none';
  },

  'click .bottom_bar'(event){
    document.getElementById('more_info_content').style.display='none';
  },

  'click .more_info_content'(event){
    document.getElementById('more_info_content').style.display='none';
  }

})

var recommendedSongs;

// On template render
Template.recommended_song.onRendered(function() {
  var ajax = new XMLHttpRequest();

  // This defines what to do after a response
  ajax.onreadystatechange = function() {
    if(ajax.readyState === 4 && ajax.status === 200) {
      recommendedSongs = JSON.parse(ajax.responseText);
      // Turn received list of songs into an array, because
      // it's received as plain text.
      console.log(recommendedSongs);

      // After receiving the songs, put them in the page list
      // Session is a state variable. When it changes,
      // the UI updates itself.
      Session.set('recommendedSongs', recommendedSongs);

    }
  }

  ajax.open('GET', 'http://188.166.29.5:8000/api/recommended', true);
  ajax.send();



});

Template.recommended_song.helpers({
  // Get list of recommended songs and render them
  songs: function() {
    var songs = Session.get('recommendedSongs')

    return songs;
  }
});
