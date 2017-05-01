'use strict';

import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import moment from 'moment';

mongoose.Promise = require('q').Promise;

/**
 * LandedSchema, weight of given type of fish
 */
const LandedSchema = new Schema({
  fish: String,
  weight: String,
  sold: { type: Boolean, default: false }
});

/**
 * CatchSchema, collection of landed weights of fish by day.
 * (date field is defaulted to format YYYY-MM-DD for sorting, day granularity will suffice for our requirements)
 */
const CatchSchema = new Schema({
  day: { type: String, default: moment().format('YYYY-MM-DD'), index: {unique: true, dropDups: true} },
  weather: String,
  landed: [LandedSchema]
}, { collection: 'catches' });

const Catch = mongoose.model('Catch', CatchSchema);
const Landed = mongoose.model('Landed', LandedSchema);

module.exports = { Catch, Landed };
