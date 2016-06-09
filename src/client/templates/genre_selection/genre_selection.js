import { Template } from 'meteor/templating';

  var selectedGenres = new Array();

  function saveGenreNames(genreName) {
    selectedGenres.push(genreName);
  }

  function sendSelectedGenres() {
    console.log(selectedGenres);
  }

  var isGenreBoxClicked = false;

  Template.genre_selection.events({
    // This code adds a redirect event to the next button on the page
    'click .next'(event) {

      sendSelectedGenres();

      FlowRouter.redirect('/artist-selection');

  },

  'click .genre_box'(event) {
    // Select only the element that has an event listener attached
    var clickedElement = event.currentTarget;

function checkIfClicked() {
  if(isGenreBoxClicked){
    return false;
    var genre = clickedElement.firstElementChild.innerHTML;
    saveGenreNames(genre);
  //  isGenreBoxClicked = true;
  }
  else {
    return true;

  }
}


    var currentClass = clickedElement.getAttribute('class');

    // Add new class to the element with an attached event listener
    clickedElement.setAttribute('class', currentClass+' highlight')

    // Save selected artist name


  }
});
