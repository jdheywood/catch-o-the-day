'use strict';

import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import moment from 'moment';

mongoose.Promise = require('q').Promise;

/**
 * LandedSchema, weight of given type of fish
 */
const LandedSchema = new Schema({
  weight: String,
  fish: String
});

/**
 * CatchSchema, collection of landed weights of fish by day.
 * (date field is defaulted to format YYYY-MM-DD for sorting, day granularity will suffice for our requirements)
 */
const CatchSchema = new Schema({
  date: { type: Date, default: moment().format('YYYY-MM-DD') },
  weather: String,
  landed: [LandedSchema]
}, { collection: 'catches' });

const Landed = mongoose.model('Landed', LandedSchema);
const Catch = mongoose.model('Catch', CatchSchema);

module.exports = { Landed, Catch };
