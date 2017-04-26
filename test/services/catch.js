'use strict';

import catchService from '../../src/services/catch';

import {describe} from 'mocha';
import {expect, should} from 'chai';
import moment from 'moment';

const expected = {
  date: moment().format('YYYY-MM-DD'),
  weather: 'Sunny',
  landed: [
    {
      name: 'Catfish',
      weight: '5kg'
    }
  ]
};

const landed = {
  fish: 'Pike',
  weight: '10kg'
};

module.exports = () => {
  describe('catchService', () => {
    describe('when createNewCatch is called', () => {
      it('should return a new catch with the first weight of fish landed', () => {
        catchService.createNewCatch(expected.landed[0].name, expected.landed[0].weight, expected.weather)
          .then((actual) => {
          expect(actual.weather).to.equal(expected.weather);
          expect(actual.landed[0].name).to.equal(expected.landed[0].name);
          expect(actual.landed[0].weight).to.equal(expected.landed[0].name);
        })
      });
    });
    describe('when getAllCatches is called', () => {
      it('should return an array of all catches in the system', () => {
        catchService.getAllCatches().then((catches) => {
          expect(catches).to.have.length.of.at.least(1);
        });
      });
    });
    describe('when addLandedFish is called', () => {
      it('should add the name and weight of landed fish to the specified catch', () => {
        catchService.getAllCatches().then((catches) => {
          catchService.addLandedFish(catches[0], landed.fish, landed.weight).then((updatedCatch) => {
            expect(updatedCatch).to.not.equal(null);
            expect(updatedCatch).to.have.property('landed').with.lengthOf(2);
            expect(updatedCatch.landed[1].fish).to.equal(landed.fish);
            expect(updatedCatch.landed[1].weight).to.equal(landed.weight);
          });
        });
      });
    });
    describe('when deleteCatchById is called with the identifier of the newly added catch', () => {
      it('should delete the catch with the identifier specified', () => {
        catchService.getAllCatches().then((catches) => {
          catchService.deleteCatchById(catches[0].id).then((error, result) => {
            expect(error).to.equal(null);
            expect(result).to.not.equal(null);
            expect(result.id).to.equal(catches[0].id);
            expect(result).to.have.property('landed').with.lengthOf(2);
          });
        });
      });
    });
  });

};