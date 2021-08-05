import React, { Component, Fragment } from "react"
import TrackingPopup from "./popups/TrackingPopup"
import days from '../../tools/days/days.json'
import { Container, Row, Col, Button, Image, InputGroup, FormControl } from 'react-bootstrap'
import { VscArrowRight } from 'react-icons/vsc'
import iconLeftWidget from '../../assets/icons/home/tracking.svg'
import iconRightWidget from '../../assets/icons/home/navlun.svg'

class Home extends Component {

    state = {
        reservationNumber: "",
        iframeSrc: "",
        popupShow: false
    }

    handlePopupShow = (_status) => this.setState({ popupShow: _status })

    search = () => {
        if (this.state.reservationNumber === "") {
            alert("Please enter bill of lading number")
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
        // Get current date, month, day
        let currentDate = new Date()
        let currentDay = currentDate.getDay()
        let currentMonth = currentDate.getMonth()

        // Calculating instant week number
        let getFirstDateOfYear = new Date(currentDate.getFullYear(), 0, 1);
        let numberOfDays = Math.floor((currentDate - getFirstDateOfYear) / (24 * 60 * 60 * 1000));
        let currentWeek = Math.floor((currentDate.getDay() + 1 + numberOfDays) / 7);

        // Setting styles for elements
        const styles = {
            photos: {
                backgroundImage: `url("${days[currentDay].photo}")`
            },
            calendar: {
                backgroundColor: days[currentDay].color
            }
        }

        return (

            <Fragment>
                <div id="home" className="home" style={styles.photos}>
                    <div className="home-calender">
                        <div className="home-calender-item" style={styles.calendar} data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400">
                            <span>{this.props.language('home.calendar.CALENDAR_MONTH_NAMES.' + currentMonth)}</span>
                            <h1>{currentDay}</h1>
                            <span>{this.props.language('home.calendar.CALENDAR_DAY_NAMES.' + currentDay)}</span>
                        </div>
                        <div className="home-calender-item" style={styles.calendar} data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400">
                            <span>{this.props.language('home.calendar.CALENDAR_WEEK_TEXT')} : {currentWeek}</span>
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
                                            <Button className="template-button template-button-primary-2 letter-spacing-2 text-uppercase" style={{ marginBottom: "4px" }} onClick={() => this.price()}>{this.props.language('home.widgets.pricing.WIDGETS_PRICING_BUTTON_TEXT')}</Button>
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
                </div>
            </Fragment>
        );
    }
}
export default Home
