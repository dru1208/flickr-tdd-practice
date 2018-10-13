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


// # because the function is a method in FlickrFetcher
describe('#photoObjectToURL', function() {
  it ('should take a photo object from Flickr API and return a string', function() {
    let input = {
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
    let expected = 'https://farm2.staticFlickr.com/1577/24770505034_31a9986429_b.jpg'
    let actual = FlickrFetcher.photoObjectToURL(input)
    expect(actual).to.eql(expected)

    input = {
      id:       '24770504484',
      owner:    '97248275@N03',
      secret:   '69dd90d5dd',
      server:   '1451',
      farm:     2,
      title:    '20160229090903',
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    };
    expected = 'https://farm2.staticFlickr.com/1451/24770504484_69dd90d5dd_b.jpg'
    actual = FlickrFetcher.photoObjectToURL(input)
    expect(actual).to.eql(expected)
  })
})

// eql checks every value inside actual to be equal to be expected
// use equal for strings, numbers, booleans, and eql for arrays and objects


describe("#transformPhotoObject", function() {
  it ('should take an input photo object and return an object with title and generated URL', function() {
    let input = {
      id: '25373736106',
      owner: '99117316@N03',
      secret: '146731fcb7',
      server: '1669',
      farm: 2,
      title: 'Dog goes to desperate measure to avoid walking on a leash',
      ispublic: 1,
      isfriend: 0,
      isfamily: 0
    }
    let expected = {
      title: 'Dog goes to desperate measure to avoid walking on a leash',
      url:   'https://farm2.staticflickr.com/1669/25373736106_146731fcb7_b.jpg'
    },
    actual = FlickrFetcher.transformPhotoObj(input);
    expect(actual).to.eql(expected);
  })
})



