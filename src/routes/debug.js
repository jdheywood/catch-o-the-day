'use strict';

import alert from '../utils/alert';

/**
 * Debug routes, to assist during development
 * @module routes/debug
 * @param {object} app - the express application instance
 */
module.exports = app => {

  /**
   * Submit of test alert functionality
   */
  app.post('/sendtestalert', (req, res) => {
      alert.send('test', req.body.message);
      res.redirect('/debug');
    });

  /**
   * Throw an error, to test our error route catches it
   */
  /* jshint unused: vars */
  app.get('/throw', (req, res) => {
    throw new Error('Have an error then');
  });

};
