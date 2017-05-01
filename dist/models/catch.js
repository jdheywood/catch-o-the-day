'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;


_mongoose2.default.Promise = require('q').Promise;

/**
 * LandedSchema, weight of given type of fish
 */
var LandedSchema = new Schema({
  fish: String,
  weight: String,
  sold: { type: Boolean, default: false }
});

/**
 * CatchSchema, collection of landed weights of fish by day.
 * (date field is defaulted to format YYYY-MM-DD for sorting, day granularity will suffice for our requirements)
 */
var CatchSchema = new Schema({
  day: { type: String, default: (0, _moment2.default)().format('YYYY-MM-DD'), index: { unique: true, dropDups: true } },
  weather: String,
  landed: [LandedSchema]
}, { collection: 'catches' });

var Catch = _mongoose2.default.model('Catch', CatchSchema);
var Landed = _mongoose2.default.model('Landed', LandedSchema);

module.exports = { Catch: Catch, Landed: Landed };