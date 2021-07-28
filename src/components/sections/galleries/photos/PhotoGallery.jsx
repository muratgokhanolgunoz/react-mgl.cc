import React, { Fragment } from 'react'
import Titles from '../../titles/Titles'
import Gallery from 'react-grid-gallery';
import images from './photos.js'
import { Row } from 'react-bootstrap'
import { VscSearch } from "react-icons/vsc";

const PhotoGallery = () => {
    const overlayStyle = {
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        overflow: "hidden",
        position: "absolute",
        paddingTop: "4.5em",
        textAlign: "center",
        bottom: "0",
        width: "100%",
        height: "100%",
        color: "white",
    };

    var styledImages = images.map(image => {
        image.customOverlay = (
            <div style={overlayStyle}>
                <VscSearch className="photos-body-icon" />
            </div>
        );
        return image
    })

    return (
        <Fragment>
            <div id="photos" className="photos section-padding">
                <Row>
                    <Titles
                        title="Fotoğraflarımız"
                        subtitle=""
                        description=""
                        textAlign="text-center"
                    />
                </Row>
                <Row>
                    <div className="photos-body" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                        <Gallery className="photos-body-galley" images={styledImages} enableImageSelection={false} />
                    </div>
                </Row>
            </div>
        </Fragment>
    )
}
export default PhotoGallery