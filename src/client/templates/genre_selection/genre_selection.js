import { Template } from 'meteor/templating';

  var selectedGenres = new Array();

  function saveGenreNames(genreName) {
    selectedGenres.push(genreName);
  }

  function sendSelectedGenres() {
    console.log(selectedGenres);
  }

  var isArtistBoxClicked = false;

  Template.genre_selection.events({
    // This code adds a redirect event to the next button on the page
    'click .next'(event) {

      sendSelectedGenres();

      FlowRouter.redirect('/register');

  },

  'click .genre_box'(event) {
    // Select only the element that has an event listener attached
    var clickedElement = event.currentTarget;

    if(!isArtistBoxClicked){

    }
    var currentClass = clickedElement.getAttribute('class');

    // Add new class to the element with an attached event listener
    clickedElement.setAttribute('class', currentClass+' highlight')

    // Save selected artist name
    var genre = clickedElement.firstElementChild.innerHTML;
    saveGenreNames(artist);
  }
});
