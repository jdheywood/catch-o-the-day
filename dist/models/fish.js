'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

_mongoose2.default.Promise = require('q').Promise;

/**
 * FishSchema, each
 */
var FishSchema = new Schema({
  name: { type: String, index: { unique: true, dropDups: true } }
}, { collection: 'fish' });

var Fish = _mongoose2.default.model('Fish', FishSchema);

module.exports = { Fish: Fish };