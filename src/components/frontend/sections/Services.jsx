import React, { Component } from "react"
import FrontEndContext from '../../../context/FrontEndContext'
import { withTranslation } from "react-i18next"
import Titles from "./titles/Titles"

import { Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCube, faCubes, faShip, faTruck, } from "@fortawesome/free-solid-svg-icons"

class Services extends Component {
    render() {
        return (
            <FrontEndContext.Consumer>
                {(context) => {
                    return (
                        <div id="services" className="services section-padding">
                            <Row>
                                <Titles
                                    title={this.props.t('services.header.SERVICES_SECTION_TITLE')}
                                    subtitle={this.props.t('services.header.SERVICES_SECTION_SUBTITLE')}
                                    description={this.props.t('services.header.SERVICES_SECTION_DESCRIPTION')}
                                    textAlign="text-center"
                                    color="text-dark"
                                    fontSize="section-title-description-font-size"
                                />
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <div className="services-item">
                                        <div className="services-box">
                                            <h3>{this.props.t('services.body.first.SERVICES_SECTION_FIRST_TITLE')}</h3>
                                            <FontAwesomeIcon className="services-icon" icon={faShip} size="3x"></FontAwesomeIcon>
                                            <p>{this.props.t('services.body.first.SERVICES_SECTION_FIRST_BODY')}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="services-item">
                                        <div className="services-box">
                                            <h3>{this.props.t('services.body.second.SERVICES_SECTION_SECOND_TITLE')}</h3>
                                            <FontAwesomeIcon className="services-icon" icon={faCubes} size="3x"></FontAwesomeIcon>
                                            <p>{this.props.t('services.body.second.SERVICES_SECTION_SECOND_BODY')}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="services-item">
                                        <div className="services-box">
                                            <h3>{this.props.t('services.body.third.SERVICES_SECTION_THIRD_TITLE')}</h3>
                                            <FontAwesomeIcon className="services-icon" icon={faCube} size="3x"></FontAwesomeIcon>
                                            <p>{this.props.t('services.body.third.SERVICES_SECTION_THIRD_BODY')}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="services-item">
                                        <div className="services-box">
                                            <h3>{this.props.t('services.body.fourth.SERVICES_SECTION_FOURTH_TITLE')}</h3>
                                            <FontAwesomeIcon className="services-icon" icon={faTruck} size="3x"></FontAwesomeIcon>
                                            <p>{this.props.t('services.body.fourth.SERVICES_SECTION_FOURTH_BODY')}</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    )
                }}
            </FrontEndContext.Consumer>
        )
    }
}
export default withTranslation('translation')(Services)
