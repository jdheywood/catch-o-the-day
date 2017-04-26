'use strict';

import appConfig from '../../config/appConfig.json';
import environment from '../utils/environment';
import moment from 'moment';

const footerLinks = [
  {
    url: 'http://www.jdheywood.com',
    text: 'About me'
  },
  {
    url: 'https://www.upwork.com/o/profiles/users/_~018b189edb3ffaab80/',
    text: 'Custom development by jdheywood'
  }
];

/**
 * Index routes
 * @module routes/index
 * @param {object} app - the express application instance
 */
module.exports = app => {

  /**
   * Render the home view
   */
  app.get('/', (req, res) => {
    res.render('home', {
      meta: appConfig.app.defaultMeta,
      content: appConfig.app.defaultContent,
      user: req.user,
      moment: moment,
      loggedIn: false,
      environmentName: process.env.ENV_NAME,
      context: 'home',
      debugMode: environment.getDebugMode(),
      footerLinks: footerLinks
    });
  });

  /**
   * Render the debug view
   */
  app.get('/debug',(req, res) => {
    res.render('debug', {
      user: req.user,
      meta: appConfig.app.defaultMeta,
      content: appConfig.app.defaultContent,
      moment: moment,
      loggedIn: true,
      environmentName: process.env.ENV_NAME,
      context: 'admin',
      debugMode: environment.getDebugMode(),
      canDebug: true,
      footerLinks: footerLinks
    });
  });

  /**
   * Easter egg, 418
   */
  app.get('/coffee', (req, res) => {
    res.status(418);
    res.render('errors/418', {
      meta: appConfig.app.defaultMeta,
      content: appConfig.app.defaultContent,
      user: req.user,
      moment: moment,
      loggedIn: false,
      environmentName: process.env.ENV_NAME,
      context: 'home',
      debugMode: false,
      footerLinks: { url: 'Sign off', text: '/logout' }
    });
  });

};
