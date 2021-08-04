import React, { Component, Fragment } from "react"
import TrackingPopup from "./popups/TrackingPopup";
import days from '../../tools/days/days.js'
import { Container, Row, Col, Button, Image, InputGroup, FormControl } from 'react-bootstrap'
import { VscArrowRight } from 'react-icons/vsc';
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

        var currentDate = new Date()
        var currentDay = currentDate.getDay()

        return (
            <Fragment>
                <div id="home" className="home" style={{ backgroundImage: `url("${days[currentDay].photo}")` }}></div>
                <div id="home-widgets">
                    <Container className="main margin-top--100">
                        <Row>
                            <Col xl={2} md={12}></Col>
                            <Col xl={4} md={12} data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400">
                                <div className="home-widget-item">
                                    <Row>
                                        <Col lg={4} md={12} className="text-center">
                                            <Image className="home-widget-item-image" src={iconLeftWidget} alt="" fluid />
                                        </Col>
                                        <Col lg={8} md={12}>
                                            <h4>e-Takip</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                            <InputGroup className="mb-2">
                                                <FormControl id="home-widget-item-reservation-number" value={this.state.reservationNumber} placeholder="Konşimento Numaranız" maxLength={15} onChange={(e) => this.setState({ reservationNumber: e.target.value })} />
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
                                            <h4>e-Navlun</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                            <Button className="template-button template-button-primary-2 letter-spacing-2 " style={{ marginBottom: "4px" }} onClick={() => this.price()}>
                                                NAVLUN AL
                                            </Button>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    <TrackingPopup popupShow={this.state.popupShow} iframeSrc={this.state.iframeSrc} popupShowToggle={this.handlePopupShow} />
                </div>
            </Fragment>
        );
    }
}
export default Home
