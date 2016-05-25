import { Template } from 'meteor/templating';

Template.start_screen.events({
  // This code adds a redirect event to the next button on the page
  'click .next'(event) {
    FlowRouter.redirect('/artist-selection');
  },

  // Add redirect to login page
  'click .redirect_to_login'(event) {
    FlowRouter.redirect('/login');
  }
});
