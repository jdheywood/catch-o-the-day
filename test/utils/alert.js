'use strict';

import alert from '../../src/utils/alert';

import {describe} from 'mocha';
import {expect, should} from 'chai';

module.exports = () => {
  describe('alert', () => {
    describe('when a test alert is sent', () => {
      it('should use a ghost emoji', () => {
        const actual = alert.getEmoji('test');
        const expected = ':ghost:';
        expect(actual).to.equal(expected);
      });

      it('should use the default channel', () => {
        const actual = alert.getChannel('test');
        const expected = '#alerts';
        expect(actual).to.equal(expected);
      });
    });
  });

};
