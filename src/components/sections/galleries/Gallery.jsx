import React, { Fragment } from 'react'
import PhotoGallery from './photos/PhotoGallery'
import VideoGallery from './videos/VideoGallery'

const Gallery = () => {
    return (
        <Fragment>
            <div id="gallery">
                <PhotoGallery />
                <VideoGallery />
            </div>
        </Fragment>
    )
}
export default Gallery