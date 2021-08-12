import React, { Component } from "react"
import FrontEndContext from '../../../context/FrontEndContext'
import ReactFlagsSelect from 'react-flags-select'
import { Container, Nav, Navbar, Image } from "react-bootstrap"

class Navi extends Component {
    render() {
        return (
            <FrontEndContext.Consumer>
                {(context) => {
                    return (
                        <div>
                            <Navbar id="navbar" className="navbar" collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
                                <Container>
                                    <Navbar.Brand href="#home">
                                        <Image className="navi-logo" src={context.state.baseUrl + "uploads/logo.png"} alt="Midas Global Logistic" fluid ></Image>
                                    </Navbar.Brand>
                                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                    <Navbar.Collapse id="responsive-navbar-nav">
                                        <Nav className="me-auto navi">
                                            <Nav.Link href="#services">
                                                {this.props.language('navbar.NAVBAR_ITEM_SERVICES')}
                                            </Nav.Link>
                                            <Nav.Link className="navi-link" href="#about">
                                                {this.props.language('navbar.NAVBAR_ITEM_ABOUT_US')}
                                            </Nav.Link>
                                            <Nav.Link href="#gallery">
                                                {this.props.language('navbar.NAVBAR_ITEM_VIDEO_GALLERY')}
                                            </Nav.Link>
                                            <Nav.Link href="#schedule">
                                                {this.props.language('navbar.NAVBAR_ITEM_SHIP_PROGRAM')}
                                            </Nav.Link>
                                            <Nav.Link href="#blog">
                                                {this.props.language('navbar.NAVBAR_ITEM_ARTICLES_FROM_US')}
                                            </Nav.Link>
                                            <Nav.Link href="#career">
                                                {this.props.language('navbar.NAVBAR_ITEM_CAREER')}
                                            </Nav.Link>
                                            <Nav.Link href="#contact">
                                                {this.props.language('navbar.NAVBAR_ITEM_CONTACT')}
                                            </Nav.Link>
                                        </Nav>
                                        <Nav>
                                            <div className="navi-phone">
                                                <a href={"tel:" + this.props.language('contact.body.phone_information.CONTACT_SECTION_PHONE_INFORMATION_TITLE')}>{this.props.language('contact.body.phone_information.CONTACT_SECTION_PHONE_INFORMATION_TITLE')}</a>
                                            </div>
                                        </Nav>
                                        <Nav className="navi">
                                            <ReactFlagsSelect
                                                countries={["TR", "US"]}
                                                customLabels={{
                                                    "TR": "TR",
                                                    "US": "EN"
                                                }}
                                                selected={context.state.language}
                                                onSelect={code => { context.setLanguage(code); this.props.languageLibrary.changeLanguage(code.toLowerCase().toString()) }}
                                                optionsSize={13}
                                                selectedSize={15}
                                            />
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </div>
                    )
                }}
            </FrontEndContext.Consumer>
        )
    }
}
export default Navi