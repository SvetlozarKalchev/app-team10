import { Template } from 'meteor/templating';

// import './artist_selection.html'

// This code adds a redirect event to the next button on the page
Template.start_screen.events({
  'click .next'(event) {
    FlowRouter.redirect('/artist-selection')
  }
});
