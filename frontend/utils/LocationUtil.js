module.exports = {
  convertLocation: function (location) {
    var city = location.city;
    var province = location.state ? location.state : location.country;
    return { name: city + ", " + province };
  }
}
