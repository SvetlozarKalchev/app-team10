import { Template } from 'meteor/templating';



var selectedArtists = new Array();


function saveArtistNames(artistName, callback) {
  selectedArtists.push(artistName);
}

function removeSelectedArtist(artistName) {
  // Get the items array index and then splice it out of the array
  var index = selectedArtists.indexOf(artistName);

  selectedArtists.splice(index, 1);
}

// Send the list of selected genres to the server, so
// the user can get a list with recommended songs on the next screen
/*function sendSelectedArtists() {
  console.log(selectedArtists);
}*/

Template.artist_selection.events({
  // This code adds a redirect event to the next button on the page
  'click .next'(event) {

    // Check if the user has selected artists first
    if(selectedArtists.length > 0) {
      //Redirect to next page
      FlowRouter.redirect('/register');

      /*sendSelectedArtists(function onDataSent() {

      });*/

    } else {
        alert("You haven't selected a genre! Please, select at least one!")
    }

  },

  'click .artist_box'(event) {
    // Select only the element that has an event listener attached
    //In this case this is the box.
    var clickedElement = event.currentTarget;
    var artist = clickedElement.firstElementChild.innerHTML;
    var currentClass = clickedElement.getAttribute('class');

    // Check if the element is already selected. If it is, it's
    // class name is going to contain the word highlight
    if (~currentClass.indexOf('highlight')) {
       //Remove highlight styling from the selected element
       clickedElement.setAttribute('class', 'artist_box')

       // Remove the artist from the list after deselecting the element
       removeSelectedArtist(artist);

    } else {
      // Add highlight styling to the selected element
      clickedElement.setAttribute('class', currentClass+' highlight')

      //Save selected artist name
      saveArtistNames(artist);
    }
  }
});
