'use strict';

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

mongoose.Promise = require('q').Promise;

/**
 * FishSchema, each
 */
const FishSchema = new Schema({
  name: {type: String, index: {unique: true, dropDups: true}}
}, { collection: 'fish' });

const Fish = mongoose.model('Fish', FishSchema);

module.exports = { Fish };
