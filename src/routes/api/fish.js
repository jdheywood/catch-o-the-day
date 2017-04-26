'use strict';

import fishService from '../../services/fish';

/**
 * Fish API routes, for use by SPA client application
 * @module routes/api/fish
 * @param {object} app - the express application instance
 */
module.exports = app => {

  /**
   * Get all fish
   */
  app.get('/api/fish', (req, res) => {
    fishService.getAllFish().then((allFish) => {
      res.json(allFish);
    });
  });

};
