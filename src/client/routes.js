// Routing methods. Each route renders the "app" template first and
// then puts another template inside.

// Routing method for the app's starting page
FlowRouter.route('/', {

  action: () => {
    BlazeLayout.render('app', {content: "start_screen"});
  }

});

// Routing method for the second screen
FlowRouter.route('/artist-selection', {

  action: () => {
    BlazeLayout.render('app', {content: 'artist_selection'});
  }

});

// Routing method for third screen
FlowRouter.route('/genre-selection', {

  action: () => {
    BlazeLayout.render('app', {content: 'genre_selection'});
  }

});
