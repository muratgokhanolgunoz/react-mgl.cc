import React, { Component, Fragment } from "react";
import queryString from "query-string";
import Slider from "react-slick";
import Titles from "./titles/Titles";
import videosJson from "../../tools/videos/videos.js";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { VscArrowRight, VscArrowLeft } from "react-icons/vsc";
import GalleryPopup from "./popups/GalleryPopup";
import Context from "../../context/Context";

let urlParams;

class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            previousButtonValue: undefined,
            currentVideo: undefined,
            nextButtonValue: undefined,
        };
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
    };

    navigationVideo = (videoId) => {
        this.showVideo(videoId);
    };

    slickNext = () => {
        this.slider.slickNext();
    };

    slickPrevious = () => {
        this.slider.slickPrev();
    };

    render() {
        const settings = {
            className: "videos-body-carousel",
            centerMode: true,
            infinite: true,
            slidesToShow: 3,
            speed: 100,
            dots: false,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                    },
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        };

        return (
            <Context.Consumer>
                {(context) => {
                    return (
                        <Fragment>
                            <div id="gallery" className="section-padding">
                                <Container fluid>
                                    <Row>
                                        <Titles title="Video Galerimiz" subtitle="" description="" textAlign="text-center" color="text-dark" fontSize="section-title-description-font-size" />
                                    </Row>
                                    <Row className="videos-body" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                                        <Slider ref={(c) => (this.slider = c)} {...settings} >
                                            {videosJson.map((video) => (
                                                <Col key={video.id} className="videos-body-items">
                                                    <Image className="videos-body-images" src={video.thumbnail} alt="" fluid></Image>
                                                    <div className="videos-body-images-overlay" onClick={() => { this.showVideo(video.id); context.videosPopupShowStatusToggle(true); }}>
                                                        {/* <VscSearch className="videos-body-images-icon" /> */}
                                                    </div>
                                                </Col>
                                            ))}
                                        </Slider>
                                        <br />
                                        <div className="videos-body-carousel-button text-center" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                                            <Button className="m-2 template-button template-button-primary-1" onClick={this.slickPrevious}>
                                                <VscArrowLeft size="14px"/>&emsp;GERİ
                                            </Button>
                                            <Button className="m-2 template-button template-button-primary-1" onClick={this.slickNext}>
                                                İLERİ&emsp;<VscArrowRight size="14px"/>
                                            </Button>
                                        </div>
                                    </Row>
                                </Container>

                                <GalleryPopup propsVideosJson={videosJson} propsPreviousButtonValue={this.state.previousButtonValue} propsNextButtonValue={this.state.nextButtonValue} propsCurrentVideo={this.state.currentVideo} propsNaviationVideo={this.navigationVideo} />
                            </div>
                        </Fragment>
                    );
                }}
            </Context.Consumer>
        );
    }
}
Gallery.contextType = Context
export default Gallery;
