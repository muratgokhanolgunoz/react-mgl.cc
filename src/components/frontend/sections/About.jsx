import React, { Component } from "react"
import FrontEndContext from "../../../context/FrontEndContext"
import {withTranslation} from 'react-i18next'
import Titles from "./titles/Titles"

import { Container, Row, Col, Image } from "react-bootstrap"

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
                                            src="./assets/uploads/about/about.png"
                                            alt=""
                                            fluid 
                                        ></Image>
                                    </Col>
                                    <Col lg={6} md={12}>
                                        <Titles
                                            title={this.props.t('about.header.ABOUT_SECTION_TITLE')}
                                            subtitle={this.props.t('about.header.ABOUT_SECTION_SUBTITLE')}
                                            description={this.props.t('about.header.ABOUT_SECTION_DESCRIPTION')}
                                            textAlign="text-justify-center"
                                            color="text-dark"
                                            fontSize="section-title-description-font-size"
                                        />
                                        <br />
                                        <a href="./assets/uploads/about/midas_presentation_2021.pdf" rel="nopenner noreferrer" target="_blank" alt="" className="pin-to-center template-button template-button-primary-2" style={{ width: "auto" }}>{this.props.t('about.body.ABOUT_SECTION_BUTTON_PRESENTATION')}</a>
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
export default withTranslation('translation')(About)
