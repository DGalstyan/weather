jest.unmock('../stores/weather.js');
jest.unmock('../constants/constants.js');
jest.unmock('flux/utils');
jest.unmock('jquery');
describe('WeatherStore', function () {
  var Constants = require('../constants/constants');
  var AppDispatcher, WeatherStore, callback;
  var updateWeatherPayload = {
    actionType: Constants.UPDATE_WEATHER,
    weather: { test: "Test Value" }
  };
  beforeEach(function() {
    AppDispatcher = require('../dispatcher/dispatcher');
    WeatherStore = require('../stores/weather');
    callback = AppDispatcher.register.mock.calls[0][0];
  });
  it('registers a callback with the dispatcher', function () {
    expect(AppDispatcher.register.mock.calls.length).toBe(1);
  });
  it('initializes with no weather', function() {
    var weather = WeatherStore.get();
    expect(weather.test).toBeUndefined();
  });
  it('updates the weather in the store', function () {
    AppDispatcher.isDispatching.mockReturnValue(true);
    callback(updateWeatherPayload);
    var weather = WeatherStore.get();
    expect(weather.test).toEqual("Test Value");
  });
});
