'use strict'

const expect = require('chai').expect;

const FlickrFetcher = require('./flickr-fetcher.js');

describe('FlickrFetcher', function() {
  it ('should exist', function() {
    expect(FlickrFetcher).to.not.be.undefined;
  })
})

// this test passes even though there's nothing in flickr-fetcher
// just because the file exists

describe('#photoObjectToURL', function () {
  it ('shoudl take a photo object from Flickr API and return a string', function() {
    const input = {
        id:       '24770505034',
        owner:    '97248275@N03',
        secret:   '31a9986429',
        server:   '1577',
        farm:     2,
        title:    '20160229090898',
        ispublic: 1,
        isfriend: 0,
        isfamily: 0
    };
    const expected = 'https://farm2.staticflickr.com/1577/24770505034_31a9986429_b.jpg'
    const actual = FlickrFetcher.photoObjectToURL(input)
    expect(actual).to.eql(expected)
  })
})

// eql checks every value inside actual to be equal to be expected
// use equal for strings, numbers, booleans, and eql for arrays and objects
