// Routing methods. Each route renders the "app" template first and
// then puts another template inside.

// Routing method for the app's starting page
FlowRouter.route('/', {

  action: () => {
    BlazeLayout.render('app', { content: 'start_screen' });
  }

});

// Routing method for the second screen
FlowRouter.route('/artist-selection', {

  action: () => {
    BlazeLayout.render('app', { content: 'artist_selection' });
  }

});

// Routing method for third screen
FlowRouter.route('/genre-selection', {

  action: () => {
    BlazeLayout.render('app', { content: 'genre_selection' });
  }

});

// Routing method for the login screen
FlowRouter.route('/login', {

  action: () => {
    BlazeLayout.render('app', { content: 'login' });
  }

});

FlowRouter.route('/register', {

  action: () => {
    BlazeLayout.render('app', { content: 'register' });
  }

});


FlowRouter.route('/explore', {

  action: () => {
    BlazeLayout.render('app', { content: 'explore' });
  }

});

FlowRouter.route('/music-player', {

  action: () => {
    BlazeLayout.render('app', { content: 'music_player' });
  }

});

FlowRouter.route('/playlist', {

  action: () => {
    BlazeLayout.render('app', { content: 'playlist' });
  }

});

FlowRouter.route('/recommended-song', {

  action: () => {
    BlazeLayout.render('app', { content: 'recommended_song' });
  }

});

FlowRouter.route('/user-info', {

  action: () => {
    BlazeLayout.render('app', { content: 'user_info'});
  }

});
