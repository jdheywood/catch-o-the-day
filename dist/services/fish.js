'use strict';

var _q = require('q');

var _q2 = _interopRequireDefault(_q);

var _fish = require('../models/fish');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Fish service
 * @module services/fish
 */
module.exports = {

  /**
   * @returns {array} fish - All types of fish supported by the system
   */
  getAllFish: function getAllFish() {
    return (0, _q2.default)(_fish.Fish.find({}).sort({ 'name': 'asc' }).exec());
  }
};