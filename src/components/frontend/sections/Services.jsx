import React, { Component } from "react"
import Context from '../../../context/Context'
import { withTranslation } from "react-i18next"
import Titles from "../layouts/SectionTitles"

import { Row, Col } from "react-bootstrap"
import { GiCargoShip, GiTruck, GiCubeforce, GiTrophyCup } from "react-icons/gi"

class Services extends Component {
    render() {
        return (
            <Context.Consumer>
                {(context) => {
                    return (
                        <div id="services" className="services section-padding">
                            <Row>
                                <Titles
                                    title={this.props.t('services.header.SERVICES_SECTION_TITLE')}
                                    subtitle={this.props.t('services.header.SERVICES_SECTION_SUBTITLE')}
                                    description={this.props.t('services.header.SERVICES_SECTION_DESCRIPTION')}
                                />
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <div className="services-item">
                                        <div className="services-box">
                                            <h3>
                                                {this.props.t('services.body.first.SERVICES_SECTION_FIRST_TITLE')}</h3>
                                            <GiCargoShip className="services-icon" />
                                            <p>{this.props.t('services.body.first.SERVICES_SECTION_FIRST_BODY')}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="services-item">
                                        <div className="services-box">
                                            <h3>{this.props.t('services.body.second.SERVICES_SECTION_SECOND_TITLE')}</h3>
                                            <GiCubeforce className="services-icon" />
                                            <p>{this.props.t('services.body.second.SERVICES_SECTION_SECOND_BODY')}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="services-item">
                                        <div className="services-box">
                                            <h3>{this.props.t('services.body.third.SERVICES_SECTION_THIRD_TITLE')}</h3>
                                            <GiTrophyCup className="services-icon" />
                                            <p>{this.props.t('services.body.third.SERVICES_SECTION_THIRD_BODY')}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="services-item">
                                        <div className="services-box">
                                            <h3>{this.props.t('services.body.fourth.SERVICES_SECTION_FOURTH_TITLE')}</h3>
                                            <GiTruck className="services-icon" />
                                            <p>{this.props.t('services.body.fourth.SERVICES_SECTION_FOURTH_BODY')}</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    )
                }}
            </Context.Consumer>
        )
    }
}
export default withTranslation('translation')(Services)
