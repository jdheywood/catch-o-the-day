'use strict';

import appConfig from '../../config/appConfig.json';
import environment from '../utils/environment';
import requestPromise from 'request-promise';

const API_KEY = environment.getWeatherServiceApiKey();
const LAT = appConfig.app.weather.lat;
const LON = appConfig.app.weather.lon;
const URL = `${appConfig.app.weather.rootUrl}?appid=${API_KEY}&lat=${LAT}&lon=${LON}`;

/**
 * Weather service
 * @module services/weather
 */
module.exports = {

  /**
   * @param {object} apiResponse - The raw JSON response from our request to the weather API
   * @returns {string} weather - The current weather at the configured coordinates, or 'Unknown' if error encountered
   */
  getCurrentWeather(apiResponse) {
    if (apiResponse.weather && apiResponse.weather.length > 0 && apiResponse.weather[0].description) {
      return apiResponse.weather[0].description.toProperCase();
    }
    return 'Unknown';
  },

  /**
   * @returns {promise} response - The JSON response of the API call to our weather service of choice,
   * automatically parsed as JSON
   */
  getApiResponse() {
    let options = {
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

    return requestPromise(options);
  }

};