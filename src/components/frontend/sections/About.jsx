import React, { Component, Fragment } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Titles from "./titles/Titles";

class About extends Component {
    render() {
        return (
            <Fragment>
                <div id="about" className="about section-padding">
                    <Container>
                        <Row>
                            <Col lg={6} md={12}>
                                <Image
                                    src={this.props.language('about.body.ABOUT_SECTION_PHOTO')}
                                    alt=""
                                    fluid data-aos="flip-right"
                                    data-aos-offset="200"
                                    data-aos-easing="ease-in-sine"
                                    data-aos-duration="400"
                                ></Image>
                            </Col>
                            <Col lg={6} md={12}>
                                <Titles
                                    title={this.props.language('about.header.ABOUT_SECTION_TITLE')}
                                    subtitle={this.props.language('about.header.ABOUT_SECTION_SUBTITLE')}
                                    description={this.props.language('about.header.ABOUT_SECTION_DESCRIPTION')}
                                    textAlign="text-left"
                                    color="text-dark"
                                    fontSize="section-title-description-font-size"
                                />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        )
    }
}
export default About;
