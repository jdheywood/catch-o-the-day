'use strict';

import fishService from '../../src/services/fish';

import {describe} from 'mocha';
import {expect, should} from 'chai';

const expected = [
  { name: 'Catfish' },
  { name: 'Pike' },
  { name: 'Trout' }
];

module.exports = () => {
  describe('fishService', () => {
    describe('when getAllFish is called', () => {
      it('should return all fish in the system', () => {
        fishService.getAllFish().then((actual) => {
          expect(actual.length).to.equal(expected.length);
        });
      });
      it('should return the same named fish as expected', () => {
        fishService.getAllFish().then((actual) => {
          expect(actual[0].name).to.equal(expected[0].name);
          expect(actual[1].name).to.equal(expected[1].name);
          expect(actual[2].name).to.equal(expected[2].name);
        });
      });
    });
  });

};
