const FlickrFetcher = {
  photoObjectToURL: (photoObject) => {
    return `https://farm${photoObject.farm}.staticflickr.com/${photoObject.server}/${photoObject.id}_${photoObject.secret}_b.jpg`
  },
  transformPhotoObject: (photoObject) => {
    return {
      title: photoObject.title,
      url: FlickrFetcher.photoObjectToURL(photoObject)
    }
  }
}

module.exports = FlickrFetcher