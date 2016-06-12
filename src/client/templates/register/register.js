import { Template } from 'meteor/templating';



Template.register.events({
  'click .login'(event) {
    FlowRouter.redirect('/login');
  }
});
Template.register.events({
  'submit form' : function(event){
   event.preventDefault();
    var email = $('[name=usernameReg]').val();
    var password = $('[name=passwordReg]').val();
    var confPassword = $('[name=passwordRegConf]').val();
    if(password!=confPassword){
      alert('Invalid Password! Please, Confirm password');
    }else{
    Accounts.createUser({
      email: email,
      password: password
    });
    FlowRouter.redirect('/recommended-song');
  }
  }
});
