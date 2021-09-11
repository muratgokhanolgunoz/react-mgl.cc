import Services from './Services'

class GalleryServices extends Services {
    getVideos() {
        return this.getList('getVideos')
    }
}

export default GalleryServices