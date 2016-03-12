var React = require('react'),
    LocationsStore = require('../stores/locations'),
    LocationUtil = require('../utils/LocationUtil'),
    LocationApi = require('../apiUtils/LocationApi');

module.exports = React.createClass({
  getInitialState: function () {
    var location = LocationUtil.convertLocation(this.props.location);
    var idx = LocationsStore.findIndexOf(location);
    var saved = idx === -1 ? false : true;
    return { saved: saved };
  },
  componentDidMount: function () {
    this.listener = LocationsStore.addListener(this.updateState);
  },
  componentWillUnmount: function () {
    this.listener.remove();
  },
  componentWillReceiveProps: function (newProps) {
    var location = LocationUtil.convertLocation(newProps.location);
    var idx = LocationsStore.findIndexOf(location);
    var saved = idx === -1 ? false : true;
    this.setState({ saved: saved });
  },
  addLocation: function () {
    var location = LocationUtil.convertLocation(this.props.location);
    LocationApi.addLocation(location.name);
  },
  removeLocation: function () {
    var location = LocationUtil.convertLocation(this.props.location);
    var idx = LocationsStore.findIndexOf(location);
    var id = LocationsStore.all()[idx].id;
    LocationApi.removeLocation(id);
  },
  updateState: function () {
    var location = LocationUtil.convertLocation(this.props.location);
    var idx = LocationsStore.findIndexOf(location);
    var saved = idx === -1 ? false : true;
    this.setState({ saved: saved });
  },
  render: function () {
    if (this.state.saved) {
      return <div className="toggle remove-button" onClick={this.removeLocation}>Remove Location</div>
    } else {
      return <div className="toggle add-button" onClick={this.addLocation}>Add Location</div>
    }
  }
})
