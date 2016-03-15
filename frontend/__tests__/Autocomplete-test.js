jest.unmock('../components/Autocomplete.jsx');

var React = require('react'),
    ReactDOM = require('react-dom'),
    TestUtils = require('react-addons-test-utils'),
    Autocomplete = require('../components/Autocomplete.jsx');

describe('Autocomplete', function () {
  it('renders a list of results', function () {
    var autocomplete = TestUtils.renderIntoDocument(
      <Autocomplete />
    );
    autocomplete.setState({
      results: {
        RESULTS: [{ name: "One" }, { name: "Two" }]
      }
    });
    var list = TestUtils.findRenderedDOMComponentWithClass(autocomplete, 'results').children;
    expect(list.length).toEqual(2);
    expect(list[0].textContent).toEqual("One");
    expect(list[1].textContent).toEqual("Two");
  });
});
