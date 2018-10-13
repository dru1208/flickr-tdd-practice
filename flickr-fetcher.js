const FlickrFetcher = {
  photoObjectToURL: (photoObject) => {
    return `https://farm${photoObject.farm}.staticFlickr.com/${photoObject.server}/${photoObject.id}_${photoObject.secret}_b.jpg`
  }
}

module.exports = FlickrFetcher