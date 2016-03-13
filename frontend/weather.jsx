var React = require('react'),
    ReactDOM = require('react-dom'),
    Weather = require('./components/Weather'),
    LocationIndex = require('./components/LocationIndex'),
    LocationApi = require('./apiUtils/LocationApi'),
    WeatherStore = require('./stores/weather'),
    LocationsStore = require('./stores/locations');

// Main app rendered by ReactDOM, stores current location in state and passes to child
// components as a property along with a function to modify the state.

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
