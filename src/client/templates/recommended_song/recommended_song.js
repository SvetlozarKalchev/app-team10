import { Template } from 'meteor/templating';

import './recommended_song.html'

Template.recommended_song.events({
  //add redirect to explore page
  'click .explore'(event){
    FlowRouter.redirect('/explore');
  },

  'click .my_music'(event){
    FlowRouter.redirect('/playlist');
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
    document.getElementById('drop_down_content').style.display='block';
  },

  'click .song_list_content'(event){
    document.getElementById('drop_down_content').style.display='none';
  },

  'click .more_info_icon'(event){
    document.getElementById('more_info_content').style.display='block';
  },

  'click .music_info'(event){
    document.getElementById('more_info_content').style.display='none';
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
