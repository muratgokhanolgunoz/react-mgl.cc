import React, { Fragment } from "react"
import Context from '../../context/Context'
import ReactFlagsSelect from 'react-flags-select';
import { Container, Row, Col, Nav, Navbar, Image } from "react-bootstrap"
import logo from "../../assets/images/logo.png"

const Navi = () => {
    return (
        <Context.Consumer>
            {(context) => {
                return (
                    <Fragment>
                        <div id="navbar-upper" className="navbar-upper">
                            <Container>
                                <Row>
                                    <Col lg={6}></Col>
                                    <Col className="navbar-upper-box" lg={3} sm={6}>
                                        e-Mail : {' '}
                                        <a className="navbar-upper-item" href="mailto:info@mgl.cc">
                                            info@mgl.cc
                                        </a>
                                    </Col>
                                    <Col className="navbar-upper-box" lg={3} sm={6}>
                                        Tel : {' '}
                                        <a className="navbar-upper-item" href="tel:02124381818">
                                            +90 (212) 438 18 18
                                        </a>
                                        {' / '}
                                        <a className="navbar-upper-item" href="tel:02122174100">
                                            +90 (212) 217 41 00
                                        </a>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <Navbar id="navbar" className="navbar" collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
                            <Container>
                                <Navbar.Brand href="#home">
                                    <Image
                                        className="navi-logo"
                                        src={logo}
                                        alt="Midas Global Logistic"
                                        fluid
                                    ></Image>
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="me-auto navi">
                                        <Nav.Link href="#services">Servİslerİmİz</Nav.Link>
                                        <Nav.Link className="navi-link" href="#about">Hakkımızda</Nav.Link>
                                        <Nav.Link href="#gallery">Galerİ</Nav.Link>
                                        <Nav.Link href="#schedule">Gemİ Programı</Nav.Link>
                                        <Nav.Link href="#">Blog</Nav.Link>
                                        <Nav.Link href="#contact">İletİşİm</Nav.Link>
                                        <Nav.Link href="#contact">Karİyer</Nav.Link>
                                    </Nav>
                                    <Nav className="navi">
                                        <ReactFlagsSelect
                                            countries={["TR", "US", "CN", "IR", "SA"]}
                                            customLabels={{
                                                "TR": "TR",
                                                "US": "EN",
                                                "CN": "ZH",
                                                "IR": "FA",
                                                "SA": "AR"
                                            }}
                                            selected={context.state.language}
                                            onSelect={code => context.setLanguage(code)}
                                            optionsSize={13}
                                            selectedSize={15}
                                        />
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </Fragment>
                )
            }}
        </Context.Consumer>
    );
};
export default Navi
