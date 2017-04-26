'use strict';

import q from 'q';
import { Landed, Catch } from '../models/catch';

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
  createNewCatch(fish, weight, weather) {
    let landed = new Landed({
      fish: fish,
      weight: weight
    });
    let newCatch = new Catch({
      weather: weather,
      landed: [landed]
    });
    return q(newCatch.save( (error) => {
      if (error) {
        console.log(error);
      }
    }));
  },

  getCatchById(id) {
    return q(Catch.findById(id).exec());
  },

  addLandedFish(theCatch, fish, weight) {
    let landed = new Landed({
      fish: fish,
      weight: weight
    });
    theCatch.landed.push(landed);
    return q(theCatch.save( (error) => {
      if (error) {
        console.log(error);
      }
    }));
  },

  getAllCatches() {
    return q(Catch.find({}).sort({ 'date': 'asc'}).exec());
  },

};
