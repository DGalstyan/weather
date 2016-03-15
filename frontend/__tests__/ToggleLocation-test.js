jest.unmock('../components/ToggleLocation.jsx');

var React = require('react'),
    ReactDOM = require('react-dom'),
    TestUtils = require('react-addons-test-utils'),
    ToggleLocation = require('../components/ToggleLocation.jsx'),
    LocationsStore = require('../stores/locations');

describe('ToggleLocation', function () {
  it('should not allow more than 5 locations to be saved', function () {
    LocationsStore.all.mockReturnValue(
     [{id: 1, name: "New York, NY"},
      {id: 2, name: "Chicago, IL"},
      {id: 3, name: "Seattle, WA"},
      {id: 4, name: "Houston, TX"},
      {id: 5, name: "San Diego, CA"}]
    );
    LocationsStore.findIndexOf.mockReturnValue(-1);
    var button = TestUtils.renderIntoDocument(
      <ToggleLocation location={ {city: "Albany", state: "NY", l: "/"} } />
    );
    var buttonElement = TestUtils.findRenderedDOMComponentWithTag(button, 'button');
    expect(buttonElement.disabled).toEqual(true);
  });
  it('should allow the addition of location that is not saved', function () {
    var button = TestUtils.renderIntoDocument(
      <ToggleLocation location={ {city: "Albany", state: "NY", l: "/"} } />
    );
    var buttonNode = ReactDOM.findDOMNode(button);
    expect(buttonNode.textContent).toEqual("Add Location");
  });
  it('should allow the removal of location that is saved', function () {
    LocationsStore.findIndexOf.mockReturnValue(0);
    var button = TestUtils.renderIntoDocument(
      <ToggleLocation location={ {city: "Albany", state: "NY", l: "/"} } />
    );
    var buttonNode = ReactDOM.findDOMNode(button);
    expect(buttonNode.textContent).toEqual("Remove Location");
  });
});
