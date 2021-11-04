import React, { Component } from "react"
import Context from "../../../context/Context"
import { withTranslation } from 'react-i18next'
import Titles from "../layouts/SectionTitles"

import { Container, Row, Col, Image } from "react-bootstrap"

class About extends Component {
    render() {
        return (
            <Context.Consumer>
                {(context) => {
                    return (
                        <div id="about" className="about section-padding">
                            <Container>
                                <Row>
                                    <Titles
                                        title={this.props.t('about.header.ABOUT_SECTION_TITLE')}
                                        subtitle={this.props.t('about.header.ABOUT_SECTION_SUBTITLE')}
                                        description={this.props.t('about.header.ABOUT_SECTION_DESCRIPTION')}
                                    />
                                </Row>
                                <Row>
                                    <Col lg={6} md={12}>
                                        <Image
                                            id="about-image"
                                            className="about-item"
                                            src="./assets/mglUploads/about/about.webp"
                                            alt=""
                                            fluid
                                        ></Image>
                                    </Col>
                                    <Col lg={6} md={12}>
                                        <p className="about-text about-item text-justify-center">{this.props.t('about.body.ABOUT_SECTION_TEXT')}</p>
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col lg={{ offset: 4, span: 4 }}>
                                        <a href="./assets/mglUploads/about/midas_presentation_2021.pdf" rel="nopenner noreferrer" target="_blank" alt="" className="pin-to-center template-button template-button-primary-2 template-button-box-shadow" style={{ width: "auto" }}>{this.props.t('about.body.ABOUT_SECTION_BUTTON_PRESENTATION')}</a>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    )
                }}
            </Context.Consumer>
        )
    }
}
export default withTranslation('translation')(About)
