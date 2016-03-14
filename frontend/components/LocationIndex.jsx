var React = require('react'),
    LocationsStore = require('../stores/locations'),
    LocationApi = require('../apiUtils/LocationApi');

// LocationIndex is a side bar displaying User's saved locations.
// Each list item has an onClick handler that will update the state of the parent.

module.exports = React.createClass({
  changeLocation: function (location) {
    return function () {
      this.props.changeLocation(location);
    }.bind(this);
  },
  render: function () {
    var changeLocation = this.changeLocation;
    var names = this.props.locations.map(function(loc, i) {
      return <div key={i} className="location" onClick={changeLocation(loc)}>{loc.name}</div>;
    });
    return (
      <nav className='location-nav group'>
        {names}
      </nav>
    );
  }
})
