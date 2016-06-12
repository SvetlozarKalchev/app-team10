import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

function createFavoritesList() {
  Session.set('favorites', new Array());
}
Template.start_screen.events({
  // This code adds a redirect event to the next button on the page
  'click .next'(event) {

    createFavoritesList();
    FlowRouter.redirect('/genre-selection');
  },

  // Add redirect to login page
  'click .redirect_to_login'(event) {
    createFavoritesList();
    FlowRouter.redirect('/login');
  }
});
