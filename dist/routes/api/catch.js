'use strict';

var _alert = require('../../utils/alert');

var _alert2 = _interopRequireDefault(_alert);

var _catch = require('../../services/catch');

var _catch2 = _interopRequireDefault(_catch);

var _weather = require('../../services/weather');

var _weather2 = _interopRequireDefault(_weather);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Catch API routes, for use by SPA client application
 * @module routes/api/catch
 * @param {object} app - the express application instance
 */
module.exports = function (app) {

  /**
   * Add weight of landed fish to the daily catch,
   * either creates today's daily catch if it doesn;t already exist and adds landed fish to this,
   * or updates the current daily catch object with the new landed fish
   * both cases return the daily catch
   */
  app.put('/api/catches/:day/landed', function (req, res) {
    _catch2.default.getCatchByDay(req.params.day).then(function (theCatch) {
      _catch2.default.addLandedFish(theCatch, req.body.fish, req.body.weight).then(function () {
        _alert2.default.send('', req.body.weight + ' of ' + req.body.fish + ' added to catch ' + theCatch.day);
        res.json(theCatch);
      });
    });
  });

  /**
   * Get a daily catch by day, in format YYYY-MM-DD
   */
  app.get('/api/catches/:day', function (req, res) {
    _catch2.default.getCatchByDay(req.params.day).then(function (theCatch) {
      if (!theCatch) {
        _weather2.default.getApiResponse().then(function (apiResponse) {
          var weather = _weather2.default.getCurrentWeather(apiResponse);
          _catch2.default.createNewCatch(weather).then(function (newCatch) {
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
  app.get('/api/catches', function (req, res) {
    _catch2.default.getAllCatches().then(function (allCatches) {
      res.json(allCatches);
    });
  });

  /**
   * Delete landed fish from daily catch by day and landed identifier
   */
  app.delete('/api/catches/:day/landed/:id', function (req, res) {
    _catch2.default.getCatchByDay(req.params.day).then(function (theCatch) {
      _catch2.default.deleteLandedByCatchAndLandedId(theCatch, req.params.id).then(function () {
        res.json(theCatch);
      });
    });
  });

  /**
   * Update landed fish from daily catch by day and landed identifier,
   * for the purposes of this application only the sold property can be updated
   */
  app.put('/api/catches/:day/landed/:id', function (req, res) {
    _catch2.default.getCatchByDay(req.params.day).then(function (theCatch) {
      _catch2.default.updateLandedByCatchAndLandedId(theCatch, req.params.id).then(function () {
        res.json(theCatch);
      });
    });
  });
};