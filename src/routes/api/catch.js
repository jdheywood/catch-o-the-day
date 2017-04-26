'use strict';

import catchService from '../../services/catch';
import alert from '../../utils/alert';

/**
 * Catch API routes, for use by SPA client application
 * @module routes/api/catch
 * @param {object} app - the express application instance
 */
module.exports = app => {

  /**
   * Create new catch object
   */
  app.post('/api/catches', (req, res) => {
    catchService.createNewCatch(req.body.fish, req.body.weight).then((newCatch) => {
      res.json(newCatch);
    });
  });

  /**
   * Add additional weight of landed fish, update the current catch object
   */
  app.put('/api/catches/:id', (req, res) => {
    catchService.getCatchById(req.params.id).then((theCatch) => {
      catchService.addLandedFish(theCatch,
        req.body.fish,
        req.body.weight).then((updatedCatch) => {
        alert.send('', `${req.body.weight} of ${req.body.fish} added to catch ${updatedCatch._id}`);
        res.json(updatedCatch);
      });
    });
  });

  /**
   * Get a previous catch by identifier
   */
  app.get('/api/catches/:id', (req, res) => {
    catchService.getCatchById(req.params.id).then((theCatch) => {
      res.json(theCatch);
    });
  });

  /**
   * Get all catches
   */
  app.get('/api/catches', (req, res) => {
    catchService.getAllCatches().then((allCatches) => {
      res.json(allCatches);
    });
  });

};
