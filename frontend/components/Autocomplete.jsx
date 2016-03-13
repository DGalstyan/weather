var React = require('react'),
    LocationApi = require('../apiUtils/LocationApi'),
    LocationUtil = require('../utils/LocationUtil'),
    WeatherApi = require('../apiUtils/WeatherApi');

// Autocomplete uses the Wunderground autocomplete API to list matching results
// as the search is being typed. LocationUtil is used to extract information about
// the location sent from the API into an object that can be used in determining
// whether the User has saved the current location or not.

module.exports = React.createClass({
  getInitialState: function () {
    return { query: "", results: {} };
  },
  update: function (e) {
    var query = e.target.value;
    this.setState({ query: query });
    if (query != "") {
      LocationApi.searchLocation(query, function (results) {
        this.setState({ results: results });
      }.bind(this));
    }
  },
  changeLocation: function (result) {
    return function () {
      var callback = function (loc) {
        var location = LocationUtil.convertLocation(loc);
        this.props.changeLocation(location);
      }.bind(this);
      this.setState({ query: "", results: {} });
      WeatherApi.fetchWeatherAutocomplete(result.l + ".json", callback);
    }.bind(this);
  },
  clearList: function () {
    this.setState({ results: {} });
  },
  render: function () {
    var list = [];
    if (this.state.results.RESULTS) {
      var r = this.state.results.RESULTS.slice(0, 5);
      list = r.map(function (result, i) {
        return <li key={i} onClick={this.changeLocation(result)}>{result.name}</li>
      }.bind(this));
    }
    return (
      <div className='search' onMouseLeave={this.clearList} onMouseEnter={this.update}>
        <input onChange={this.update} value={this.state.query} placeholder="Search by city or ZIP"></input>
        <ul className='results'>
          {list}
        </ul>
      </div>
    )
  }
});
