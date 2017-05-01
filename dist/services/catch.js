'use strict';

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

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
   * @returns {array} catches - Array of all catches in the system
   */
  getAllCatches: function getAllCatches() {
    return (0, _q2.default)(_catch.Catch.find({}).sort({ 'date': 'asc' }).exec());
  },


  /**
   * @param {string} id - The identifier of the catch to fetch
   * @returns {object} catch - The catch with the given identifier
   */
  getCatchById: function getCatchById(id) {
    return (0, _q2.default)(_catch.Catch.findById(id).exec());
  },


  /**
   * @param {string} day - Formatted date string; YYYY-MM-DD
   * @returns {object} catch - The catch with the given identifier
   */
  getCatchByDay: function getCatchByDay(day) {
    return (0, _q2.default)(_catch.Catch.findOne({ day: day }).exec());
  },


  /**
   * @param {string} weather - The weather on the day of the catch
   * @returns {object} catch - The new catch with just day and weather set
   */
  createNewCatch: function createNewCatch(weather) {
    var newCatch = new _catch.Catch({
      weather: weather
    });
    return (0, _q2.default)(newCatch.save(function (error) {
      if (error) {
        console.log(error);
      }
    }));
  },


  /**
   * @param {string} fish - The name of the first type of fish landed for the date
   * @param {string} weight - The weight of the first type of fish landed for the date
   * @param {string} weather - The weather on the day of the catch
   * @returns {object} catch - The new catch, with the first weight of fish landed, day and weather
   */
  createNewCatchWithLandedFish: function createNewCatchWithLandedFish(fish, weight, weather) {
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


  /**
   *
   * @param {object} theCatch - The catch to add a landed weight of fish to
   * @param {string} fish - The name of the type of fish landed
   * @param {string} weight - The weight of the type of fish landed
   * @returns {object} catch - The updated catch object
   */
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


  /**
   * @param {string} id - The identifier of the catch to fetch
   * @returns {object} catch - The catch with the given identifier
   */
  deleteCatchById: function deleteCatchById(id) {
    return (0, _q2.default)(_catch.Catch.findByIdAndRemove(id).exec());
  },


  /**
   * @returns {object} result - Presumably an empty array OR the array of all documents just removed?
   */
  deleteAllCatches: function deleteAllCatches() {
    return (0, _q2.default)(_catch.Catch.remove({}).exec());
  },


  /**
   * @param {object} dailyCatch - The daily catch to remove the landed entry from
   * @param {string} landedId - The identifier of the landed entry to remove
   * @returns {object} catch - The catch with the specified landed entry removed
   */
  deleteLandedByCatchAndLandedId: function deleteLandedByCatchAndLandedId(dailyCatch, landedId) {
    dailyCatch.landed = _underscore2.default.reject(dailyCatch.landed, function (landed) {
      return landed._id == landedId;
    });
    return (0, _q2.default)(dailyCatch.save(function (error) {
      if (error) {
        console.log(error);
      }
    }));
  },


  /**
   * @param {object} dailyCatch - The daily catch containing the landed entry to update
   * @param {string} landedId - The identifier of the landed entry to update, currently only support updating the boolean sold property
   * @returns {object} catch - The catch with the specified landed entry updated
   */
  updateLandedByCatchAndLandedId: function updateLandedByCatchAndLandedId(dailyCatch, landedId) {
    _underscore2.default.each(dailyCatch.landed, function (landed) {
      if (landed._id == landedId) {
        landed.sold = !landed.sold;
      }
    });
    return (0, _q2.default)(dailyCatch.save(function (error) {
      if (error) {
        console.log(error);
      }
    }));
  }
};