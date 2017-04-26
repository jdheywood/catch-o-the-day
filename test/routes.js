'use strict';

import indexTests from './routes/index';
import catchTests from './routes/api/catch';

import {describe} from 'mocha';
import {expect, should} from 'chai';

describe('Routes', () => {
  indexTests();
  catchTests();
});