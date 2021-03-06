'use strict';

import http from 'http';
import assert from 'assert';

import '../../src/app.js';

const domain = 'http://127.0.0.1:3030';
const pathHome = '/';
const pathDebug = '/debug';
const pathCoffee = '/coffee';

module.exports = () => {
  describe(pathHome, () => {
    it('should return 200', done => {
      http.get(`${domain}${pathHome}`, res => {
        assert.equal(200, res.statusCode);
        done();
      });
    });
  });

  describe(pathDebug, () => {
    it('should return 200', done => {
      http.get(`${domain}${pathDebug}`, res => {
        assert.equal(200, res.statusCode);
        done();
      });
    });
  });

  describe(pathCoffee, () => {
    it('should return 418', done => {
      http.get(`${domain}${pathCoffee}`, res => {
        assert.equal(418, res.statusCode);
        done();
      });
    });
  });

};
