import React, { useState, Fragment } from 'react'
import Iframe from 'react-iframe'
import Titles from '../../titles/Titles'
import videosJson from './videos.js'
import { Row, Col, Image, Modal } from 'react-bootstrap'
import { VscSearch } from "react-icons/vsc";

const VideoGallery = () => {

    const [show, setShow] = useState(false);
    const [currentVideo, setCurrentVideo] = useState()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const changeVideo = (videoSrc) => {
        setCurrentVideo(videoSrc)
        handleShow()
    }

    return (
        <Fragment>
            <div id="videos" className="videos section-padding">
                <Row>
                    <Row>
                        <Titles
                            title="Videolarımız"
                            subtitle=""
                            description=""
                            textAlign="text-center"
                        />
                    </Row>
                </Row>
                <Row className="videos-body">
                    {
                        videosJson.map((video, index) => (
                            <Col key={index} className="videos-body-items" lg={3} md={6}>
                                <Image className="videos-body-images" src={video.thumbnail} alt="" fluid></Image>
                                <div className="videos-body-images-overlay" onClick={() => changeVideo(video.src)}>
                                    <VscSearch className="videos-body-images-icon" />
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </div>

            <Modal show={show} onHide={handleClose} animation={false} size="lg" centered>
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <Iframe className="modal-videos-body-iframe"
                        url={currentVideo} 
                        allowFullScreen={true} />
                </Modal.Body>
            </Modal>
        </Fragment>
    )
}
export default VideoGallery