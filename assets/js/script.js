var apiKey = 'fb6ca2a2b665c5787d3556bdcf04f352';
var city = document.querySelector('#search-input').value;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

fetch(queryURL)

var searchFormEl = document.querySelector('#search-form');

function handleSearchFormSubmit(event) {
  event.preventDefault();

  if (!city) {
    console.error('You need a valid city!');
    return;
  }

  var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

  location.assign(queryURL);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);


// Create a function that saves the user input to local storage

// Create a function that combines the users input into the html search, and appends the data to the page

// Create a function that displays cards of weather data when user searches