import React, { Component, Fragment } from 'react'
import Iframe from 'react-iframe'
import Titles from './titles/Titles'
import { Container, Row, Col } from 'react-bootstrap'
import { BiHome, BiMobileAlt, BiEnvelope } from "react-icons/bi";

class Contact extends Component {
    render() {
        return (
            <Fragment>
                <div id="contact" className="contact section-padding">
                    <Container className="main">
                        <Row>
                            <Titles title="Bizimle İletişin" subtitle="" description="" textAlign="text-center" color="text-dark" fontSize="section-title-description-font-size" />
                        </Row>
                        <Row>
                            <Col className="contact-left" lg={8}>
                                <Iframe className="contact-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.0578992644246!2d28.99093511564473!3d41.06772702371284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab657ea6a07d5%3A0x9079f26acc3cf03e!2sMidas%20Global%20Logistics%20LTD%20STI!5e0!3m2!1str!2str!4v1628061413047!5m2!1str!2str"></Iframe>
                            </Col>
                            <Col className="contact-right" lg={4}>
                                <div className="contact-info">
                                    <Row>
                                        <Col sm={2}>
                                            <span className="contact-info-icon-upper">
                                                <BiHome className="contact-info-icon" />
                                            </span>
                                        </Col>
                                        <Col sm={10}>
                                            <div className="contact-info-body">
                                                <h4>Şişli, İstanbul, Türkiye</h4>
                                                <p>Mecidiyeköy Mahallesi Şehit Ahmet Sokak No: 4 Kat: 6 Daire: 85 Mecidiyeköy İş Merkezi</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="contact-info">
                                    <Row>
                                        <Col sm={2}>
                                            <span className="contact-info-icon-upper">
                                                <BiMobileAlt className="contact-info-icon" />
                                            </span>
                                        </Col>
                                        <Col col={10}>
                                            <div className="contact-info-body">
                                                <h4><a href="tel:02124381818">+90 (212) 438 18 18</a></h4>
                                                <p>Pazartesi - Cuma / 09:00 - 18:00</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="contact-info">
                                    <Row>
                                        <Col sm={2}>
                                            <span className="contact-info-icon-upper">
                                                <BiEnvelope className="contact-info-icon" />
                                            </span>
                                        </Col>
                                        <Col sm={10}>
                                            <div className="contact-info-body">
                                                <h4><a href="mailto:info@mgl.cc">info@mgl.cc</a></h4>
                                                <p>Bizimle iletişime geçin</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        )
    }
}
export default Contact