'use strict';

import _ from 'underscore';
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
  async getAllCatches() {
    return await Catch.find({}).sort({ 'date': 'asc'}).exec();
  },

  /**
   * @param {string} id - The identifier of the catch to fetch
   * @returns {object} catch - The catch with the given identifier
   */
  async getCatchById(id) {
    return await Catch.findById(id).exec();
  },

  /**
   * @param {string} day - Formatted date string; YYYY-MM-DD
   * @returns {object} catch - The catch with the given identifier
   */
  async getCatchByDay(day) {
    return await Catch.findOne({day: day}).exec();
  },

  /**
   * @param {string} weather - The weather on the day of the catch
   * @returns {object} catch - The new catch with just day and weather set
   */
  async createNewCatch(weather) {
    let newCatch = new Catch({
      weather: weather
    });
    return await newCatch.save( (error) => {
      if (error) {
        console.log(error);
      }
    });
  },

  /**
   * @param {string} fish - The name of the first type of fish landed for the date
   * @param {string} weight - The weight of the first type of fish landed for the date
   * @param {string} weather - The weather on the day of the catch
   * @returns {object} catch - The new catch, with the first weight of fish landed, day and weather
   */
  async createNewCatchWithLandedFish(fish, weight, weather) {
    let landed = new Landed({
      fish: fish,
      weight: weight
    });
    let newCatch = new Catch({
      weather: weather,
      landed: [landed]
    });
    return await newCatch.save( (error) => {
      if (error) {
        console.log(error);
      }
    });
  },

  /**
   *
   * @param {object} theCatch - The catch to add a landed weight of fish to
   * @param {string} fish - The name of the type of fish landed
   * @param {string} weight - The weight of the type of fish landed
   * @returns {object} catch - The updated catch object
   */
  async addLandedFish(theCatch, fish, weight) {
    let landed = new Landed({
      fish: fish,
      weight: weight
    });
    theCatch.landed.push(landed);
    return await theCatch.save( (error) => {
      if (error) {
        console.log(error);
      }
    });
  },

  /**
   * @param {string} id - The identifier of the catch to fetch
   * @returns {object} catch - The catch with the given identifier
   */
  async deleteCatchById(id) {
    return await Catch.findByIdAndRemove(id).exec();
  },

  /**
   * @returns {object} result - Presumably an empty array OR the array of all documents just removed?
   */
  async deleteAllCatches() {
    return await Catch.remove({}).exec();
  },

  /**
   * @param {object} dailyCatch - The daily catch to remove the landed entry from
   * @param {string} landedId - The identifier of the landed entry to remove
   * @returns {object} catch - The catch with the specified landed entry removed
   */
  async deleteLandedByCatchAndLandedId(dailyCatch, landedId) {
    dailyCatch.landed = _.reject(dailyCatch.landed, (landed) => {
      return landed._id == landedId;
    });
    return await dailyCatch.save( (error) => {
      if (error) {
        console.log(error);
      }
    });
  },

  /**
   * @param {object} dailyCatch - The daily catch containing the landed entry to update
   * @param {string} landedId - The identifier of the landed entry to update, currently only support updating the boolean sold property
   * @returns {object} catch - The catch with the specified landed entry updated
   */
  async updateLandedByCatchAndLandedId(dailyCatch, landedId) {
    _.each(dailyCatch.landed, (landed) => {
      if (landed._id == landedId) {
        landed.sold = !landed.sold;
      }
    });
    return await dailyCatch.save( (error) => {
      if (error) {
        console.log(error);
      }
    });
  },

};
