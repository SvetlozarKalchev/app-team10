import { Template } from 'meteor/templating';

Template.login.events({
  'click .login'(event) {
    FlowRouter.redirect('/artist-selection');
  },


});
