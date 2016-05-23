import { Template } from 'meteor/templating';

import './artist_selection.html'

// This code adds a redirect event to the next button on the page
Template.artist_selection.events({
  'click .next'(event) {
    FlowRouter.redirect('/genre-selection')
  }
});
