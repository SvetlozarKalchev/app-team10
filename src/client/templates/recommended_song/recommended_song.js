import { Template } from 'meteor/templating';

import './recommended_song.html'

Template.recommended_song.events({
  //add redirect to explore page
  'click .explore'(event){
    FlowRouter.redirect('/explore');
  },

  'click .my_music'(event){
    FlowRouter.redirect('/playlist');
  }
})
