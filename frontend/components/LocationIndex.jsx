var React = require('react'),
    LocationsStore = require('../stores/locations'),
    LocationApi = require('../apiUtils/LocationApi');

// LocationIndex is a side bar displaying User's saved locations.
// Each list item has an onClick handler that will update the state of the parent.

module.exports = React.createClass({
  getInitialState: function () {
    return { locations: LocationsStore.all() };
  },
  componentDidMount: function () {
    this.listener = LocationsStore.addListener(this.updateState);
    LocationApi.fetchLocations();
  },
  componentWillUnmount: function () {
    this.listener.remove();
  },
  changeLocation: function (location) {
    return function () {
      this.props.changeLocation(location);
    }.bind(this);
  },
  updateState: function () {
    this.setState({ locations: LocationsStore.all() });
  },
  render: function () {
    var changeLocation = this.changeLocation;
    var names = this.state.locations.map(function(loc, i) {
      return <li key={i} onClick={changeLocation(loc)}>{loc.name}</li>;
    });
    return (
      <nav className='locations left'>
        <ul>{names}</ul>
      </nav>
    );
  }
})
