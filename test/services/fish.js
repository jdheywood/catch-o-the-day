import fish from '../../src/services/fish';

import {describe} from 'mocha';
import {expect, should} from 'chai';

const expected = [
  { name: 'catfish' },
  { name: 'pike' },
  { name: 'trout' }
];

module.exports = function () {
  describe('fish', () => {
    describe('when getAllFish is called', () => {
      it('should return all fish in the system', () => {
        fish.getAllFish().then((actual) => {
          expect(actual.length).to.equal(expected.length);
        });
      });
      it('should return the same named fish as expected', () => {
        fish.getAllFish().then((actual) => {
          expect(actual[0].name).to.equal(expected[0].name);
          expect(actual[1].name).to.equal(expected[1].name);
          expect(actual[2].name).to.equal(expected[2].name);
        });
      });
    });
  });

};
