var React = require('react');

module.exports = {
  buildTable: function (hourly) {
    var table = [];
    for (var i = 0; i < 18; i++) {
      hour = hourly[i];
      ul = this.buildList(hour, i);
      table.push(ul);
    }
    return table;
  },
  buildList: function (hour, i) {
    return (
      <ul key={i} className="group hour">
        <li className='col-xlg left'>{hour.FCTTIME.civil}</li>
        <li className='col-lg left'>{hour.temp.english + "°F"}</li>
        <li className='col-lg left'>{hour.feelslike.english + "°F"}</li>
        <li className='col-xxlg left group'>
          <div className="left">
            <img className="icon-sm" src={hour.icon_url}></img>
          </div>
          {hour.condition}
        </li>
        <li className='col-xlg left'>{hour.humidity + "%"}</li>
        <li className='col-lg left'>{hour.wdir.dir + " " + hour.wspd.english + " mph"}</li>
      </ul>
    );
  },
  buildHeader: function () {
    return (
      <ul className="table-heading group">
        <li className='col-xlg left'>Time</li>
        <li className='col-lg left'>Temp</li>
        <li className='col-lg left'>Feels</li>
        <li className='col-xxlg left'>Description</li>
        <li className='col-xlg left'>Humidity</li>
        <li className='col-lg left'>Wind</li>
      </ul>
    );
  }
}
