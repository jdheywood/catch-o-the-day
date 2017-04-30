'use strict';

import weatherService from '../../src/services/weather';

import {describe} from 'mocha';
import {expect, should} from 'chai';

const exampleApiResponse = {
  coord: {
    lon: 139,
    lat: 35
  },
  weather: [
    {
      id: 800,
      main: "Clear",
      description: "clear sky",
      icon: "01n"
    }
  ],
  base: "stations",
  main: {
    temp: 290.563,
    pressure: 1015.44,
    humidity: 86,
    temp_min: 290.563,
    temp_max: 290.563,
    sea_level: 1024.75,
    grnd_level: 1015.44
  },
  wind: {
    speed: 6.62,
    deg: 240
  },
  clouds: {
    all: 0
  },
  dt: 1493580010,
  sys: {
    message: 0.0067,
    country: "JP",
    sunrise: 1493495625,
    sunset: 1493544543
  },
  id: 1851632,
  name: "Shuzenji",
  cod: 200
};

module.exports = () => {
  describe('weatherService', () => {
    describe('when getApiResponse is called', () => {
      it('should return a json object containing a weather array', () => {
        weatherService.getApiResponse().then((actual) => {
          expect(actual).to.be.an('object');
        });
      });
    });
    describe('when getCurrentWeather is called with an API response', () => {
      it('should return a proper cased string of the current weather', () => {
        let actual = weatherService.getCurrentWeather(exampleApiResponse);
        expect(actual).to.be.a('string');
        expect(actual).to.have.length.of.at.least(1);
        expect(actual).to.equal(exampleApiResponse.weather[0].description.toProperCase());
      })
    })
  });

};
