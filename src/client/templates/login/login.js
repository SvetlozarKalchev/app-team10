import { Template } from 'meteor/templating';

Template.login.events({

  'click .login-button'(event) {
    var formData = document.getElementsByClassName('log');

    var givenUserName = formData[0].value;
    var givenPassword = formData[1].value;

    if(givenPassword === 'demo' && givenPassword === 'demo') {
      FlowRouter.redirect('/recommended-song');
    } else {
      alert('Invalid username or password!')
    }
  }

});
