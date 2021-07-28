import React, { Fragment } from "react"
import Titles from "./Titles/Titles"
import { Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCube, faCubes, faShip, faTruck } from "@fortawesome/free-solid-svg-icons"

const Services = () => {
    return (
        <Fragment>
            <div id="services" className="services section-padding">
                <Row>
                    <Titles
                        title="Servislerimiz"
                        subtitle=""
                        description=""
                        textAlign="text-center"
                    />
                </Row>
                <Row className="section">
                    <Col md={6}>
                        <div className="services-item" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                            <div className="services-box">
                                <h4>Yükleme</h4>
                                <FontAwesomeIcon className="services-icon" icon={faShip} size="3x"></FontAwesomeIcon>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="services-item" data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                            <div className="services-box">
                                <h4>Parsiyel</h4>
                                <FontAwesomeIcon className="services-icon" icon={faCubes} size="3x"></FontAwesomeIcon>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="services-item" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                            <div className="services-box">
                                <h4>Özel Ekipman</h4>
                                <FontAwesomeIcon className="services-icon" icon={faCube} size="3x"></FontAwesomeIcon>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="services-item" data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                            <div className="services-box">
                                <h4>Kapıya Teslim</h4>
                                <FontAwesomeIcon className="services-icon" icon={faTruck} size="3x"></FontAwesomeIcon>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};
export default Services
