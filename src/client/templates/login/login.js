import { Template } from 'meteor/templating';

Template.login.events({

  'click .register'(event) {
    FlowRouter.redirect('/register');
  }
});

Template.login.events({
  'submit form' : function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        var currentUser = Meteor.userId();
        if(currentUser){
            alert(currentUser);
        }else{

            Meteor.loginWithPassword(email, password, function(error){
                if(error){
                    console.log("Error");
                    alert("Invalid Email or Password");
                }else{
                    console.log("Login!");
                }
            });
        }

      var currentUser = Meteor.userId();
      if(currentUser){
          FlowRouter.redirect('/recommended-song');
      }else{
          console.log("Invalid Email or Password");
      }
    }
  });



Template.login.events({
    'click .logout': function(event){
     event.preventDefault();

    Meteor.logout();
  }
});


Template.login.events({
  // This code adds a redirect event to the next button on the page
  'click .next'(event) {
    FlowRouter.redirect('/recommended-song');
  }
});
