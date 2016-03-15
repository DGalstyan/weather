var React = require('react'),
    SunUtil = require('./SunUtil');

// SunUtil provides a method to extact sun phase data from the API object and make it ready to display.

module.exports = {
  buildCurrentTemp: function (w) {
    return (
      <div className="left temp">
        <h1>{Math.round(w.current_observation.temp_f)}</h1><h2 className="degrees">°F</h2>
        <h4 className="italics">Feels like {Math.round(w.current_observation.feelslike_f)}°</h4>
      </div>
    );
  },
  buildConditionsHeading: function () {
    return (
      <ul className="left">
        <li>Wind</li>
        <li>Humidity</li>
        <li>Dew Point</li>
        <li>Pressure</li>
        <li>Sunrise</li>
        <li>Sunset</li>
      </ul>
    );
  },
  buildConditionsTable: function (w) {
    var sunPhase = SunUtil.parseSunPhase(w.sun_phase);
    return (
      <ul className="right text-right">
        <li>{w.current_observation.wind_dir + " " + Math.round(w.current_observation.wind_mph) + " mph"}</li>
        <li>{w.current_observation.relative_humidity}</li>
        <li>{w.current_observation.dewpoint_f + "°F"}</li>
        <li>{w.current_observation.pressure_in + " in"}</li>
        <li>{sunPhase.sunrise}</li>
        <li>{sunPhase.sunset}</li>
      </ul>
    );
  },
  buildForecastHeading: function () {
    return (
      <ul className="short-forecast table-heading group">
        <li className="left col-md">Day</li>
        <li className="left col-xlg">Description</li>
        <li className="left col-sm">High</li>
        <li className="left col-sm">Low</li>
        <li className="left col-lg">Wind</li>
        <li className="left col-md">Humidity</li>
      </ul>
    );
  },
  buildForecastTable: function (weather) {
    var table = [];
    var day, abbreviation, ul;
    for (var i = 1; i < 6; i++) {
      day = weather.forecast.simpleforecast.forecastday[i];
      abbreviation = day.date.weekday.slice(0,3).toUpperCase();
      ul =
        <ul key={i} className="short-forecast-table group">
          <li className="left col-md">{abbreviation}</li>
          <li className="left col-xlg group">
            <div className="left">
              <img className="icon-sm" src={day.icon_url} width={25}></img>
            </div>
            {day.conditions}
          </li>
          <li className="left col-sm">{day.high.fahrenheit + "°F"}</li>
          <li className="left col-sm">{day.low.fahrenheit + "°F"}</li>
          <li className="left col-lg">{day.avewind.dir + " " + day.avewind.mph + " mph"}</li>
          <li className="left col-md">{day.avehumidity + "%"}</li>
        </ul>
      table.push(ul);
    }
    return table;
  }
}
