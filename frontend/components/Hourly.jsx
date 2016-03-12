var React = require('react');

module.exports = React.createClass({
  render: function () {
    var hourly = this.props.weather.hourly_forecast;
    var table = [];
    var ul, hour;
    for (var i = 0; i < 18; i++) {
      hour = hourly[i];
      ul = <ul key={i} className="group hour">
            <li className='col-lg left'>{hour.FCTTIME.civil}</li>
            <li className='col-lg left'>{hour.temp.english + "°F"}</li>
            <li className='col-lg left'>{hour.feelslike.english + "°F"}</li>
            <li className='col-xxlg left group'>
              <div className="left">
                <img className="icon-sm" src={hour.icon_url}></img>
              </div>
              {hour.condition}
            </li>
            <li className='col-lg left'>{hour.humidity + "%"}</li>
            <li className='col-lg left'>{hour.wdir.dir + " " + hour.wspd.english + " mph"}</li>
          </ul>
      table.push(ul);
    }
    return (
      <div className='hourly'>
        <h2 className='hourly-header'>Hourly Forecast (18 hours)</h2>
        <ul className="table-heading group">
          <li className='col-lg left'>Time</li>
          <li className='col-lg left'>Temp</li>
          <li className='col-lg left'>Feels</li>
          <li className='col-xxlg left'>Description</li>
          <li className='col-lg left'>Humidity</li>
          <li className='col-lg left'>Wind</li>
        </ul>
        {table}
      </div>
    );
  }
});
