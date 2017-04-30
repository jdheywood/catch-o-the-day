'use strict';

import catchTests from './services/catch';
import fishTests from './services/fish';
import weatherTests from './services/weather';

import {describe} from 'mocha';
import {expect, should} from 'chai';

describe('Services', () => {
  catchTests();
  fishTests();
  weatherTests();
});