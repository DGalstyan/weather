var AppDispatcher = require('../dispatcher/dispatcher'),
    Constants = require('../constants/constants');

module.exports = {
  updateWeather: function (weather) {
    AppDispatcher.dispatch({
      actionType: Constants.UPDATE_WEATHER,
      weather: weather
    })
  }
}
