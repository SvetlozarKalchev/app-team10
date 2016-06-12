import { Template } from 'meteor/templating';

// The genres the users chooses as favorite are saved here and
// get sent to the server after clicking the Next button.
var selectedGenres = new Array();


function saveGenreNames(genreName, callback) {
  selectedGenres.push(genreName);
}

function removeSelectedGenre(genreName) {
  // Get the items array index and then splice it out of the array
  var index = selectedGenres.indexOf(genreName);

  selectedGenres.splice(index, 1);
}

// Send the list of selected genres to the server, so
// the user can get a list with recommended songs on the next screen
function sendSelectedGenres(callback) {
  var ajax = new XMLHttpRequest();

  // This defines what to do after a response
  ajax.onreadystatechange = function() {
    if(ajax.readyState === 4 && ajax.status === 200) {
      callback();
    }
  }

  ajax.open('POST', 'http://188.166.29.5:8000/api/songs', true);
  ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  ajax.send(selectedGenres);


  console.log(selectedGenres);
}



Template.genre_selection.events({
  // This code adds a redirect event to the next button on the page
  'click .next'(event) {

    // Check if the user has selected genres first
    if(selectedGenres.length > 0) {
      sendSelectedGenres(function onDataSent() {
        // Redirect to next page
        FlowRouter.redirect('/artist-selection');
      });

    } else {
        alert("You haven't selected a genre! Please, select at least one!");
    }

  },

'click .genre_box'(event) {
    // Select only the elemenent that has an event listener attached.
    // In this case this is the box.
    var clickedElement = event.currentTarget;
    var genre = clickedElement.firstElementChild.innerHTML;
    var currentClass = clickedElement.getAttribute('class');

    // Check if the element is already selected. If it is, it's
    // class name is going to contain the word highlight
    if(~currentClass.indexOf('highlight')) {
      // Remove highlight styling from the selected element
      clickedElement.setAttribute('class', 'genre_box')

      // Remove the genre from the list after deselecting the element
      removeSelectedGenre(genre);

    } else {
      // Add highlight styling to the selected element
      clickedElement.setAttribute('class', currentClass+' highlight')

      // Save selected genre name
      saveGenreNames(genre);
    }

  }

});
