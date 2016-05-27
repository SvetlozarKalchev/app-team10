import { Template } from 'meteor/templating';

import './playlist.html'

Template.playlist.events({
  //add redirect to explore page
  'click .explore'(event){
    FlowRouter.redirect('/explore');
  },

  'click .recommend'(event){
    FlowRouter.redirect('/recommended-song');
  }
})
