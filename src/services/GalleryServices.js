import Services from './Services'

class GalleryServices extends Services {
    getVideos(_language) {
        return this.getList(_language + '/getVideos')
    }
}

export default GalleryServices