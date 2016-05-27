import { Template } from 'meteor/templating';

import './explore.html'

Template.explore.events({
  //add redirect to explore page
  'click .recommend'(event){
    FlowRouter.redirect('/recommended-song');
  },

  'click .my_music'(event){
    FlowRouter.redirect('/playlist');
  }
})
