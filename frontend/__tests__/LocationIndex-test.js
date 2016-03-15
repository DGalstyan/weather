jest.unmock('../components/LocationIndex.jsx');

var React = require('react'),
    ReactDOM = require('react-dom'),
    TestUtils = require('react-addons-test-utils'),
    LocationIndex = require('../components/LocationIndex.jsx');

describe('LocationIndex', function () {
  it('should render locations in location store', function () {
    var index = TestUtils.renderIntoDocument(
      <LocationIndex locations={[{id: 1, name: "New York, NY"},
       {id: 2, name: "Chicago, IL"}]} />
    );
     var list = TestUtils.scryRenderedDOMComponentsWithClass(index, 'location');
     expect(list.length).toEqual(2);
     expect(list[0].textContent).toEqual("New York, NY");
     expect(list[1].textContent).toEqual("Chicago, IL");
  });
});
