// Builds an object with sunrise/sunset data extracted from API data.
// Takes extra precautions just in case sunset is in the AM and sunrise is PM.

module.exports = {
  parseSunPhase: function (sunPhase) {
    var ampm, sunrise, sunset, hour;
    hour = parseInt(sunPhase.sunrise.hour);
    if (hour > 12) {
      hour -= 12;
      ampm = "PM";
    } else if (hour < 12) {
      ampm = "AM"
    } else {
      ampm = "PM"
    }
    sunrise = hour + ":" + sunPhase.sunrise.minute + " " + ampm;
    hour = parseInt(sunPhase.sunset.hour);
    if (hour > 12) {
      hour -= 12;
      ampm = "PM";
    } else if (hour < 12) {
      ampm = "AM"
    } else {
      ampm = "PM"
    }
    sunset = hour + ":" + sunPhase.sunset.minute + " " + ampm;
    return { sunrise: sunrise, sunset: sunset };
  }
}
