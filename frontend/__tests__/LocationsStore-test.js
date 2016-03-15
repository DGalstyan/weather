jest.unmock('../stores/locations.js');
jest.unmock('../constants/constants.js');
jest.unmock('flux/utils');
describe('LocationsStore', function () {
  var Constants = require('../constants/constants');
  var AppDispatcher, LocationsStore, callback;
  var addLocationPayload = {
    actionType: Constants.ADD_LOCATION,
    location: { name: "Boston, MA" }
  };
  var removeLocationPayload = {
    actionType: Constants.REMOVE_LOCATION,
    location: { name: "New York, NY" }
  };
  beforeEach(function() {
    AppDispatcher = require('../dispatcher/dispatcher');
    LocationsStore = require('../stores/locations');
    callback = AppDispatcher.register.mock.calls[0][0];
  });
  it('registers a callback with the dispatcher', function () {
    expect(AppDispatcher.register.mock.calls.length).toBe(1);
  });
  it('initializes with no locations', function() {
    var all = LocationsStore.all();
    expect(all.length).toEqual(0);
  });
  it('adds a location to the store', function() {
    AppDispatcher.isDispatching.mockReturnValue(true);
    callback(addLocationPayload);
    var all = LocationsStore.all();
    expect(all.length).toBe(1);
    expect(all[0].name).toEqual('Boston, MA');
  });
  it('removes a location to the store', function() {
    AppDispatcher.isDispatching.mockReturnValue(true);
    LocationsStore.addLocation({ name: "New York, NY" });
    callback(removeLocationPayload);
    var all = LocationsStore.all();
    expect(all.length).toBe(0);
  });

});
