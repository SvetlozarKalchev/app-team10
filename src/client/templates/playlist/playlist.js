import { Template } from 'meteor/templating';

import './playlist.html'

var isDropDownOpen = false;
var isMoreMusicInfoMenuOpen = false;

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

    var menu = document.getElementById('drop_down_content');

    if(isDropDownOpen) {
      menu.style.display = 'none';

    } else {
      menu.style.display = 'block'
    }

    isDropDownOpen = !isDropDownOpen;
  },

  'click .song_list_content'(event){
    document.getElementById('drop_down_content').style.display='none';
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


  'click .music_info'(event){
    var musicInfo = document.getElementById('more_info_content').style.display='none';

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
