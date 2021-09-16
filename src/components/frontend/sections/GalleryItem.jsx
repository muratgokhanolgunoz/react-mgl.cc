import React, { Component, Fragment } from 'react'
import { Image } from 'react-bootstrap'
import PropTypes from 'prop-types'

class GalleryItem extends Component {
    render() {
        return (
            <Fragment>
                <div className="videos-body-images-overlay" onClick={() => this.props.showVideo(this.props.video.id)}>
                    <p>{this.props.video.title}</p>
                </div>
                <Image className="videos-body-images" src={this.props.video.thumbnail} alt="" fluid onClick={() => this.props.showVideo(this.props.video.id)}></Image>
            </Fragment>
        )
    }
}

GalleryItem.propTypes = {
    video: PropTypes.object.isRequired,
    showVideo: PropTypes.func.isRequired,
}

export default GalleryItem