var WeatherActions = require('../actions/weather');

// Fetches weather report from Wunderground API via the rails server (to keep API key hidden).

module.exports = {
  fetchWeather: function (apiQuery) {
    $.get('/api/weather?api_query=forecast10day/alerts/astronomy/conditions/geolookup/hourly/q/' + apiQuery, function (weather) {
      WeatherActions.updateWeather(weather);
    });
  },
  fetchWeatherAutocomplete: function (acQuery, cb) {
    $.get('/api/weather?api_query=forecast10day/alerts/astronomy/conditions/geolookup/hourly' + acQuery, function (weather) {
      WeatherActions.updateWeather(weather);
      cb && cb(weather.location);
    });
  }
}
