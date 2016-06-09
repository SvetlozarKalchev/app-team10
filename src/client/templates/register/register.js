import { Template } from 'meteor/templating';



Template.register.events({
  'click .login'(event) {
    FlowRouter.redirect('/login');
  }
});
