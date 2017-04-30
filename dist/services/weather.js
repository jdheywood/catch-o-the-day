'use strict';

var _appConfig = require('../../config/appConfig.json');

var _appConfig2 = _interopRequireDefault(_appConfig);

var _environment = require('../utils/environment');

var _environment2 = _interopRequireDefault(_environment);

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_KEY = _environment2.default.getWeatherServiceApiKey();
var LAT = _appConfig2.default.app.weather.lat;
var LON = _appConfig2.default.app.weather.lon;
var URL = _appConfig2.default.app.weather.rootUrl + '?appid=' + API_KEY + '&lat=' + LAT + '&lon=' + LON;

/**
 * Weather service
 * @module services/weather
 */
module.exports = {

  /**
   * @param {object} apiResponse - The raw JSON response from our request to the weather API
   * @returns {string} weather - The current weather at the configured coordinates, or 'Unknown' if error encountered
   */
  getCurrentWeather: function getCurrentWeather(apiResponse) {
    if (apiResponse.weather && apiResponse.weather.length > 0 && apiResponse.weather[0].description) {
      return apiResponse.weather[0].description.toProperCase();
    }
    return 'Unknown';
  },


  /**
   * @returns {promise} response - The JSON response of the API call to our weather service of choice,
   * automatically parsed as JSON
   */
  getApiResponse: function getApiResponse() {
    var options = {
      uri: URL,
      qs: {
        appid: API_KEY,
        lat: LAT,
        lon: LON
      },
      headers: {
        'User-Agent': 'Request-Promise'
      },
      json: true
    };

    return (0, _requestPromise2.default)(options);
  }
};