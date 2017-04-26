'use strict';

var _alert = require('../utils/alert');

var _alert2 = _interopRequireDefault(_alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Debug routes, to assist during development
 * @module routes/debug
 * @param {object} app - the express application instance
 */
module.exports = function (app) {

  /**
   * Submit of test alert functionality
   */
  app.post('/sendtestalert', function (req, res) {
    _alert2.default.send('test', req.body.message);
    res.redirect('/debug');
  });

  /**
   * Throw an error, to test our error route catches it
   */
  /* jshint unused: vars */
  app.get('/throw', function (req, res) {
    throw new Error('Have an error then');
  });
};