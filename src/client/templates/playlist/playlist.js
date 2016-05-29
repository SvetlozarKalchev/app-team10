import { Template } from 'meteor/templating';

import './playlist.html'

Template.playlist.events({
  //add redirect to explore page
  'click .explore'(event){
    FlowRouter.redirect('/explore');
  },

  'click .recommend'(event){
    FlowRouter.redirect('/recommended-song');
  },

  'click .music_player_icon'(event){
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
