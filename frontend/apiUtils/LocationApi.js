var LocationActions = require('../actions/locations');
module.exports = {
  fetchLocations: function (cb) {
    $.get('http://localhost:3000/api/locations', function (locations) {
      LocationActions.setLocations(locations);
      cb && cb(locations[0]);
    });
  },
  addLocation: function (location) {
    $.ajax({
      type: "POST",
      url: "http://localhost:3000/api/locations",
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
      url: "http://localhost:3000/api/locations/" + id,
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
      url: "http://localhost:3000/api/search?api_query=" + query,
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
