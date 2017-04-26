'use strict';

import q from 'q';
import { Catch, Landed } from '../models/catch';

/**
 * Catch service
 * @module services/catch
 */
module.exports = {

  /**
   * @returns {array} catches - Array of all catches in the system
   */
  getAllCatches() {
    return q(Catch.find({}).sort({ 'date': 'asc'}).exec());
  },

  /**
   * @param {string} id - The identifier of the catch to fetch
   * @returns {object} catch - The catch with the given identifier
   */
  getCatchById(id) {
    return q(Catch.findById(id).exec());
  },

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

  /**
   *
   * @param {object} theCatch - The catch to add a landed weight of fish to
   * @param {string} fish - The name of the type of fish landed
   * @param {string} weight - The weight of the type of fish landed
   * @returns {object} catch - The updated catch object
   */
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

  /**
   * @param {string} id - The identifier of the catch to fetch
   * @returns {object} catch - The catch with the given identifier
   */
  deleteCatchById(id) {
    return q(Catch.findByIdAndRemove(id).exec());
  },

};
