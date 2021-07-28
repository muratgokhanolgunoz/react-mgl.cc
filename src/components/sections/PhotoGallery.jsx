import React, { Fragment } from 'react'
import Titles from '../sections/Titles/Titles'
import { Row, Col } from 'react-bootstrap'

const PhotoGallery = () => {
    return (
        <Fragment>
            <div id="photos" className="photos">
                <Row>
                    <Titles
                        title="Fotoğraf Galerisi"
                        subtitle=""
                        description=""
                        textAlign="text-center"
                    />
                </Row>
                <Row className="section">

                </Row>
            </div>
        </Fragment>
    )
}
export default PhotoGallery