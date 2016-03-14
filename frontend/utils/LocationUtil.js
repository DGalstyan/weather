// Builds an object out of API location data that can be read by the LocationsStore

module.exports = {
  convertLocation: function (location) {
    var city = location.city;
    var province = location.state ? location.state : location.country;
    return { name: city + ", " + province, query: location.l };
  }
}
