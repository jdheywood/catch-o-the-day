'use strict';

import http from 'http';
import assert from 'assert';

import '../../../src/app.js';

const domain = 'http://127.0.0.1:3030';
const pathCatch = '/api/catches';

module.exports = function () {
  describe(pathCatch, () => {
    it('GET request should return all catches', done => {
      http.get(`${domain}${pathCatch}`, res => {
        assert.equal(200, res.statusCode);
        done();
      });
    });
  });

};
