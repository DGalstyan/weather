# [Weather App](http://fp-weather.herokuapp.com)

This is a simple weather app that allows you to view the current conditions, 5-day and hourly forecast for any city in the world.  You may also save locations to your list and remove locations from your list.

![Weather App] (https://github.com/alzapiedi/weather/blob/master/screenshots/weather.png)

## FEATURES

### User Authentication
Users are created and authenticated passively using cookies. A randomly generated base64 string is stored in cookie, if no cookie is found a new User is created and a cookie is set. New Users are saved with five default locations.

### Saved Locations
Locations are saved to the database and belong to a User. Adding and removing locations is done using the ToggleLocation React component.

### API Interface
All data is fetched via ajax requests to the Rails server, which uses HTTParty gem to retrieve weather data via the Wunderground API. A valid Wunderground API key is required and must be stored in ENV["API_KEY"].

### Autocomplete
Autocomplete also interfaces with a Wunderground API, but does not require a key. Results are retrieved and the top 5 are displayed in a dropdown.

### ToggleLocation
This component determines if the current location is saved in the User's list, and provides the correct Add/Remove action accordingly. This requires the use of the LocationUtil.convertLocation method to convert the location object received from the API into an object that can be compared the the locations saved in the database and LocationsStore.

## DEPLOYMENT

### Node
Requires node.js and npm. To install node run `brew install node`, this will also install npm.

### Node packages & Ruby gems
Navigate to project directory and run `npm install` and `bundle install`.

### Webpack
Run `webpack` to build the bundle.js file, then you may start the Rails server.


## TESTING

### RSpec Model Tests
Rails model and association validations are tested using RSpec.  Test files are located in /spec, to run tests use the command
`bundle exec rspec`

### Jest Component/Flux Store Tests
React components and Flux stores are tested using the Jest framework. To run the test suite use the command `npm test`.
