var Store = require('flux/utils').Store,
    $ = require('jquery'),
    AppDispatcher = require('../dispatcher/dispatcher'),
    Constants = require('../constants/constants'),
    WeatherStore = new Store(AppDispatcher),
    _weather = {};

WeatherStore.get = function () {
  return $.extend({}, _weather);
}

WeatherStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case Constants.UPDATE_WEATHER:
      _weather = payload.weather;
      WeatherStore.__emitChange();
      break;
    default:
      return;
  }
}

module.exports = WeatherStore;
