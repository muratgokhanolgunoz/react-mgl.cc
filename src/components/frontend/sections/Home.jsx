import React, { Component } from "react"
import TrackingPopup from "./popups/TrackingPopup"

import days from '../../../tools/days/days.json'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Container, Row, Col, Button, Image, InputGroup, FormControl } from 'react-bootstrap'
import { VscArrowRight } from 'react-icons/vsc'

import iconLeftWidget from '../../../assets/icons/home/tracking.svg'
import iconRightWidget from '../../../assets/icons/home/freight.svg'

const currentDate = new Date()

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
        // Calculating instant week number;
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
            });
        } else {
            this.setState({ iframeSrc: "https://frigian.com/events/tracking-frame.php?dm=midas&ln=tr&ky=00&of=" + this.state.reservationNumber })
            this.handlePopupShow(true)
            this.setState({ reservationNumber: "" })
        }
    }

    price = () => {
        this.setState({ iframeSrc: "https://frigian.com/#/home/midas/yVqEw1Pj9ijUJIP6TCpj1BYj11Ctjr9J" })
        this.handlePopupShow(true)
    }

    render() {
        // Setting styles for elements
        const styles = {
            photos: {
                backgroundImage: `url("${days[currentDate.getDay()].photo}")`
            },
            calendar: {
                backgroundColor: days[currentDate.getDay()].color
            }
        }

        return (
            <div>
                <div id="home" className="home" style={styles.photos}>
                        <div className="home-calender">
                            <div className="home-calender-item" style={styles.calendar} data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400">
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
                                            <Image className="home-widget-item-image" src={iconLeftWidget} alt="" fluid />
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
                                            <Image className="home-widget-item-image" src={iconRightWidget} alt="" fluid />
                                        </Col>
                                        <Col lg={8} md={12}>
                                            <h4>{this.props.language('home.widgets.pricing.WIDGETS_PRICING_TITLE')}</h4>
                                            <p>{this.props.language('home.widgets.pricing.WIDGETS_PRICING_BODY')}</p>
                                            <Button className="template-button template-button-primary-2 letter-spacing-2 text-uppercase mb-1" onClick={() => this.price()}>{this.props.language('home.widgets.pricing.WIDGETS_PRICING_BUTTON_TEXT')}</Button>
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
            </div>
        );
    }
}
export default Home
