var WeatherActions = require('../actions/weather');

// Fetches weather report from Wunderground API via the rails server (to keep API key hidden).

module.exports = {
  fetchWeather: function (acQuery, cb) {
    $.get('/api/weather?api_query=forecast10day/alerts/astronomy/conditions/geolookup/hourly' + acQuery + ".json", function (weather) {
      WeatherActions.updateWeather(weather);
      console.log(weather);
      cb && cb(weather.location);
    });
  }
}
