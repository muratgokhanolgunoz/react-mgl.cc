import React, { Component } from "react"
import Context from '../../../context/Context'
import HomeServise from "../../../services/HomeService"
import WidgetPopup from "./popups/WidgetPopup"
import { withTranslation } from "react-i18next"
import { showToast } from '../../../core/functions'
import { ToastContainer } from 'react-toastify'
import { Container, Row, Col, Button, Image, InputGroup, FormControl } from 'react-bootstrap'
import { VscArrowRight } from 'react-icons/vsc'

let homeService = new HomeServise()

class Home extends Component {
    state = {
        homeBannerPhoto: "",
        homeCalendarColor: "",
        reservationNumber: "",
        iframeSrc: "",
        popupShow: false,
        currentMonth: 0,
        currentWeek: 0,
        currentDayNumber: 0,
        currentDayInWeek: 0
    }

    componentDidMount() {
        homeService.getHome(this.props.i18n.language.toString().toLowerCase())
            .then((response) => this.setState({
                homeBannerPhoto: response.data.result.photo,
                homeCalendarColor: response.data.result.color,
                currentMonth: response.data.result.currentMonth,
                currentDayNumber: response.data.result.currentDayNumberInMonth, // Current day number in current month
                currentDayInWeek: response.data.result.currentDayNumberInWeek, // Current day index in week for day names ( 0 => Sunday, 1 => Monday )
                currentWeek: response.data.result.currentWeek
            }))
            .catch(() => console.warn("Error Occured : There was a problem on the api side while getting the home banner & home calendar requests"))
    }

    handlePopupShow = (_status) => this.setState({ popupShow: _status })

    search = () => {
        if (this.state.reservationNumber === "") {
            showToast("bottom-center", this.props.t('home.widgets.WIDGETS_BILL_OF_LADING_NUMBER_MESSAGE'), "dark")
        } else {
            if (this.props.i18n.language === 'tr')
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

    render() {
        // Setting styles for elements
        const styles = {
            photos: {
                backgroundImage: `url("${this.state.homeBannerPhoto}")`
            },
            calendar: {
                backgroundColor: this.state.homeCalendarColor
            }
        }

        return (
            <Context.Consumer>
                {(context) => {
                    return (
                        <div>
                            <div id="home" className="home" style={styles.photos}>
                                <div className="home-calender">
                                    <div className="home-calender-item" style={styles.calendar}>
                                        <span>{this.props.t('home.calendar.CALENDAR_MONTH_NAMES.' + this.state.currentMonth)}</span>
                                        <h1>{this.state.currentDayNumber}</h1>
                                        <span>{this.props.t('home.calendar.CALENDAR_DAY_NAMES.' + this.state.currentDayInWeek)}</span>
                                    </div>
                                    <div className="home-calender-item" style={styles.calendar}>
                                        <span>{this.props.t('home.calendar.CALENDAR_WEEK_TEXT')} : {this.state.currentWeek}</span>
                                    </div>
                                </div>
                            </div>

                            <div id="home-widgets">
                                <Container className="main margin-top--100">
                                    <Row>
                                        <Col xl={{ span: 4, offset: 2 }} md={6}>
                                            <div className="home-widget-item">
                                                <Row>
                                                    <Col lg={4} md={12} className="text-center">
                                                        <Image className="home-widget-item-image" src="./assets/uploads/home/icons/tracking.svg" alt="" fluid />
                                                    </Col>
                                                    <Col lg={8} md={12}>
                                                        <h4>{this.props.t('home.widgets.tracking.WIDGETS_TRACKING_TITLE')}</h4>
                                                        <p>{this.props.t('home.widgets.tracking.WIDGETS_TRACKING_BODY')}</p>
                                                        <InputGroup className="mb-2">
                                                            <FormControl id="home-widget-item-reservation-number" value={this.state.reservationNumber} placeholder={this.props.t('home.widgets.tracking.WIDGETS_TRACKING_INPUT_PLACEHOLDER')} maxLength={15} onChange={(e) => this.setState({ reservationNumber: e.target.value })} />
                                                            <InputGroup.Text className="cursor-pointer" onClick={() => this.search()}>
                                                                <VscArrowRight />
                                                            </InputGroup.Text>
                                                        </InputGroup>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>

                                        <Col xl={4} md={6}>
                                            <div className="home-widget-item">
                                                <Row>
                                                    <Col lg={4} md={12} className="text-center">
                                                        <Image className="home-widget-item-image" src="./assets/uploads/home/icons/freight.svg" alt="" fluid />
                                                    </Col>
                                                    <Col lg={8} md={12}>
                                                        <h4>{this.props.t('home.widgets.pricing.WIDGETS_PRICING_TITLE')}</h4>
                                                        <p>{this.props.t('home.widgets.pricing.WIDGETS_PRICING_BODY')}</p>
                                                        <Button className="template-button template-button-primary-2 letter-spacing-2 template-button-box-shadow text-uppercase mb-1" onClick={() => this.price()}>
                                                            <small>{this.props.t('home.widgets.pricing.WIDGETS_PRICING_BUTTON_TEXT')}</small>
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>

                                <WidgetPopup
                                    popupShow={this.state.popupShow}
                                    iframeSrc={this.state.iframeSrc}
                                    popupShowToggle={this.handlePopupShow}
                                />

                                <ToastContainer />
                            </div>
                        </div>
                    )
                }}
            </Context.Consumer>
        )
    }
}

Home.contextType = Context
export default withTranslation('translation')(Home)
