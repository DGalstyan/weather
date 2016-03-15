var React = require('react'),
    HourlyUtils = require('../utils/HourlyUtils');

// Extracts data from the JSON objects received from API and builds the HTML to display it.

module.exports = React.createClass({
  render: function () {
    var hourly = this.props.weather.hourly_forecast;
    var header = HourlyUtils.buildHeader();
    var table = HourlyUtils.buildTable(hourly);
    return (
      <div className='hourly'>
        <h2 className='hourly-header'>Hourly Forecast (18 hours)</h2>
        {header}
        {table}
      </div>
    );
  }
});
