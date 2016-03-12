var React = require('react'),
    ReactDOM = require('react-dom'),
    Weather = require('./components/Weather'),
    LocationIndex = require('./components/LocationIndex'),
    LocationApi = require('./apiUtils/LocationApi'),
    WeatherStore = require('./stores/weather'),
    LocationsStore = require('./stores/locations');

var WeatherApp = React.createClass({
  getInitialState: function () {
    return { location: { name: "New York, NY"} };
  },
  componentDidMount: function () {
    LocationApi.fetchLocations(this.changeLocation);
  },
  changeLocation: function (location) {
    this.setState({ location: location });
  },
  render: function () {
    if (!this.state.location) { return <div></div>; }
    return (
      <div className="app group">
        <LocationIndex changeLocation={this.changeLocation} />
        <Weather changeLocation={this.changeLocation} location={this.state.location} />
      </div>
    );
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var root = document.getElementById('root');
  ReactDOM.render(<WeatherApp />, root);
});







//For readme
// uses HTTParty gem to fetch weather server side

// Optimizations
// Store weather in cache and only refetch after x minutes.  Save API calls


// Users are created and authenticated passively using cookies, new users are
// given the five default cities as associated locations.  Locations are added
// and removed by ajax requests to the server, with success callbacks that update
// the local store.
