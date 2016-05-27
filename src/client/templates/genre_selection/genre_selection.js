import { Template } from 'meteor/templating';

import './genre_selection.html'

Template.genre_selection.events({
  // This code adds a redirect event to the next button on the page
  'click .next'(event) {
    FlowRouter.redirect('/artist-selection');
  }
});
