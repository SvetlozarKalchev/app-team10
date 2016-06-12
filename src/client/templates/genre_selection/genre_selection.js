import { Template } from 'meteor/templating';

  var selectedGenres = new Array();
  var isGenreBoxClicked = false;
  var selected = false;

  function saveGenreNames(genreName) {

    for(var i = 0; i < selectedGenres.length; i++) {
      if(genreName === selectedGenres[i])
      {
        return false;
        //console.log("The item is already clicked!")
        //console.log(genreName + "it is saved.....");
        //
      } else {
        return true;
      }
    }
      if(saveGenreNames(genreName)) {
        selectedGenres.push(genreName);
      }
  }

  function sendSelectedGenres() {
    //Here to send the selected items
    console.log(selectedGenres);
  }



  function checkIfClicked() {
    if(isGenreBoxClicked){
      isGenreBoxClicked = true;
    }
  }

  Template.genre_selection.events({
    // This code adds a redirect event to the next button on the page
    'click .next'(event) {

      sendSelectedGenres();

      FlowRouter.redirect('/artist-selection');
    },

  'click .genre_box'(event) {
    // Select only the element that has an event listener attached

      var clickedElement = event.currentTarget;
      var genre = clickedElement.firstElementChild.innerHTML;
      var currentClass = clickedElement.getAttribute('class');

    // Add new class to the element with an attached event listener
    clickedElement.setAttribute('class', currentClass+' highlight')

    // Save selected artist name
    saveGenreNames(genre);
    }
});
