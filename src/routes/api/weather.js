'use strict';

import weatherService from '../../services/weather';

/**
 * Weather API routes, for use when developing server application
 * @module routes/api/weather
 * @param {object} app - the express application instance
 */
module.exports = app => {

  /**
   * Get current weather
   */
  app.get('/api/weather', (req, res) => {
    weatherService.getApiResponse().then((apiResponse) => {
      let description = weatherService.getCurrentWeather(apiResponse);
      let output = {
        description: description
      };
      res.json(output);
    });
  });

};
