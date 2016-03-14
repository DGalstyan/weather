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
    return { locations: LocationsStore.all() };
  },
  componentDidMount: function () {
    this.listener = LocationsStore.addListener(this.updateLocations);
    LocationApi.fetchLocations(this.changeLocation);
  },
  componentWillUnmount: function () {
    this.listener.remove();
  },
  changeLocation: function (location) {
    this.setState({ location: location });
  },
  updateLocations: function () {
    this.setState({ locations: LocationsStore.all() });
  },
  render: function () {
    if (!this.state.location) { return <div></div>; }
    return (
      <div className="app group">
        <LocationIndex locations={this.state.locations} changeLocation={this.changeLocation} />
        <Weather changeLocation={this.changeLocation} location={this.state.location} />
      </div>
    );
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var root = document.getElementById('root');
  ReactDOM.render(<WeatherApp />, root);
});
