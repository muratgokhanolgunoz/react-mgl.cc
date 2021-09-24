import Services from './Services'

class GalleryServices extends Services {
    getVideos(_language) {
        return this.getList('mglGetVideos/' + _language)
    }
}

export default GalleryServices