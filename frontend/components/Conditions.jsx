var React = require('react'),
    SunUtil = require('../utils/SunUtil');

// Extracts data from the JSON objects received from API and builds the HTML to display it.

module.exports = React.createClass({
  render: function () {
    var w = this.props.weather;
    var alert = w.alerts.length != 0 ? w.alerts[0].description : "";
    var table = [];
    var day, ul, abbreviation;
    var sunPhase = SunUtil.parseSunPhase(w.sun_phase);
    for (var i = 1; i < 8; i++) {
      day = w.forecast.simpleforecast.forecastday[i];
      abbreviation = day.date.weekday.slice(0,3).toUpperCase();
      ul = <ul key={i} className="short-forecast-table group">
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
    return (
      <div className="conditions group">
        <div className="current left group">
          <img className="icon left" src={w.current_observation.icon_url}/>
          <div className="left temp">
            <h1>{Math.round(w.current_observation.temp_f)}</h1><h2 className="degrees">°F</h2>
            <h4 className="italics">Feels like {Math.round(w.current_observation.feelslike_f)}°</h4>
          </div>
          <h2 className="current-weather">{w.current_observation.weather}</h2>
          <h4 className="current-weather alert">{alert}</h4>
          <div className="current-stats group">
            <ul className="left">
              <li>Wind</li>
              <li>Humidity</li>
              <li>Dew Point</li>
              <li>Pressure</li>
              <li>Sunrise</li>
              <li>Sunset</li>
            </ul>
            <ul className="right text-right">
              <li>{w.current_observation.wind_dir + " " + Math.round(w.current_observation.wind_mph) + " mph"}</li>
              <li>{w.current_observation.relative_humidity}</li>
              <li>{w.current_observation.dewpoint_f + "°F"}</li>
              <li>{w.current_observation.pressure_in + " in"}</li>
              <li>{sunPhase.sunrise}</li>
              <li>{sunPhase.sunset}</li>
            </ul>
          </div>
        </div>
        <div className="short-forecast right">
          <ul className="short-forecast table-heading group">
            <li className="left col-md">Day</li>
            <li className="left col-xlg">Description</li>
            <li className="left col-sm">High</li>
            <li className="left col-sm">Low</li>
            <li className="left col-lg">Wind</li>
            <li className="left col-md">Humidity</li>
          </ul>
          {table}
        </div>
      </div>
    );
  }
});
