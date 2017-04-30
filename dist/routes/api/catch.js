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
   * Create new catch object
   */
  app.post('/api/catches', function (req, res) {
    _catch2.default.createNewCatchWithLandedFish(req.body.fish, req.body.weight).then(function (newCatch) {
      res.json(newCatch);
    });
  });

  /**
   * Add additional weight of landed fish, update the current catch object
   */
  app.put('/api/catches/:id', function (req, res) {
    _catch2.default.getCatchById(req.params.id).then(function (theCatch) {
      _catch2.default.addLandedFish(theCatch, req.body.fish, req.body.weight).then(function (updatedCatch) {
        _alert2.default.send('', req.body.weight + ' of ' + req.body.fish + ' added to catch ' + updatedCatch._id);
        res.json(updatedCatch);
      });
    });
  });

  /**
   * Get a previous catch by day
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
   * Get a previous catch by identifier
   */
  app.get('/api/catches/:id', function (req, res) {
    _catch2.default.getCatchById(req.params.id).then(function (theCatch) {
      res.json(theCatch);
    });
  });

  /**
   * Get all catches
   */
  app.get('/api/catches', function (req, res) {
    _catch2.default.getAllCatches().then(function (allCatches) {
      res.json(allCatches);
    });
  });
};