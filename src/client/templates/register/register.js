import { Template } from 'meteor/templating';

Template.register.events({

  'click .register-button'(event) {

    var formData = document.getElementsByClassName('reg');

    var userName = formData[0].value;
    var password = formData[1].value;
    var confirmPassword = formData[2].value;

    if((userName !== " " || userName !== null) && (password !== " " || password !== null) && password === confirmPassword) {
      FlowRouter.redirect('/recommended-song');
    } else {
      alert('Please, fill all required field')
    }
  }

});
