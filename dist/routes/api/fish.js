'use strict';

var _fish = require('../../services/fish');

var _fish2 = _interopRequireDefault(_fish);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Fish API routes, for use by SPA client application
 * @module routes/api/fish
 * @param {object} app - the express application instance
 */
module.exports = function (app) {

  /**
   * Get all fish
   */
  app.get('/api/fish', function (req, res) {
    _fish2.default.getAllFish().then(function (allFish) {
      res.json(allFish);
    });
  });
};