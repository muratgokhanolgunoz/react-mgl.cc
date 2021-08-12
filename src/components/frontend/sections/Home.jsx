import React, { Component } from "react"
import Cookies from 'universal-cookie';
import FrontEndContext from '../../../context/FrontEndContext'
import TrackingPopup from "./popups/TrackingPopup"
import days from '../../../tools/days/days.json'

import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { Container, Row, Col, Button, Image, InputGroup, FormControl } from 'react-bootstrap'

import { VscArrowRight } from 'react-icons/vsc'

const currentDate = new Date()
const cookies = new Cookies();

class Home extends Component {
    state = {
        reservationNumber: "",
        iframeSrc: "",
        popupShow: false,
        currentMonth: 0,
        currentWeek: 0,
        currentDayNumber: 0,
        currentDayInWeek: 0
    }

    componentDidMount() {
        // Get current date, month, day
        // Calculating instant week number
        this.setState({
            currentMonth: currentDate.getMonth(),
            currentDayNumber: currentDate.getDate(), // Current day number in current month
            currentDayInWeek: currentDate.getDay(), // Current day index in week for day names ( 0 => Sunday, 1 => Monday )
            currentWeek: Math.ceil(Math.floor((new Date() - new Date(currentDate.getFullYear(), 0, 1)) / (24 * 60 * 60 * 1000)) / 7)
        })
    }

    handlePopupShow = (_status) => this.setState({ popupShow: _status })

    search = () => {
        if (this.state.reservationNumber === "") {
            toast(this.props.language('home.widgets.WIDGETS_BILL_OF_LADING_NUMBER_MESSAGE'), {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                type: "dark"
            })
        } else {
            if (this.props.languageLibrary.language === 'tr')
                this.setState({ iframeSrc: "https://frigian.com/events/tracking-frame.php?dm=midas&ln=tr&ky=00&of=" + this.state.reservationNumber })
            else
                this.setState({ iframeSrc: "https://frigian.com/events/tracking-frame.php?dm=midas&ln=en&ky=00&of=" + this.state.reservationNumber })
            this.handlePopupShow(true)
            this.setState({ reservationNumber: "" })
        }
    }

    price = () => {
        this.setState({ iframeSrc: "https://frigian.com/#/home/midas/yVqEw1Pj9ijUJIP6TCpj1BYj11Ctjr9J" })
        this.handlePopupShow(true)
    }

    selectPhoto = () => {
        if (currentDate.getDay() === 0 || currentDate.getDay() === 6) // Saturday (6) or Sunday (0)
            return days.photos.weekends[Math.floor(Math.random() * (days.photos.weekends.length))].photo
        else
            return days.photos.weekdays[Math.floor(Math.random() * (days.photos.weekdays.length))].photo
    }

    setCookie = () => {
        var maxAge = new Date(Date.now() + (24 * 60 * 60 * 1000))
        cookies.set('acceptLanguage', true, { path: '/', expires: maxAge })
        cookies.set('language', window.navigator.language, { path: '/', expires: maxAge })

        this.context.setCookie({
            cookie: {
                languageAccept: true,
                language: window.navigator.language
            }
        })
    }

    getCookie = () => {
        return {
            languageAccept: cookies.get('languageAccept'),
            language: cookies.get('language')
        }
    }

    render() {
        // Setting styles for elements
        const styles = {
            photos: {
                backgroundImage: `url("${this.selectPhoto()}")`
            },
            calendar: {
                backgroundColor: days.colors[currentDate.getDay()].color
            }
        }

        return (
            <FrontEndContext.Consumer>
                {(context) => {
                    return (
                        <div>
                            <div id="home" className="home" style={styles.photos}>
                                <div className="home-calender">
                                    <div className="home-calender-item" style={styles.calendar} data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="200">
                                        <span>{this.props.language('home.calendar.CALENDAR_MONTH_NAMES.' + this.state.currentMonth)}</span>
                                        <h1>{this.state.currentDayNumber}</h1>
                                        <span>{this.props.language('home.calendar.CALENDAR_DAY_NAMES.' + this.state.currentDayInWeek)}</span>
                                    </div>
                                    <div className="home-calender-item" style={styles.calendar} data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400">
                                        <span>{this.props.language('home.calendar.CALENDAR_WEEK_TEXT')} : {this.state.currentWeek}</span>
                                    </div>
                                </div>
                            </div>

                            <div id="home-widgets">
                                <Container className="main margin-top--100">
                                    <Row>
                                        <Col xl={{ span: 4, offset: 2 }} md={12} data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400">
                                            <div className="home-widget-item">
                                                <Row>
                                                    <Col lg={4} md={12} className="text-center">
                                                        <Image className="home-widget-item-image" src={context.state.baseUrl + "uploads/home/icons/tracking.svg"} alt="" fluid />
                                                    </Col>
                                                    <Col lg={8} md={12}>
                                                        <h4>{this.props.language('home.widgets.tracking.WIDGETS_TRACKING_TITLE')}</h4>
                                                        <p>{this.props.language('home.widgets.tracking.WIDGETS_TRACKING_BODY')}</p>
                                                        <InputGroup className="mb-2">
                                                            <FormControl id="home-widget-item-reservation-number" value={this.state.reservationNumber} placeholder={this.props.language('home.widgets.tracking.WIDGETS_TRACKING_INPUT_PLACEHOLDER')} maxLength={15} onChange={(e) => this.setState({ reservationNumber: e.target.value })} />
                                                            <InputGroup.Text className="cursor-pointer" onClick={() => this.search()}>
                                                                <VscArrowRight />
                                                            </InputGroup.Text>
                                                        </InputGroup>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>

                                        <Col xl={4} md={12} data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400">
                                            <div className="home-widget-item">
                                                <Row>
                                                    <Col lg={4} md={12} className="text-center">
                                                        <Image className="home-widget-item-image" src={context.state.baseUrl + "uploads/home/icons/freight.svg"} alt="" fluid />
                                                    </Col>
                                                    <Col lg={8} md={12}>
                                                        <h4>{this.props.language('home.widgets.pricing.WIDGETS_PRICING_TITLE')}</h4>
                                                        <p>{this.props.language('home.widgets.pricing.WIDGETS_PRICING_BODY')}</p>
                                                        <Button className="template-button template-button-primary-2 letter-spacing-2 text-uppercase mb-1" onClick={() => this.price()}>
                                                            <small>{this.props.language('home.widgets.pricing.WIDGETS_PRICING_BUTTON_TEXT')}</small>
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>

                                <TrackingPopup
                                    language={this.props.language}
                                    popupShow={this.state.popupShow}
                                    iframeSrc={this.state.iframeSrc}
                                    popupShowToggle={this.handlePopupShow}
                                />

                                <ToastContainer />
                            </div>

                            {
                                this.getCookie().language === undefined && this.context.state.cookie.language === undefined
                                    ?
                                    (
                                        <div className="cookie-banner" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400">
                                            <h5>{this.props.language('privacy.PRIVACY_HEADER')}</h5>
                                            <p>{this.props.language('privacy.PRIVACY_TEXT')}</p>
                                            <Button className="cookie_banner_button template-button template-button-primary-1" onClick={() => this.setCookie()}>{this.props.language('privacy.PRIVACY_BUTTON')}</Button>
                                        </div>
                                    )
                                    :
                                    null
                            }
                        </div>
                    )
                }}
            </FrontEndContext.Consumer>
        )
    }
}
Home.contextType = FrontEndContext
export default Home
