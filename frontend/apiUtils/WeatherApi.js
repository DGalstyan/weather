var WeatherActions = require('../actions/weather');

module.exports = {
  fetchWeather: function (apiQuery) {
    $.get('/api/weather?api_query=forecast10day/alerts/astronomy/conditions/geolookup/hourly/q/' + apiQuery, function (weather) {
      WeatherActions.updateWeather(weather);
      console.log(weather);
    });
  },
  fetchWeatherAutocomplete: function (acQuery, cb) {
    $.get('/api/weather?api_query=forecast10day/alerts/astronomy/conditions/geolookup/hourly' + acQuery, function (weather) {
      WeatherActions.updateWeather(weather);
      cb && cb(weather.location);
    });
  }
}
