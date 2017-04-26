'use strict';

import q from 'q';
import { Fish } from '../models/fish';

/**
 * Fish service
 * @module services/fish
 */
module.exports = {

  /**
   * @returns {array} fish - All types of fish supported by the system
   */
  getAllFish() {
    return q(Fish.find({}).sort({ 'name': 'asc'}).exec());
  },

};
