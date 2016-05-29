import { Template } from 'meteor/templating';

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
  }
})
