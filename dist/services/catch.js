'use strict';

var _q = require('q');

var _q2 = _interopRequireDefault(_q);

var _catch = require('../models/catch');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Catch service
 * @module services/catch
 */
module.exports = {

  /**
   * @param {string} fish - The name of the first type of fish landed for the date
   * @param {string} weight - The weight of the first type of fish landed for the date
   * @param {string} weather - The weather on the day of the catch
   * @returns {object} catch - The new catch, with the first weight of fish landed, date and weather
   */
  createNewCatch: function createNewCatch(fish, weight, weather) {
    var landed = new _catch.Landed({
      fish: fish,
      weight: weight
    });
    var newCatch = new _catch.Catch({
      weather: weather,
      landed: [landed]
    });
    return (0, _q2.default)(newCatch.save(function (error) {
      if (error) {
        console.log(error);
      }
    }));
  },
  getCatchById: function getCatchById(id) {
    return (0, _q2.default)(_catch.Catch.findById(id).exec());
  },
  addLandedFish: function addLandedFish(theCatch, fish, weight) {
    var landed = new _catch.Landed({
      fish: fish,
      weight: weight
    });
    theCatch.landed.push(landed);
    return (0, _q2.default)(theCatch.save(function (error) {
      if (error) {
        console.log(error);
      }
    }));
  },
  getAllCatches: function getAllCatches() {
    return (0, _q2.default)(_catch.Catch.find({}).sort({ 'date': 'asc' }).exec());
  }
};