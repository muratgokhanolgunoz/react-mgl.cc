import React, { Component } from "react"
import FrontEndContext from '../../../context/FrontEndContext'
import GalleryServices from '../../../services/GalleryServices'
import PropTypes from "prop-types"
import queryString from "query-string"
import Slider from "react-slick"
import { withTranslation } from "react-i18next"

import Titles from "../layouts/SectionTitles"
import GalleryPopup from "./popups/GalleryPopup"

import { Container, Row, Col, Image, Button } from "react-bootstrap"

let urlParams
let language
let galleryService = new GalleryServices()

class Gallery extends Component {
    constructor(props) {
        super(props)

        this.state = {
            videos: [],
            previousButtonValue: undefined,
            currentVideo: undefined,
            nextButtonValue: undefined,
            popupShow: false
        }
    }

    componentDidMount() {
        language = this.props.funcGetCookie().language === undefined ? "us" : this.props.funcGetCookie().language
        this.getVideos()
    }

    componentDidUpdate() {
        if (language !== this.props.i18n.language) {
            language = this.props.i18n.language
            this.getVideos()
        }
    }

    getVideos = () => {
        galleryService.getVideos(language)
            .then((response) => {
                this.setState({
                    videos: response.data.result
                })
            })
            .then(() => {
                // eslint-disable-next-line no-restricted-globals
                urlParams = queryString.parse(location.search)
                this.showVideoFromUrl()
            })
            .catch(() => console.warn("Error : An error occured when fething videos"))
    }

    handlePopupShow = (_status) => this.setState({ popupShow: _status })

    showVideoFromUrl = () => {
        if (Object.keys(urlParams).length !== 0) {
            this.showVideo(parseInt(urlParams.video))
        }
    }

    showVideo = (videoId) => {
        var temp = videoId

        this.setState(() => ({ currentVideo: videoId }))
        this.setState(() => ({ nextButtonValue: videoId + 1 }))
        this.setState(() => ({ previousButtonValue: videoId - 1 }))

        if (temp + 1 >= this.state.videos.length) {
            this.setState(() => ({ nextButtonValue: undefined }))
        }

        if (temp - 1 <= 0) {
            this.setState(() => ({ previousButtonValue: undefined }))
        }

        this.handlePopupShow(true)
    }

    navigationVideo = (videoId) => {
        this.showVideo(videoId)
    }

    slickNext = () => {
        this.slider.slickNext()
    }

    slickPrevious = () => {
        this.slider.slickPrev()
    }

    render() {
        const settings = {
            className: "videos-body-carousel",
            centerPadding: "10px",
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
        }

        return (
            <FrontEndContext.Consumer>
                {(context) => {
                    return (
                        <div id="gallery" className="section-padding">
                            <Container fluid>
                                <Row>
                                    <Titles
                                        title={this.props.t('gallery.header.GALLERY_SECTION_TITLE')}
                                        subtitle={this.props.t('gallery.header.GALLERY_SECTION_SUBTITLE')}
                                        description={this.props.t('gallery.header.GALLERY_SECTION_DESCRIPTION')}
                                        textAlign="text-center"
                                        color="text-primary-2"
                                        fontSize="section-title-description-font-size"
                                    />
                                </Row>
                                <br />
                                <Row className="videos-body">
                                    <Slider ref={(c) => (this.slider = c)} {...settings} >
                                        {this.state.videos.map((video) => (
                                            // Ignoring the empty 0th index from the json file in order to set the video sequence number exactly
                                            // Please see tools/videos/videos.json file
                                            video.id !== 0
                                                ?
                                                (
                                                    <Col key={video.id} className="videos-body-items">
                                                        <Image className="videos-body-images" src={video.thumbnail} alt="" fluid onClick={() => this.showVideo(video.id)}></Image>
                                                        <div className="videos-body-images-overlay" onClick={() => this.showVideo(video.id)}>
                                                            <p>{video.title}</p>
                                                        </div>
                                                    </Col>
                                                )
                                                :
                                                null
                                        ))}
                                    </Slider>
                                    <br />
                                    <div className="videos-body-carousel-button text-center">
                                        <Button className="m-2 template-button template-button-primary-1 template-button-box-shadow" onClick={this.slickPrevious}>
                                            {this.props.t('template.buttons.TEMPLATE_PREVIOUS_BUTTON')}
                                        </Button>
                                        <Button className="m-2 template-button template-button-primary-1 template-button-box-shadow" onClick={this.slickNext}>
                                            {this.props.t('template.buttons.TEMPLATE_NEXT_BUTTON')}
                                        </Button>
                                    </div>
                                </Row>
                            </Container>

                            <GalleryPopup
                                language={this.props.t}
                                popupShow={this.state.popupShow}
                                popupShowToggle={this.handlePopupShow}
                                propsVideosJson={this.state.videos}
                                propsPreviousButtonValue={this.state.previousButtonValue}
                                propsNextButtonValue={this.state.nextButtonValue}
                                propsCurrentVideo={this.state.currentVideo}
                                propsNaviationVideo={this.navigationVideo}
                            />
                        </div>
                    )
                }}
            </FrontEndContext.Consumer>
        )
    }
}

Gallery.propTypes = {
    funcGetCookie: PropTypes.func.isRequired
}

export default withTranslation('translation')(Gallery)
