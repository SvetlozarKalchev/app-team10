import { Template } from 'meteor/templating';

Template.login.events({

  'click .register'(event) {
    FlowRouter.redirect('/register');
  }

});
