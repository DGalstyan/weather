var LocationActions = require('../actions/locations');

// This API is responsible for retrieving a User's locations, adding a location,
// removing a location, and sending requests to the autocomplete API.

module.exports = {
  fetchLocations: function (cb) {
    $.get('/api/locations', function (locations) {
      LocationActions.setLocations(locations);
      cb && cb(locations[0]); // Used to automatically load the first saved location when page loads.
    });
  },
  addLocation: function (location) {
    $.ajax({
      type: "POST",
      url: "/api/locations",
      dataType: "json",
      data: { location: location },
      success: function (location) {
        LocationActions.addLocation(location);
      },
      error: function (e) {
        alert("An error occurred, please try again soon.");
      }
    });
  },
  removeLocation: function (id) {
    $.ajax({
      type: "DELETE",
      url: "/api/locations/" + id,
      success: function (location) {
        LocationActions.removeLocation(location);
      },
      error: function (e) {
        alert("An error occurred, please try again soon.");
      }
    })
  },
  searchLocation: function (query, cb) {
    $.ajax({
      type: "GET",
      url: "/api/search?api_query=" + query,
      dataType: "json",
      success: function (results) {
        cb(results);
      },
      error: function (e) {
        console.log(e);
      }
    });
  }
}
