'use strict';

import appConfig from '../../config/appConfig.json';
import secretConfig from '../../config/secretConfig.json';

/**
 * Environment utility
 * @module utils/environment
 */
module.exports = {

  /**
   * Get the relevant connection string to our document store
   * @returns {string} connection - the string (url) to connect to relevant document store
   */
  getConnectionString() {
    let protocol = !!process.env.DB_PROTOCOL ? process.env.DB_PROTOCOL : secretConfig.dbConnection.protocol;
    let username = !!process.env.DB_USER ? process.env.DB_USER : secretConfig.dbConnection.username;
    let password = !!process.env.DB_PWD ? process.env.DB_PWD : secretConfig.dbConnection.password;
    let server = !!process.env.DB_URL ? process.env.DB_URL : secretConfig.dbConnection.server;
    let database = !!process.env.DB_NAME ? process.env.DB_NAME : secretConfig.dbConnection.database;
    return `${protocol}://${username}:${password}@${server}/${database}`;
  },

  /**
   * Returns a string representing the session key, either from environment vars or secret config as fall back
   * @returns {string} sessionSecretKey - the secret used to sign the session id cookie
   */
  getSessionSecretKey() {
    return !!process.env.SESSION_SECRET_KEY ? process.env.SESSION_SECRET_KEY : secretConfig.sessionSecretKey;
  },

  /**
   * Returns the slack web hook url string
   * @returns {string} - slackWebHookUrl for use in alerting to slack
   */
  getSlackWebHookUrl() {
    return !!process.env.SLACK_WEBHOOK_URL ? process.env.SLACK_WEBHOOK_URL : secretConfig.slackWebHookUrl;
  },

  /**
   * Returns the weather service api key
   * @returns {string} - apiKey for use when retrieving weather data
   */
  getWeatherServiceApiKey() {
    return !!process.env.WEATHER_API_KEY ? process.env.WEATHER_API_KEY : secretConfig.weather.apiKey;
  },

  /**
   * Returns flag indicating whether we are in debug mode or not, used throughout app to show debug details and
   * functionality in runing application to assist during development
   * @returns {boolean} debugMode - true or false indicating debug mode on or off
   */
  getDebugMode() {
    let environment = !!process.env.ENV_NAME ? process.env.ENV_NAME : 'live';
    let debugMode = false;
    if (environment === 'development') {
      debugMode = appConfig.app.debugMode.dev;
    } else if (environment === 'staging') {
      debugMode = appConfig.app.debugMode.staging;
    } else if (environment === 'live') {
      debugMode = appConfig.app.debugMode.live;
    }
    return debugMode;
  },

  /**
   * Get the root url of the hosted environment
   * @returns {string}
   */
  getRootUrl() {
    let environment = !!process.env.ENV_NAME ? process.env.ENV_NAME : 'live';
    let rootUrl = `http://localhost:${appConfig.app.devPort}`;
    if (environment === 'development') {
      rootUrl = appConfig.app.developmentEnvironmentUrl;
    } else if (environment === 'staging') {
      rootUrl = appConfig.app.stagingEnvironmentUrl;
    } else if (environment === 'live') {
      rootUrl = appConfig.app.customLiveEnvironmentUrl;
    }
    return rootUrl;
  },

};
