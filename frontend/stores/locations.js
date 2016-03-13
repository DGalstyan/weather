var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    Constants = require('../constants/constants'),
    LocationsStore = new Store(AppDispatcher),
    _locations = [];

LocationsStore.all = function () {
  return _locations.slice();
}

LocationsStore.findIndexOf = function (location) {
  for (var i = 0; i < _locations.length; i++) {
    if (_locations[i].name === location.name) {
      return i;
    }
  }
  return -1;
}

LocationsStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case Constants.ADD_LOCATION:
      _locations.push(payload.location);
      LocationsStore.__emitChange();
      break;
    case Constants.REMOVE_LOCATION:
      var idx = LocationsStore.findIndexOf(payload.location);
      if (idx >= 0) {
        _locations.splice(idx, 1);
      }
      LocationsStore.__emitChange();
      break;
    case Constants.SET_LOCATIONS:
      _locations = payload.locations;
      LocationsStore.__emitChange();
      break;
  }
}

module.exports = LocationsStore;
