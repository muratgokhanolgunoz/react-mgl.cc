import React, { Component } from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import FrontEndContext from "../../../context/FrontEndContext"
import Titles from "./titles/Titles"

class About extends Component {
    render() {
        return (
            <FrontEndContext.Consumer>
                {(context) => {
                    return (
                        <div id="about" className="about section-padding">
                            <Container>
                                <Row>
                                    <Col lg={6} md={12}>
                                        <Image
                                            src={context.state.baseUrl + "uploads/about/about.png"}
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
                                            textAlign="text-justify-center"
                                            color="text-dark"
                                            fontSize="section-title-description-font-size"
                                        />
                                        <br />
                                        <a href={context.state.baseUrl + "uploads/about/midas_presentation_2021.pdf"} rel="noreferrer" target="_blank" alt="" className="pin-to-center template-button template-button-primary-2" style={{ width: "auto" }}>{this.props.language('about.body.ABOUT_SECTION_BUTTON_PRESENTATION')}</a>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    )
                }}
            </FrontEndContext.Consumer>
        )
    }
}
export default About
