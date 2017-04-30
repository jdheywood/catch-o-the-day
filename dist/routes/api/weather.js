'use strict';

var _weather = require('../../services/weather');

var _weather2 = _interopRequireDefault(_weather);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Weather API routes, for use when developing server application
 * @module routes/api/weather
 * @param {object} app - the express application instance
 */
module.exports = function (app) {

  /**
   * Get current weather
   */
  app.get('/api/weather', function (req, res) {
    _weather2.default.getApiResponse().then(function (apiResponse) {
      var description = _weather2.default.getCurrentWeather(apiResponse);
      var output = {
        description: description
      };
      res.json(output);
    });
  });
};