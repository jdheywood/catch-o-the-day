'use strict';

var _appConfig = require('../../config/appConfig.json');

var _appConfig2 = _interopRequireDefault(_appConfig);

var _secretConfig = require('../../config/secretConfig.json');

var _secretConfig2 = _interopRequireDefault(_secretConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Environment utility
 * @module utils/environment
 */
module.exports = {

  /**
   * Get the relevant connection string to our document store
   * @returns {string} connection - the string (url) to connect to relevant document store
   */
  getConnectionString: function getConnectionString() {
    var protocol = !!process.env.DB_PROTOCOL ? process.env.DB_PROTOCOL : _secretConfig2.default.dbConnection.protocol;
    var username = !!process.env.DB_USER ? process.env.DB_USER : _secretConfig2.default.dbConnection.username;
    var password = !!process.env.DB_PWD ? process.env.DB_PWD : _secretConfig2.default.dbConnection.password;
    var server = !!process.env.DB_URL ? process.env.DB_URL : _secretConfig2.default.dbConnection.server;
    var database = !!process.env.DB_NAME ? process.env.DB_NAME : _secretConfig2.default.dbConnection.database;
    return protocol + '://' + username + ':' + password + '@' + server + '/' + database;
  },


  /**
   * Returns a string representing the session key, either from environment vars or secret config as fall back
   * @returns {string} sessionSecretKey - the secret used to sign the session id cookie
   */
  getSessionSecretKey: function getSessionSecretKey() {
    return !!process.env.SESSION_SECRET_KEY ? process.env.SESSION_SECRET_KEY : _secretConfig2.default.sessionSecretKey;
  },


  /**
   * Returns the slack web hook url string
   * @returns {string} - slackWebHookUrl for use in alerting to slack
   */
  getSlackWebHookUrl: function getSlackWebHookUrl() {
    return !!process.env.SLACK_WEBHOOK_URL ? process.env.SLACK_WEBHOOK_URL : _secretConfig2.default.slackWebHookUrl;
  },


  /**
   * Returns the weather service api key
   * @returns {string} - apiKey for use when retrieving weather data
   */
  getWeatherServiceApiKey: function getWeatherServiceApiKey() {
    return !!process.env.WEATHER_API_KEY ? process.env.WEATHER_API_KEY : _secretConfig2.default.weather.apiKey;
  },


  /**
   * Returns flag indicating whether we are in debug mode or not, used throughout app to show debug details and
   * functionality in runing application to assist during development
   * @returns {boolean} debugMode - true or false indicating debug mode on or off
   */
  getDebugMode: function getDebugMode() {
    var environment = !!process.env.ENV_NAME ? process.env.ENV_NAME : 'live';
    var debugMode = false;
    if (environment === 'development') {
      debugMode = _appConfig2.default.app.debugMode.dev;
    } else if (environment === 'staging') {
      debugMode = _appConfig2.default.app.debugMode.staging;
    } else if (environment === 'live') {
      debugMode = _appConfig2.default.app.debugMode.live;
    }
    return debugMode;
  },


  /**
   * Get the root url of the hosted environment
   * @returns {string}
   */
  getRootUrl: function getRootUrl() {
    var environment = !!process.env.ENV_NAME ? process.env.ENV_NAME : 'live';
    var rootUrl = 'http://localhost:' + _appConfig2.default.app.devPort;
    if (environment === 'development') {
      rootUrl = _appConfig2.default.app.developmentEnvironmentUrl;
    } else if (environment === 'staging') {
      rootUrl = _appConfig2.default.app.stagingEnvironmentUrl;
    } else if (environment === 'live') {
      rootUrl = _appConfig2.default.app.customLiveEnvironmentUrl;
    }
    return rootUrl;
  }
};