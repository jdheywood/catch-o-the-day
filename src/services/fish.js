'use strict';

import { Fish } from '../models/fish';

/**
 * Fish service
 * @module services/fish
 */
module.exports = {

  /**
   * @returns {array} fish - All types of fish supported by the system
   */
  async getAllFish() {
    return await Fish.find({}).sort({ 'name': 'asc'}).exec();
  },

};
