import React, { Component, Fragment } from "react"
import { Container, Row, Col, Image, InputGroup, FormControl } from 'react-bootstrap'
import Button from '@material-ui/core/Button';
import { VscArrowRight } from 'react-icons/vsc';
import iconLeftWidget from '../../assets/icons/home/tracking1.svg'
import iconRightWidget from '../../assets/icons/home/price.svg'

import days from '../../tools/days/days.js'

class Home extends Component {
    render() {

        var currentDate = new Date()
        var currentDay = currentDate.getDay()

        return (
            <Fragment>
                <div id="home" className="home" style={{ backgroundImage: `url("${days[currentDay].photo}")` }}></div>
                <div id="home-widgets">
                    <Container className="main margin-top--100">
                        <Row>
                            <Col lg={2} md={12}></Col>
                            <Col lg={4} md={12} data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400">
                                <div className="home-widget-item">
                                    <Row>
                                        <Col lg={4} md={12} className="text-center">
                                            <Image className="home-widget-item-image" src={iconLeftWidget} alt="" fluid />
                                        </Col>
                                        <Col lg={8} md={12}>
                                            <h4>e-Takip</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                            <InputGroup className="mb-2">
                                                <FormControl id="home-widget-item-reservation-number" placeholder="Rezervasyon No"/>
                                                <InputGroup.Text className="cursor-pointer">
                                                    <VscArrowRight />
                                                </InputGroup.Text>
                                            </InputGroup>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>

                            <Col lg={4} md={12} data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400">
                                <div className="home-widget-item">
                                    <Row>
                                        <Col lg={4} md={12} className="text-center">
                                            <Image className="home-widget-item-image" src={iconRightWidget} alt="" fluid />
                                        </Col>
                                        <Col lg={8} md={12}>
                                            <h4>e-Navlun</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                            <Button variant="contained" color="primary" style={{ marginBottom: "5px" }}>
                                                FİYATLARI GÖR
                                            </Button>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        );
    }
}
export default Home
