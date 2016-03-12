var AppDispatcher = require('../dispatcher/dispatcher'),
    Constants = require('../constants/constants');

module.exports = {
  setLocations: function (locations) {
    AppDispatcher.dispatch({
      actionType: Constants.SET_LOCATIONS,
      locations: locations
    })
  },
  addLocation: function (location) {
    AppDispatcher.dispatch({
      actionType: Constants.ADD_LOCATION,
      location: location
    });
  },
  removeLocation: function (location) {
    AppDispatcher.dispatch({
      actionType: Constants.REMOVE_LOCATION,
      location: location
    });
  }
}
