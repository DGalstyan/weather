var React = require('react'),
    ConditionsUtils = require('../utils/ConditionsUtils');

// Extracts data from the JSON objects received from API and builds the HTML to display it.

module.exports = React.createClass({
  render: function () {
    var w = this.props.weather;
    var currentTemp = ConditionsUtils.buildCurrentTemp(w);
    var conditionsHeading = ConditionsUtils.buildConditionsHeading();
    var conditionsTable = ConditionsUtils.buildConditionsTable(w);
    var forecastHeading = ConditionsUtils.buildForecastHeading();
    var forecastTable = ConditionsUtils.buildForecastTable(w);
    var alert = w.alerts.length != 0 ? w.alerts[0].description : "";
    return (
      <div className="conditions group">
        <div className="current left group">
          <img className="icon left" src={w.current_observation.icon_url}/>
          {currentTemp}
          <h2 className="current-weather">{w.current_observation.weather}</h2>
          <h4 className="current-weather alert">{alert}</h4>
          <div className="current-stats group">
            {conditionsHeading}
            {conditionsTable}
          </div>
        </div>
        <div className="short-forecast right">
          <h2>5-day Forecast</h2>
          {forecastHeading}
          {forecastTable}
        </div>
      </div>
    );
  }
});
