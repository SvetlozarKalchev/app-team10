import { Template } from 'meteor/templating';

Template.artist_selection.helpers({

})

var selectedArtists = new Array();

function saveArtistNames(artistName) {
  selectedArtists.push(artistName);
}

function sendSelectedArtists() {
  console.log(selectedArtists);
}



Template.artist_selection.events({
  // This code adds a redirect event to the next button on the page
  'click .next'(event) {

    sendSelectedArtists();

    FlowRouter.redirect('/login');

  },

  'click .artist_box'(event) {
    // Select only the element that has an event listener attached
    var clickedElement = event.currentTarget;

    var currentClass = clickedElement.getAttribute('class');

    // Add new class to the element with an attached event listener
    clickedElement.setAttribute('class', currentClass+' highlight')

    // Save selected artist name
    var artist = clickedElement.firstElementChild.innerHTML;
    saveArtistNames(artist);
  }
});
