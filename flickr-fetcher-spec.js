'use strict'

const expect = require('chai').expect;

describe('FlickrFetcher', function() {
  it ('should exist', function() {
    var FlickrFetcher = require('./flickr-fetcher.js');
    expect(FlickrFetcher.to.not.be.undefined);
  })
})