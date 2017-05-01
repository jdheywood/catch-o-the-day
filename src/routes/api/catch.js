'use strict';

import alert from '../../utils/alert';
import catchService from '../../services/catch';
import weatherService from '../../services/weather';

/**
 * Catch API routes, for use by SPA client application
 * @module routes/api/catch
 * @param {object} app - the express application instance
 */
module.exports = app => {

  /**
   * Add weight of landed fish to the daily catch,
   * either creates today's daily catch if it doesn;t already exist and adds landed fish to this,
   * or updates the current daily catch object with the new landed fish
   * both cases return the daily catch
   */
  app.put('/api/catches/:day/landed', (req, res) => {
    catchService.getCatchByDay(req.params.day).then((theCatch) => {
      catchService.addLandedFish(theCatch,
        req.body.fish,
        req.body.weight).then(() => {
        alert.send('', `${req.body.weight} of ${req.body.fish} added to catch ${theCatch.day}`);
        res.json(theCatch);
      });
    });
  });

  /**
   * Get a daily catch by day, in format YYYY-MM-DD
   */
  app.get('/api/catches/:day', (req, res) => {
    catchService.getCatchByDay(req.params.day).then((theCatch) => {
      if (!theCatch) {
        weatherService.getApiResponse().then((apiResponse) => {
          let weather = weatherService.getCurrentWeather(apiResponse);
          catchService.createNewCatch(weather).then((newCatch) => {
            res.json(newCatch);
          });
        });
      } else {
        res.json(theCatch);
      }
    });
  });

  /**
   * Get all daily catches
   */
  app.get('/api/catches', (req, res) => {
    catchService.getAllCatches().then((allCatches) => {
      res.json(allCatches);
    });
  });

  /**
   * Delete landed fish from daily catch by day and landed identifier
   */
  app.delete('/api/catches/:day/landed/:id', (req, res) => {
    catchService.getCatchByDay(req.params.day).then((theCatch) => {
      catchService.deleteLandedByCatchAndLandedId(theCatch, req.params.id).then(() => {
        res.json(theCatch);
      });
    });
  });

  /**
   * Update landed fish from daily catch by day and landed identifier,
   * for the purposes of this application only the sold property can be updated
   */
  app.put('/api/catches/:day/landed/:id', (req, res) => {
    catchService.getCatchByDay(req.params.day).then((theCatch) => {
      catchService.updateLandedByCatchAndLandedId(theCatch, req.params.id).then(() => {
        res.json(theCatch);
      });
    });
  });

};
