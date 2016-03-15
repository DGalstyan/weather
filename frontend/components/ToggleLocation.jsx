var React = require('react'),
    LocationsStore = require('../stores/locations'),
    LocationUtil = require('../utils/LocationUtil'),
    LocationApi = require('../apiUtils/LocationApi');

// ToggleLocation is responsible for determining whether a location is saved to a
// User's list or not, and displaying the appropriate button to add/remove the location.
// LocationUtil is also used here to bridge the gap between location data from the API and
// location data saved in database (see Autocomplete).

module.exports = React.createClass({
  getInitialState: function () {
    return { disabled: false };
  },
  addLocation: function () {
    var location = LocationUtil.convertLocation(this.props.location);
    this.setState({ disabled: true });
    LocationApi.addLocation(location, function () {
      this.setState({ disabled: false });
    }.bind(this));
  },
  removeLocation: function () {
    var location = LocationUtil.convertLocation(this.props.location);
    var idx = LocationsStore.findIndexOf(location);
    var id = LocationsStore.all()[idx].id;
    this.setState({ disabled: true });
    LocationApi.removeLocation(id, function () {
      this.setState({ disabled: false });
    }.bind(this));
  },
  isSaved: function () {
    var location = LocationUtil.convertLocation(this.props.location);
    var idx = LocationsStore.findIndexOf(location);
    return idx === -1 ? false : true;
  },
  render: function () {
    var saved = this.isSaved();
    var disabled = (LocationsStore.all().length === 5) || this.state.disabled;
    if (saved) {
      return <button className="toggle remove-button" disabled={this.state.disabled} onClick={this.removeLocation}>Remove Location</button>
    } else {
      return <button className="toggle add-button" disabled={disabled} onClick={this.addLocation}>Add Location</button>
    }
  }
})
