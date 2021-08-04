import React, { Fragment } from "react"
import Context from '../../context/Context'
import ReactFlagsSelect from 'react-flags-select';
import { Container, Nav, Navbar, Image } from "react-bootstrap"
import logo from "../../assets/images/logo.png"

const Navi = () => {
    return (
        <Context.Consumer>
            {(context) => {
                return (
                    <Fragment>
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
                                        <Nav.Link href="#gallery">Vİdeolarımız</Nav.Link>
                                        <Nav.Link href="#schedule">Gemİ Programımız</Nav.Link>
                                        <Nav.Link href="#blog">Bİzden Yazılar</Nav.Link>
                                        <Nav.Link href="#career">Karİyer</Nav.Link>
                                        <Nav.Link href="#contact">İletİşİn</Nav.Link>
                                    </Nav>
                                    <Nav>
                                        <div className="navi-phone">
                                            <a href="tel:02124381818">+90 (212) 438 18 18</a>
                                        </div>
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
