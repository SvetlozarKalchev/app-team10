import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './explore.html'

Template.explore.events({
  //add redirect to explore page
  'click .recommend'(event){
    FlowRouter.redirect('/recommended-song');
  },

  'click .my_music'(event){
    FlowRouter.redirect('/playlist');
  },

  'click .playlist_icon'(event){
    FlowRouter.redirect('/music-player');
  },

  'click .menu_icon'(event){
    document.getElementById('drop_down_content').style.display='block';
  },

  'click .music_recommendation_content'(event){
    document.getElementById('drop_down_content').style.display='none';
  },

  'click .music_box'(event){
    var musicInfo = document.getElementById('more_info_content').style.display='none';

    // Get the chosen song by extracting the song name and title from
    // the HTML element that got clicked.
    Session.set('chosenSong', event.target.innerHTML);

    FlowRouter.redirect('/music-player')
  }
  
});

Template.explore.helpers({
  favorites: function() {
    console.log(Session.get('favorites'));
    return Session.get('favorites');
  }
});
