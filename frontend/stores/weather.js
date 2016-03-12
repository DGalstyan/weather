var Store = require('flux/utils').Store,
    AppDispatcher = require('../dispatcher/dispatcher'),
    Constants = require('../constants/constants'),
    WeatherStore = new Store(AppDispatcher),
    _weather = {};

WeatherStore.get = function () {
  return $.extend({}, _weather);
}

WeatherStore.__onDispatch = function (payload) {
  if (payload.actionType === Constants.UPDATE_WEATHER) {
    _weather = payload.weather;
    WeatherStore.__emitChange();
  }
}
module.exports = WeatherStore;
