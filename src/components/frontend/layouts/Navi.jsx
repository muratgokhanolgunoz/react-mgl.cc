/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react"
import Context from '../../../context/Context'
import PropTypes from 'prop-types'
import Cookies from 'universal-cookie'
import ReactFlagsSelect from 'react-flags-select'
import { withTranslation } from "react-i18next"
import { Container, Nav, Navbar, Image } from "react-bootstrap"
import ScrollToTop from "./ScrollToTop"

const cookies = new Cookies()

class Navi extends Component {

    navigate = (e, id) => {
        e && e.preventDefault()
        const elementToView = document.getElementById(id)
        elementToView.scrollIntoView()
    }

    handleLanguage = (_language) => {
        this.props.i18n.changeLanguage(_language)

        if (cookies.get("language") !== undefined) {
            this.props.funcSetCookie(_language)
        }
    }

    render() {
        return (
            <Context.Consumer>
                {(context) => {
                    return (
                        <div>
                            <Navbar id="navbar" className="navbar" collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
                                <Container>
                                    <Navbar.Brand>
                                        <Image className="navi-logo" src="./assets/img/logo.png" alt="Midas Global Logistic" fluid ></Image>
                                    </Navbar.Brand>
                                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                    <Navbar.Collapse id="responsive-navbar-nav">
                                        <Nav className="me-auto navi">
                                            {/* <a onClick={(e => this.navigate(e, 'home'))}>
                                                {this.props.t('navbar.NAVBAR_ITEM_HOME')}
                                            </a> */}

                                            <a onClick={(e => this.navigate(e, 'services'))}>
                                                {this.props.t('navbar.NAVBAR_ITEM_SERVICES')}
                                            </a>

                                            <a onClick={(e => this.navigate(e, 'about'))}>
                                                {this.props.t('navbar.NAVBAR_ITEM_ABOUT_US')}
                                            </a>

                                            <a onClick={(e => this.navigate(e, 'gallery'))}>
                                                {this.props.t('navbar.NAVBAR_ITEM_VIDEO_GALLERY')}
                                            </a>

                                            <a onClick={(e => this.navigate(e, 'schedule'))}>
                                                {this.props.t('navbar.NAVBAR_ITEM_SHIP_PROGRAM')}
                                            </a>

                                            {
                                                context.state.blogs.length > 0
                                                    ?
                                                    (
                                                        <a onClick={(e => this.navigate(e, 'blog'))}>
                                                            {this.props.t('navbar.NAVBAR_ITEM_ARTICLES_FROM_US')}
                                                        </a>
                                                    )
                                                    : null
                                            }

                                            <a onClick={(e => this.navigate(e, 'career'))}>
                                                {this.props.t('navbar.NAVBAR_ITEM_CAREER')}
                                            </a>

                                            <a onClick={(e => this.navigate(e, 'contact'))}>
                                                {this.props.t('navbar.NAVBAR_ITEM_CONTACT')}
                                            </a>
                                        </Nav>
                                        <Nav>
                                            <div className="navi-phone">
                                                <a href="tel:+902124381818">+90 (212) 438 18 18</a>
                                            </div>
                                        </Nav>
                                        <Nav className="navi">
                                            <ReactFlagsSelect
                                                id="navbar-select-language"
                                                countries={["TR", "US"]}
                                                customLabels={{
                                                    "TR": "TR",
                                                    "US": "EN"
                                                }}
                                                selected={this.props.i18n.language.toUpperCase()}
                                                onSelect={_language => this.handleLanguage(_language.toLowerCase().toString())}
                                                optionsSize={13}
                                                selectedSize={15}
                                            />
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                            <ScrollToTop funcNavigate={this.navigate} />
                        </div>
                    )
                }}
            </Context.Consumer>
        )
    }
}

Navi.propTypes = {
    funcSetCookie: PropTypes.func.isRequired,
}

export default withTranslation('translation')(Navi)