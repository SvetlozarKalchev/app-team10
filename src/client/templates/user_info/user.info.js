import { Template } from 'meteor/templating';

import './user_info.html'

Template.user_info.events({
  'click .password'(event){
    document.getElementById('change_password').style.display='block';
  },

  'click .change'(event){
    document.getElementById('change_password').style.display='none';
  },

  'click .cancel'(event){
    document.getElementById('change_password').style.display='none';
  },

  'click .back_icon'(event){
    FlowRouter.redirect('/playlist');
  }
})
