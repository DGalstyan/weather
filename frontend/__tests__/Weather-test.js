jest.unmock('../components/Weather.jsx');

var React = require('react'),
    ReactDOM = require('react-dom'),
    TestUtils = require('react-addons-test-utils'),
    Weather = require('../components/Weather.jsx'),
    WeatherStore = require('../stores/weather');

describe('Weather', function () {
  it('should not attempt to render without weather in state', function () {
    WeatherStore.get.mockReturnValue({ weather: null });
    var weather = TestUtils.renderIntoDocument(
      <Weather location={ {name: "Albany, NY", query: "/"} } />
    );
    var weatherElement = TestUtils.findRenderedDOMComponentWithClass(weather, 'weather');
    expect(weatherElement.children.length).toEqual(0);
  });
});
