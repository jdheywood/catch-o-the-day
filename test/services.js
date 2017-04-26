'use strict';

import fishTests from './services/fish';
import catchTests from './services/catch';

import {describe} from 'mocha';
import {expect, should} from 'chai';

describe('Services', () => {
  fishTests();
  catchTests();
});