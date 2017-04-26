'use strict';

import fishTests from './services/fish';

import {describe} from 'mocha';
import {expect, should} from 'chai';

describe('Services', () => {
  fishTests();
});