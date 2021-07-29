import React, { Component, Fragment } from "react";
import queryString from "query-string";
import Slider from "react-slick";
import Iframe from "react-iframe";
import Titles from "../titles/Titles";
import videosJson from "./videos.js";
import { Container, Row, Col, Image, Modal, Button } from "react-bootstrap";
import { VscSearch, VscArrowRight, VscArrowLeft, VscChromeClose, } from "react-icons/vsc";

let urlParams;

class VideoGallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            previousButtonValue: undefined,
            currentVideo: undefined,
            nextButtonValue: undefined,
            show: false,
        };

        this.handleShow = this.handleShow.bind(this);
    }

    componentDidMount() {
        // eslint-disable-next-line no-restricted-globals
        urlParams = queryString.parse(location.search);
        this.showVideoFromUrl();
    }

    showVideoFromUrl = () => {
        if (Object.keys(urlParams).length !== 0) {
            this.showVideo(parseInt(urlParams.video));
        }
    };

    /* Videos modal control functions */
    handleClose = () => {
        this.setState(() => ({
            previousButtonValue: undefined,
            currentVideo: undefined,
            nextButtonValue: undefined,
            show: false,
        }));
    };
    handleShow = () => this.setState({ show: true });

    showVideo = (videoId) => {
        var temp = videoId;

        this.setState(() => ({ currentVideo: videoId }));
        this.setState(() => ({ nextButtonValue: videoId + 1 }));
        this.setState(() => ({ previousButtonValue: videoId - 1 }));

        if (temp + 1 >= videosJson.length) {
            this.setState(() => ({ nextButtonValue: undefined }));
        }

        if (temp - 1 <= -1) {
            this.setState(() => ({ previousButtonValue: undefined }));
        }

        this.forceUpdate();
        this.handleShow();
    };

    navigationVideo = (videoId) => {
        this.showVideo(videoId);
    };

    slickNext = () => {
        this.slider.slickNext();
    }

    slickPrevious = () => {
        this.slider.slickPrev();
    }

    render() {
        const settings = {
            className: "videos-body-carousel-settings",
            centerMode: true,
            infinite: true,
            slidesToShow: 3,
            speed: 100,
            centerPadding: "30px",
            dots: false,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <Fragment>
                <div id="gallery" className="section-padding">
                    <Container fluid>
                        <Row>
                            <Titles title="Galeri" subtitle="" description="" textAlign="text-center" />
                        </Row>
                        <Row className="videos-body">
                            <Slider className="videos-body-carousel" ref={c => (this.slider = c)} {...settings}>
                                {
                                    videosJson.map(video => (
                                        <Col key={video.id} className="videos-body-items">
                                            <Image className="videos-body-images" src={video.thumbnail} alt="" fluid></Image>
                                            <div className="videos-body-images-overlay" onClick={() => this.showVideo(video.id)}>
                                                <VscSearch className="videos-body-images-icon" />
                                            </div>
                                        </Col>
                                    ))
                                }
                            </Slider>
                            <br />
                            <div className="videos-body-carousel-button text-center">
                                <Button className="m-2" variant="dark" onClick={this.slickPrevious}>
                                    <VscArrowLeft />
                                </Button>
                                <Button className="m-2" variant="dark" onClick={this.slickNext}>
                                    <VscArrowRight />
                                </Button>
                            </div>
                        </Row>
                    </Container>

                    <Modal show={this.state.show} onHide={this.handleClose} animation={false} size="lg" centered
                    >
                        <Modal.Header>
                            <Button className="modal-videos-buttons modal-videos-close-button pin-to-right text-center" onClick={() => this.handleClose()}>
                                <VscChromeClose className="modal-videos-close-button-icon" />{" "}CLOSE
                            </Button>
                        </Modal.Header>
                        <Modal.Body>
                            <Iframe className="modal-videos-body-iframe" url={this.state.currentVideo !== undefined ? videosJson[this.state.currentVideo].src : ""} allowFullScreen={true} />
                            <br />
                            <div>
                                <Row>
                                    <Col>
                                        {this.state.previousButtonValue !== undefined ? (
                                            <Button className="modal-videos-buttons modal-videos-navigation-buttons pin-to-left text-center" variant="light" onClick={() => this.navigationVideo(this.state.previousButtonValue)} >
                                                <VscArrowLeft /> PREVIOUS
                                            </Button>
                                        ) : null}
                                    </Col>

                                    <Col>
                                        {this.state.nextButtonValue !== undefined ? (
                                            <Button className="modal-videos-buttons modal-videos-navigation-buttons pin-to-right text-center" variant="light" onClick={() => this.navigationVideo(this.state.nextButtonValue)} >
                                                NEXT {"  "} <VscArrowRight />
                                            </Button>
                                        ) : null}
                                    </Col>
                                </Row>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
            </Fragment>
        );
    }
}
export default VideoGallery;
